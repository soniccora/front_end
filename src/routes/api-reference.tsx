import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

export const Route = createFileRoute("/api-reference")({
  head: () => ({
    meta: [
      { title: "API Reference — Soniccora REST API" },
      {
        name: "description",
        content:
          "Complete REST API reference for Soniccora: endpoints, parameters, authentication, rate limits, and webhooks.",
      },
      { property: "og:title", content: "Soniccora API Reference" },
      {
        property: "og:description",
        content: "REST API endpoints for the Soniccora audio engine.",
      },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="API REFERENCE"
      title="THE SONICCORA REST API."
      intro="Every endpoint is accessible at https://api.soniccora.com/v1. Authentication uses Bearer tokens issued from the dashboard. All payloads are JSON."
      sections={[
        {
          heading: "Authentication",
          body: "Every request must include an Authorization header with your secret API key. Keys are scoped (read, write, admin) and rotatable from the dashboard.",
          bullets: [
            "Header: Authorization: Bearer sk_live_…",
            "Sandbox keys prefixed with sk_test_",
            "Rotate keys without downtime via /v1/keys",
          ],
        },
        {
          heading: "POST /v1/audio/generate",
          body: "Synthesize a new audio asset. Returns a signed CDN URL once status is ready. Supports streaming with Accept: audio/mpeg.",
          bullets: [
            "Body: prompt, tone, pitch, duration, format, voice_id",
            "Limits: duration ≤ 120s, prompt ≤ 4000 chars",
            "Returns: 200 with audio_id and url",
          ],
        },
        {
          heading: "GET /v1/audio/{id}",
          body: "Retrieve metadata, status, and the signed URL for a previously generated asset. Cached responses are free.",
          bullets: [
            "Returns audio_id, status, url, duration, created_at",
            "404 if the asset was deleted or never existed",
          ],
        },
        {
          heading: "DELETE /v1/audio/{id}",
          body: "Permanently delete an audio asset and purge it from edge caches within 60 seconds.",
          bullets: ["Returns 204 No Content", "Cannot be undone"],
        },
        {
          heading: "Webhooks",
          body: "Long-running generations and workflow events are delivered via signed webhooks. Verify the X-Soniccora-Signature header using HMAC-SHA256 with your webhook secret.",
          bullets: [
            "Events: audio.ready, audio.failed, workflow.completed",
            "Retries: exponential backoff up to 24h",
            "Dead-letter queue available on Pro+",
          ],
        },
        {
          heading: "Rate Limits",
          body: "Limits are returned in standard X-RateLimit-* headers. Starter: 60 req/min. Pro: 600 req/min. Enterprise: custom.",
          bullets: [
            "429 responses include Retry-After header",
            "Idempotency-Key supported on POST endpoints",
          ],
        },
      ]}
      ctaHref="/docs"
      ctaLabel="Open Full Docs"
      showGetStarted={false}
    />
  ),
});
