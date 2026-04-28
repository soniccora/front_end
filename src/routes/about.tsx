import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Soniccora — Intelligent Sound, Built for Scale" },
      {
        name: "description",
        content:
          "Soniccora is building the audio layer for the next generation of software. Learn about our mission, team, and infrastructure.",
      },
      { property: "og:title", content: "About Soniccora" },
      {
        property: "og:description",
        content: "The team building the AI audio engine for smart sound creation.",
      },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="ABOUT"
      title="WE'RE BUILDING THE AUDIO LAYER OF THE INTERNET."
      intro="Soniccora was founded in 2023 by Ethan Walker (Founder & CEO) along with a team of audio engineers and ML researchers who believed sound was the most underbuilt surface in modern software."
      sections={[
        {
          heading: "Our Mission",
          body: "Make intelligent, branded audio as easy to ship as a text string. Every product team should be able to render a custom alert tone, a personalized voice line, or a dynamic soundtrack in a single API call — without a studio, a DAW, or a contractor.",
        },
        {
          heading: "The Team",
          body: "Led by Ethan Walker, we're a 28-person team distributed across Los Angeles, Berlin, and Bangalore. Our founders previously built audio infrastructure at NVIDIA, Spotify, and Twilio. We're hiring across ML, platform, and developer experience.",
        },
        {
          heading: "Backed By",
          body: "Soniccora is backed by Sequoia Capital, Index Ventures, and a roster of operator angels from Stripe, Vercel, and Anthropic. We've raised $34M to date and are well-capitalized for the long road ahead.",
        },
        {
          heading: "Where We Run",
          body: "Production traffic is served from a fleet of NVIDIA H100 clusters across North America, Europe, and Asia-Pacific. Audio assets are cached at the edge in 200+ POPs for sub-50ms first-byte delivery.",
        },
      ]}
      ctaHref="/product"
      ctaLabel="See What We've Built"
    />
  ),
});
