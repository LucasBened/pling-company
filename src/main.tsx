import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  initWebVitals,
  observePerformance,
  trackSEOMetrics,
} from "./lib/webVitals.ts";

// Initialize performance tracking for SEO
initWebVitals();
observePerformance();
trackSEOMetrics();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
