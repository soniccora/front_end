import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

export const Route = createFileRoute("/sdks")({
  head: () => ({
    meta: [
      { title: "SDKs — Soniccora Client Libraries" },
      {
        name: "description",
        content:
          "Official Soniccora SDKs for Node.js, Python, Go, and Ruby. Typed responses, automatic retries, and streaming helpers.",
      },
      { property: "og:title", content: "Soniccora SDKs" },
      {
        property: "og:description",
        content: "Client libraries for every major language.",
      },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="SDKS"
      title="CLIENT LIBRARIES FOR EVERY STACK."
      intro="All SDKs are open source under the MIT license, follow semantic versioning, and ship with TypeScript types or stubs out of the box."
      sections={[
        {
          heading: "Node.js — @soniccora/node (GA)",
          body: "First-class TypeScript SDK with streaming helpers, typed errors, and automatic retries with exponential backoff.",
          bullets: [
            "npm install @soniccora/node",
            "Latest: v1.4.2 · Node 18+",
            "Source: github.com/soniccora/node",
          ],
        },
        {
          heading: "Python — soniccora (Beta)",
          body: "Python 3.10+ SDK built on httpx with sync and async clients. General availability planned for Q2 2026.",
          bullets: [
            "pip install soniccora",
            "Latest: v0.6.0 (beta)",
            "Source: github.com/soniccora/python",
          ],
        },
        {
          heading: "Go — soniccora-go (Preview)",
          body: "Idiomatic Go client with context support and streaming via io.Reader. API may change before 1.0.",
          bullets: [
            "go get github.com/soniccora/soniccora-go",
            "Latest: v0.3.1",
          ],
        },
        {
          heading: "Ruby — soniccora-ruby (Community)",
          body: "Community-maintained Ruby gem with active reviews from the Soniccora team.",
          bullets: ["gem install soniccora", "Latest: v0.4.0"],
        },
        {
          heading: "OpenAPI Spec",
          body: "Generate your own client in any language from our published OpenAPI 3.1 spec.",
          bullets: [
            "openapi.soniccora.com/v1.json",
            "Compatible with Stainless, Speakeasy, and openapi-generator",
          ],
        },
      ]}
      ctaHref="/docs"
      ctaLabel="Read SDK Docs"
      showGetStarted={false}
    />
  ),
});
