type FaqItem = { q: string; a: string };

type Props = {
  /** Page H1 / canonical name */
  name: string;
  /** Meta description copy */
  description: string;
  /** Canonical URL path, e.g. "/pricing" */
  url: string;
  faqs?: FaqItem[];
};

/**
 * Renders JSON-LD structured data for the page (WebPage + optional FAQPage).
 * Place once per route — Google uses this for rich snippets.
 */
export function SeoSchema({ name, description, url, faqs }: Props) {
  const origin = "https://soniccora.com";
  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "WebPage",
      "@id": `${origin}${url}#webpage`,
      url: `${origin}${url}`,
      name,
      description,
      isPartOf: { "@id": `${origin}/#website` },
    },
    {
      "@type": "WebSite",
      "@id": `${origin}/#website`,
      url: origin,
      name: "Soniccora",
      publisher: { "@id": `${origin}/#org` },
    },
    {
      "@type": "Organization",
      "@id": `${origin}/#org`,
      name: "Soniccora Technologies",
      url: origin,
      sameAs: [
        "https://github.com/soniccora",
        "https://twitter.com/soniccora",
        "https://linkedin.com/company/soniccora",
      ],
    },
  ];

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${origin}${url}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  const json = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
