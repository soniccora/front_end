import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Soniccora Engineering & Product" },
      {
        name: "description",
        content:
          "Engineering deep-dives, product launches, and industry perspectives from the Soniccora team.",
      },
      { property: "og:title", content: "Soniccora Blog" },
      {
        property: "og:description",
        content: "Deep-dives on neural audio synthesis and platform engineering.",
      },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="BLOG"
      title="ENGINEERING THE AUDIO STACK."
      intro="Long-form posts on neural synthesis, edge audio delivery, voice cloning ethics, and the platform decisions behind Soniccora."
      sections={[
        {
          heading: "How we cut first-byte latency to 380ms",
          body: "A walkthrough of the streaming inference pipeline we shipped in v1.4 — including the chunked decoder, speculative prefill, and the H100 kernel rewrite that unblocked the last 200ms.",
          bullets: ["Posted April 20, 2026", "12 min read", "Engineering"],
        },
        {
          heading: "Voice cloning, consent, and the audit log",
          body: "Why every cloned voice on Soniccora requires a notarized consent record, how we verify provenance, and the audit trail customers can pull at any time.",
          bullets: ["Posted April 8, 2026", "8 min read", "Trust & Safety"],
        },
        {
          heading: "Designing the workflow engine",
          body: "Behind the if/then routing layer: why we chose a JSON DSL over a visual builder, how we serialize state, and what we'd do differently next time.",
          bullets: ["Posted March 14, 2026", "15 min read", "Engineering"],
        },
        {
          heading: "Soniccora raises $24M Series A",
          body: "Sequoia Capital leads our Series A to expand the platform team and open a research lab in Berlin focused on multilingual synthesis.",
          bullets: ["Posted February 6, 2026", "4 min read", "Company"],
        },
      ]}
      ctaHref="/docs"
      ctaLabel="Read the Docs"
    />
  ),
});
