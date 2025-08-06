/* eslint-disable @typescript-eslint/no-explicit-any */
// Web Vitals tracking for SEO performance
import { onCLS, onINP, onFCP, onLCP } from "web-vitals";

interface WebVitalMetric {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  delta: number;
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      parameters?: Record<string, unknown>
    ) => void;
  }
}

// Function to send metrics to analytics (Google Analytics, etc.)
function sendToAnalytics(metric: WebVitalMetric) {
  // Send to Google Analytics 4
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", metric.name, {
      event_category: "Web Vitals",
      event_label: metric.rating,
      value: Math.round(metric.value),
      custom_parameter_1: metric.delta,
    });
  }

  // Console log for development
  if (process.env.NODE_ENV === "development") {
    console.log("Web Vitals:", metric);
  }
}

// Initialize Web Vitals tracking
export function initWebVitals() {
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics);
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
}

// Performance observer for custom metrics
export function observePerformance() {
  if ("PerformanceObserver" in window) {
    // Observe layout shifts
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (
          entry.entryType === "layout-shift" &&
          !(entry as any).hadRecentInput
        ) {
          console.log("Layout shift detected:", entry);
        }
      }
    });

    try {
      observer.observe({ type: "layout-shift", buffered: true });
    } catch (error) {
      console.warn("Layout shift observation not supported:", error);
    }
  }
}

// SEO-specific performance tracking
export function trackSEOMetrics() {
  // Track time to first contentful paint
  window.addEventListener("load", () => {
    const navigation = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;
    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;

    console.log("Page load time:", loadTime);

    // Track resource loading
    const resources = performance.getEntriesByType(
      "resource"
    ) as PerformanceResourceTiming[];
    const images = resources.filter(
      (resource) => resource.initiatorType === "img"
    );
    const totalImageSize = images.reduce(
      (sum, img) => sum + (img.transferSize || 0),
      0
    );

    console.log("Total image size:", totalImageSize);

    // Send custom metrics to analytics if available
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_load_time", {
        event_category: "Performance",
        value: Math.round(loadTime),
      });

      window.gtag("event", "image_load_size", {
        event_category: "Performance",
        value: Math.round(totalImageSize / 1024), // KB
      });
    }
  });
}
