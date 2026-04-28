import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

export const Route = createFileRoute("/status")({
  head: () => ({
    meta: [
      { title: "Status — Soniccora System Health" },
      {
        name: "description",
        content:
          "Real-time status of the Soniccora audio engine, API, dashboard, and CDN across all regions.",
      },
      { property: "og:title", content: "Soniccora Status" },
      {
        property: "og:description",
        content: "All systems operational. 99.97% uptime over the last 90 days.",
      },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="STATUS"
      title="ALL SYSTEMS OPERATIONAL."
      intro="Live operational status of every Soniccora subsystem. 99.97% uptime over the last 90 days. Subscribe to incident updates via email, Slack, or RSS."
      sections={[
        {
          heading: "Audio Generation API — Operational",
          body: "P50 latency 1.4s · P95 latency 2.9s · Error rate 0.02% over the last hour. All four regions reporting normal load.",
          bullets: [
            "us-east — Operational",
            "us-west — Operational",
            "eu-central — Operational",
            "ap-south — Operational",
          ],
        },
        {
          heading: "Streaming Endpoint — Operational",
          body: "First-byte P50 380ms · P95 720ms. No active incidents.",
        },
        {
          heading: "Dashboard — Operational",
          body: "Web app and authentication services are healthy across all regions.",
        },
        {
          heading: "CDN & Asset Delivery — Operational",
          body: "Edge cache hit rate 96.4%. No regional degradations.",
        },
        {
          heading: "Webhooks — Operational",
          body: "Delivery latency P50 240ms · Retry queue depth normal.",
        },
        {
          heading: "Recent Incidents",
          body: "April 11, 2026 — Elevated 5xx errors in eu-central for 14 minutes. Root cause: a bad GPU node rolled out of the fleet. Resolved.",
          bullets: [
            "March 22, 2026 — Dashboard login degraded for 8 minutes (resolved)",
            "March 3, 2026 — Webhook delivery delays in ap-south for 22 minutes (resolved)",
          ],
        },
      ]}
      ctaHref="/docs"
      ctaLabel="Read the Docs"
      getStartedHref="/product"
    />
  ),
});
