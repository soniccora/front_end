import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

export const Route = createFileRoute("/changelog")({
  head: () => ({
    meta: [
      { title: "Changelog — Soniccora Product Updates" },
      {
        name: "description",
        content:
          "Every shipped feature, fix, and performance improvement on the Soniccora AI audio engine. Updated weekly.",
      },
      { property: "og:title", content: "Soniccora Changelog" },
      {
        property: "og:description",
        content: "Weekly product updates from the Soniccora team.",
      },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="CHANGELOG"
      title="SHIPPED. EVERY WEEK."
      intro="A running log of what we've released across the Soniccora platform — from synthesis improvements to dashboard polish."
      sections={[
        {
          heading: "v1.4.0 — April 18, 2026",
          body: "Streaming first-byte audio is now generally available on Pro and Enterprise. Latency P50 dropped from 1.8s to 380ms for the first audio frame.",
          bullets: [
            "New: streaming endpoint /v1/audio/stream",
            "New: webhook signature v2 (HMAC-SHA256)",
            "Fix: rare 502 on long FLAC exports",
            "Perf: 22% faster cold-start on H100 nodes",
          ],
        },
        {
          heading: "v1.3.0 — March 27, 2026",
          body: "Brand voice profiles graduated from beta. You can now clone a voice from a 60-second reference clip and lock it to a project.",
          bullets: [
            "New: voice cloning UI in dashboard",
            "New: per-project voice locks",
            "Fix: pitch drift on long-form generations >90s",
          ],
        },
        {
          heading: "v1.2.0 — March 4, 2026",
          body: "Workflow automation engine launched. Build conditional audio flows with up to 20 steps and deliver to any endpoint.",
          bullets: [
            "New: workflow builder + JSON schema",
            "New: scheduled triggers (cron syntax)",
            "New: dead-letter queue for failed deliveries",
          ],
        },
        {
          heading: "v1.1.0 — February 12, 2026",
          body: "Node.js SDK 1.0 released. Includes typed responses, automatic retries, and a streaming helper.",
          bullets: [
            "New: @soniccora/node v1.0.0",
            "New: idempotency-key support across all endpoints",
            "Fix: rate-limit headers now follow RFC 6585",
          ],
        },
        {
          heading: "v1.0.0 — January 22, 2026",
          body: "Soniccora left private beta. Public API access opened with a free Starter tier.",
          bullets: [
            "Public launch of /v1/audio/generate",
            "Dashboard, billing, and team seats GA",
            "SOC2 Type II report available on request",
          ],
        },
      ]}
      ctaHref="/docs"
      ctaLabel="Read the Docs"
      showGetStarted={false}
    />
  ),
});
