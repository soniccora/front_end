import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Build the Future of Audio at Soniccora" },
      {
        name: "description",
        content:
          "Open roles across ML research, platform engineering, developer experience, and go-to-market at Soniccora.",
      },
      { property: "og:title", content: "Soniccora Careers" },
      {
        property: "og:description",
        content: "We're hiring engineers and researchers to build the audio layer of the internet.",
      },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="CAREERS"
      title="JOIN A SMALL TEAM. SHIP HUGE THINGS."
      intro="We're a 28-person team rebuilding how the internet sounds. We pay top of market, ship fast, and protect deep-work time."
      sections={[
        {
          heading: "Senior ML Engineer — Synthesis",
          body: "Own the neural synthesis core. You'll design and train transformer models for multilingual speech and sound effects on a fleet of H100s.",
          bullets: [
            "San Francisco or Remote (Americas)",
            "$240k – $310k base + equity",
            "5+ years training generative models",
          ],
        },
        {
          heading: "Staff Platform Engineer",
          body: "Lead the inference and delivery platform. You'll own latency, reliability, and the audio CDN that serves every customer.",
          bullets: [
            "San Francisco, Berlin, or Remote",
            "$220k – $290k base + equity",
            "7+ years building large-scale systems",
          ],
        },
        {
          heading: "Developer Experience Engineer",
          body: "Build the SDKs, sample apps, and docs that developers love. You'll own the Node.js and Python SDKs end-to-end.",
          bullets: [
            "Remote (any timezone)",
            "$170k – $220k base + equity",
            "TypeScript + Python fluency required",
          ],
        },
        {
          heading: "Founding Account Executive",
          body: "Take Soniccora to enterprise customers. You'll work directly with the founders to land and expand our first 50 enterprise logos.",
          bullets: [
            "San Francisco or New York",
            "$160k base + uncapped commission",
            "5+ years selling developer or AI infrastructure",
          ],
        },
      ]}
      ctaHref="/product"
      ctaLabel="See the Platform"
    />
  ),
});
