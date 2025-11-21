export type SeoConfig = {
  title: string;
  description: string;
  /** Optional list of comma-separated keywords for legacy SEO support */
  keywords?: string[];
  /** Path part of the canonical URL, e.g. "/services/ai-automation". Defaults to current location. */
  canonicalPath?: string;
  /** Open Graph type, defaults to `website`. */
  ogType?: string;
  /** Optional robots directive, e.g. "index,follow" or "noindex,nofollow". */
  robots?: string;
};

function ensureMeta(name: string, isProperty = false): HTMLMetaElement {
  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!el) {
    el = document.createElement("meta");
    if (isProperty) {
      el.setAttribute("property", name);
    } else {
      el.setAttribute("name", name);
    }
    document.head.appendChild(el);
  }

  return el;
}

function ensureCanonicalLink(): HTMLLinkElement {
  let link = document.head.querySelector("link[rel=\"canonical\"]") as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  return link;
}

export function applySeo(config: SeoConfig) {
  if (typeof document === "undefined") return;

  const { title, description, keywords, canonicalPath, ogType, robots } = config;

  if (title) {
    document.title = title;
  }

  if (description) {
    const metaDescription = ensureMeta("description");
    metaDescription.setAttribute("content", description);
  }

  if (keywords && keywords.length > 0) {
    const metaKeywords = ensureMeta("keywords");
    metaKeywords.setAttribute("content", keywords.join(", "));
  }

  if (robots) {
    const metaRobots = ensureMeta("robots");
    metaRobots.setAttribute("content", robots);
  }

  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const url = canonicalPath ? `${origin}${canonicalPath}` : window.location.href.split("#")[0];

  const canonical = ensureCanonicalLink();
  if (origin) {
    canonical.setAttribute("href", url);
  }

  // Open Graph
  const ogTitle = ensureMeta("og:title", true);
  ogTitle.setAttribute("content", title);

  const ogDescription = ensureMeta("og:description", true);
  ogDescription.setAttribute("content", description);

  const ogUrl = ensureMeta("og:url", true);
  ogUrl.setAttribute("content", url);

  const ogTypeMeta = ensureMeta("og:type", true);
  ogTypeMeta.setAttribute("content", ogType || "website");

  // Twitter
  const twitterCard = ensureMeta("twitter:card");
  twitterCard.setAttribute("content", "summary_large_image");

  const twitterTitle = ensureMeta("twitter:title");
  twitterTitle.setAttribute("content", title);

  const twitterDescription = ensureMeta("twitter:description");
  twitterDescription.setAttribute("content", description);
}

/**
 * Inject Organization / WebSite structured data using the current origin.
 * Called once from the app shell; safe to run multiple times.
 */
export function ensureOrganizationJsonLd() {
  if (typeof document === "undefined" || typeof window === "undefined") return;

  const existing = document.getElementById("forgeash-org-jsonld");
  if (existing) return;

  const origin = window.location.origin;

  const payload = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "#forgeash-org",
    name: "ForgeAsh Technologies",
    url: origin,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-63691-26439",
        contactType: "sales",
        areaServed: "IN",
      },
    ],
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "forgeash-org-jsonld";
  script.text = JSON.stringify(payload);

  document.head.appendChild(script);
}

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function applyBreadcrumbJsonLd(id: string, items: BreadcrumbItem[]) {
  if (typeof document === "undefined" || typeof window === "undefined") return;

  if (!items || items.length === 0) return;

  const scriptId = `forgeash-breadcrumb-${id}`;
  const existing = document.getElementById(scriptId);
  if (existing) return;

  const origin = window.location.origin;

  const payload = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${origin}${item.path}`,
    })),
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = scriptId;
  script.text = JSON.stringify(payload);
  document.head.appendChild(script);
}

export function ensureServicesJsonLd() {
  if (typeof document === "undefined" || typeof window === "undefined") return;

  const existing = document.getElementById("forgeash-services-jsonld");
  if (existing) return;

  const origin = window.location.origin;

  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "High-Performance Business Websites",
        serviceType: "Web development",
        provider: { "@id": "#forgeash-org" },
        url: `${origin}/services/websites`,
        areaServed: [
          { "@type": "City", name: "Chennai" },
          { "@type": "State", name: "Tamil Nadu" },
          { "@type": "Country", name: "India" },
        ],
      },
      {
        "@type": "Service",
        name: "AI Systems & Automation",
        serviceType: "AI automation",
        provider: { "@id": "#forgeash-org" },
        url: `${origin}/services/ai-automation`,
        areaServed: [
          { "@type": "City", name: "Chennai" },
          { "@type": "State", name: "Tamil Nadu" },
          { "@type": "Country", name: "India" },
        ],
      },
      {
        "@type": "Service",
        name: "SaaS MVP Build",
        serviceType: "SaaS application development",
        provider: { "@id": "#forgeash-org" },
        url: `${origin}/services/saas-mvp-build`,
        areaServed: [
          { "@type": "City", name: "Chennai" },
          { "@type": "State", name: "Tamil Nadu" },
          { "@type": "Country", name: "India" },
        ],
      },
      {
        "@type": "Service",
        name: "Data Dashboards & Automation",
        serviceType: "Business intelligence & reporting",
        provider: { "@id": "#forgeash-org" },
        url: `${origin}/services/data-dashboards`,
        areaServed: [
          { "@type": "City", name: "Chennai" },
          { "@type": "State", name: "Tamil Nadu" },
          { "@type": "Country", name: "India" },
        ],
      },
    ],
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "forgeash-services-jsonld";
  script.text = JSON.stringify(payload);

  document.head.appendChild(script);
}
