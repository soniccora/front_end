import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Soniccora AI Audio Engine" },
      {
        name: "description",
        content:
          "Explore every Soniccora feature: neural voice synthesis, brand voice profiles, workflow automation, REST API, real-time streaming, and analytics.",
      },
      { property: "og:title", content: "Soniccora Features" },
      {
        property: "og:description",
        content: "Every capability in the Soniccora AI audio platform.",
      },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="FEATURES"
      title="EVERY CAPABILITY, IN ONE PLATFORM."
      intro="Soniccora bundles a production-grade neural audio engine, customization layer, workflow automation, and developer API into a single command center — so your team ships intelligent sound without stitching tools together."
      sections={[
        {
          heading: "Neural Voice Synthesis",
          body: "A transformer-based synthesis core trained on multi-domain speech, music, and sound-effect corpora. Generate up to 120 seconds of broadcast-quality audio per request, with sub-2-second latency on standard outputs.",
          bullets: [
            "Output formats: MP3, WAV, OGG, FLAC",
            "44.1 kHz / 24-bit studio fidelity",
            "Streaming first-byte under 400ms",
            "Deterministic seeds for reproducible takes",
          ],
        },
        {
          heading: "Brand Voice Profiles",
          body: "Clone, save, and reuse signature voices across every project. Pro plans include 10 brand voices; Enterprise unlocks unlimited custom-trained models with consent verification.",
          bullets: [
            "12 built-in tone presets + unlimited custom",
            "Pitch range: -12 to +12 semitones",
            "Style modes: Calm, Alert, Corporate, Dynamic, Neutral",
            "Per-project voice locks for consistency",
          ],
        },
        {
          heading: "Workflow Automation",
          body: "Compose conditional audio flows that react to API calls, webhooks, schedules, or app events. Branch on metadata, chain up to 20 steps, and deliver outputs to any endpoint.",
          bullets: [
            "Trigger types: API, webhook, schedule, app event",
            "If/then routing on response metadata",
            "Webhook delivery under 500ms average",
            "Built-in retry and dead-letter queues",
          ],
        },
        {
          heading: "Developer API & SDKs",
          body: "A clean REST surface with idempotency keys, webhook signing, and per-key rate limiting. Official Node.js SDK is GA; Python ships in Q2 2026.",
          bullets: [
            "REST + JSON, OpenAPI 3.1 spec",
            "API key scopes and rotation",
            "Usage analytics + cost dashboards",
            "Sandbox keys for staging environments",
          ],
        },
        {
          heading: "Sound Asset Library",
          body: "Every generation is automatically catalogued, versioned, and cached on a global CDN. Cached replays are free and don't count against your quota.",
          bullets: [
            "Tag-based search across all assets",
            "Version history per template",
            "Edge cache in 200+ POPs",
            "Signed URLs with expiry",
          ],
        },
      ]}
      ctaHref="/product"
      ctaLabel="Tour the Platform"
    />
  ),
});
