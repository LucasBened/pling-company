import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const defaultSEO = {
  title:
    "Pling Company | Agência #1 em Tráfego Pago que Entrega Resultados Reais",
  description:
    "🚀 Transformamos seu investimento em marketing em RESULTADOS COMPROVADOS. Especialistas em Google Ads, Meta Ads e geração de leads qualificados. Aumente seu ROI em até 300%! 📈",
  keywords:
    "agência tráfego pago Brasil, gestão Google Ads, especialista Meta Ads, marketing digital ROI, leads qualificados B2B, campanhas Facebook Instagram, otimização conversão, agência marketing performance, consultoria mídias pagas, gestão orçamento publicitário, auditoria campanhas digitais, estratégia funil vendas, automação marketing digital, análise métricas conversão",
  image: "https://plingcompany.com.br/og-image-social.png",
  url: "https://plingcompany.com.br",
  type: "website",
};

export default function SEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = defaultSEO.type,
}: SEOProps) {
  useEffect(() => {
    // Atualiza title
    document.title = title;

    // Atualiza meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Atualiza meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Atualiza Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute("content", image);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", url);
    }

    // Atualiza Twitter Cards
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", title);
    }

    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]'
    );
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    }

    // Atualiza canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, keywords, image, url, type]);

  return null; // Este componente não renderiza nada visualmente
}
