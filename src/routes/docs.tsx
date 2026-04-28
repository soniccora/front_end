import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowRight, ChevronRight, Copy, Check } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Soniccora Docs — API Reference & Developer Guides" },
      {
        name: "description",
        content:
          "Complete documentation for the Soniccora AI Audio Engine: REST API reference, SDK guides, authentication, and workflow automation.",
      },
      { property: "og:title", content: "Soniccora Documentation" },
      {
        property: "og:description",
        content: "REST API reference, SDKs, and integration guides for Soniccora.",
      },
    ],
  }),
  component: DocsPage,
});

type Section = {
  group: string;
  items: { id: string; label: string }[];
};

const sections: Section[] = [
  {
    group: "Getting Started",
    items: [
      { id: "introduction", label: "Introduction" },
      { id: "quickstart", label: "Quick Start Guide" },
      { id: "auth", label: "Authentication" },
    ],
  },
  {
    group: "Audio Generation API",
    items: [
      { id: "post-generate", label: "POST /v1/audio/generate" },
      { id: "get-audio", label: "GET /v1/audio/{id}" },
      { id: "delete-audio", label: "DELETE /v1/audio/{id}" },
      { id: "formats", label: "Supported Formats" },
    ],
  },
  {
    group: "Voice Customization",
    items: [
      { id: "tone-pitch", label: "Tone & Pitch Parameters" },
      { id: "style-presets", label: "Style Presets" },
      { id: "brand-voice", label: "Brand Voice Profiles" },
    ],
  },
  {
    group: "Workflow Automation",
    items: [
      { id: "create-workflow", label: "Creating Workflows" },
      { id: "trigger-types", label: "Trigger Types" },
      { id: "webhooks", label: "Webhook Configuration" },
    ],
  },
  {
    group: "Sound Library",
    items: [
      { id: "upload-assets", label: "Upload Assets" },
      { id: "manage-templates", label: "Manage Templates" },
      { id: "retrieve-assets", label: "Retrieve Assets" },
    ],
  },
  {
    group: "SDK Reference",
    items: [
      { id: "sdk-node", label: "Node.js SDK" },
      { id: "sdk-python", label: "Python SDK (Beta)" },
    ],
  },
];

function DocsPage() {
  const [active, setActive] = useState<string>("introduction");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto">
            <nav className="space-y-6 pr-2">
              {sections.map((s) => (
                <div key={s.group}>
                  <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                    {s.group.toUpperCase()}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {s.items.map((it) => (
                      <li key={it.id}>
                        <button
                          onClick={() => setActive(it.id)}
                          className={`block w-full rounded-md px-3 py-1.5 text-left text-sm transition-colors ${
                            active === it.id
                              ? "bg-primary/10 font-semibold text-primary"
                              : "text-foreground/75 hover:bg-surface hover:text-foreground"
                          }`}
                        >
                          {it.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <article className="min-w-0 max-w-3xl">
            <DocBreadcrumb id={active} />
            <DocContent id={active} setActive={setActive} />
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function DocBreadcrumb({ id }: { id: string }) {
  const section = sections.find((s) => s.items.some((i) => i.id === id))!;
  const item = section.items.find((i) => i.id === id)!;
  return (
    <nav className="mb-6 flex items-center gap-2 font-mono text-xs text-muted-foreground">
      <Link to="/" className="hover:text-primary">Home</Link>
      <ChevronRight size={12} />
      <span>Docs</span>
      <ChevronRight size={12} />
      <span>{section.group}</span>
      <ChevronRight size={12} />
      <span className="text-primary">{item.label}</span>
    </nav>
  );
}

function H1({ children }: { children: ReactNode }) {
  return <h1 className="font-display text-4xl font-bold sm:text-5xl">{children}</h1>;
}
function Lead({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-lg text-muted-foreground">{children}</p>;
}
function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-12 font-display text-2xl font-bold">{children}</h2>;
}
function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-foreground/85 leading-relaxed">{children}</p>;
}
function UL({ children }: { children: ReactNode }) {
  return <ul className="mt-4 space-y-2 text-foreground/85">{children}</ul>;
}
function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
      <span>{children}</span>
    </li>
  );
}

function CodeBlock({ children, lang = "json" }: { children: string; lang?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="glass-strong group relative mt-4 overflow-hidden rounded-xl">
      <div className="flex items-center justify-between border-b border-border bg-surface-2 px-4 py-2">
        <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
          {lang.toUpperCase()}
        </span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(children);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:text-primary"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-foreground/90">
        {children}
      </pre>
    </div>
  );
}

function ParamTable({
  rows,
}: {
  rows: { p: string; t: string; r: string; d: string }[];
}) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-surface-2 text-left font-mono text-[11px] tracking-widest text-muted-foreground">
            <th className="px-4 py-3">PARAMETER</th>
            <th className="px-4 py-3">TYPE</th>
            <th className="px-4 py-3">REQUIRED</th>
            <th className="px-4 py-3">DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.p} className="border-t border-border">
              <td className="px-4 py-3 font-mono text-primary">{r.p}</td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{r.t}</td>
              <td className="px-4 py-3 text-xs">
                <span
                  className={`rounded-md px-2 py-0.5 font-mono text-[10px] ${
                    r.r === "Yes"
                      ? "bg-primary/15 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {r.r}
                </span>
              </td>
              <td className="px-4 py-3 text-foreground/80">{r.d}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function NextLink({
  setActive,
  to,
  label,
}: {
  setActive: (id: string) => void;
  to: string;
  label: string;
}) {
  return (
    <button
      onClick={() => setActive(to)}
      className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
    >
      Next: {label} <ArrowRight size={14} />
    </button>
  );
}

function DocContent({
  id,
  setActive,
}: {
  id: string;
  setActive: (id: string) => void;
}) {
  switch (id) {
    case "introduction":
      return (
        <>
          <H1>Welcome to Soniccora Docs</H1>
          <Lead>
            Soniccora is an AI-powered audio engine that lets you generate, customize, and
            deploy intelligent sound — programmatically and at scale.
          </Lead>
          <H2>What you can build</H2>
          <UL>
            <LI>Custom voice sounds, alert tones, and notification audio on demand</LI>
            <LI>Branded sound identities reusable across products and channels</LI>
            <LI>Event-driven audio workflows with triggers and conditional logic</LI>
            <LI>Real-time audio delivery via REST API and global CDN</LI>
          </UL>
          <H2>How the docs are organized</H2>
          <P>
            Start with the Quick Start guide for a working integration in under five
            minutes, then explore the API reference for the full surface area of every
            endpoint.
          </P>
          <NextLink setActive={setActive} to="quickstart" label="Quick Start Guide" />
        </>
      );
    case "quickstart":
      return (
        <>
          <H1>Quick Start Guide</H1>
          <Lead>Make your first audio generation call in three steps.</Lead>
          <H2>Step 1 — Get your API key</H2>
          <P>Open the Soniccora dashboard and navigate to Settings → API Keys to create a new key. Copy it and store it as an environment variable on your server.</P>
          <CodeBlock lang="bash">{`export SONIC_KEY="sc_live_••••••••••••••"`}</CodeBlock>
          <H2>Step 2 — Install the SDK (or call REST directly)</H2>
          <CodeBlock lang="bash">{`npm install @soniccora/sdk
# or
pip install soniccora`}</CodeBlock>
          <H2>Step 3 — Generate your first sound</H2>
          <CodeBlock lang="javascript">{`import { Soniccora } from "@soniccora/sdk";

const sc = new Soniccora({ apiKey: process.env.SONIC_KEY });

const audio = await sc.audio.generate({
  prompt: "A calm notification chime",
  tone: "soft",
  pitch: "mid",
  duration: 3,
  format: "mp3",
});

console.log(audio.url);`}</CodeBlock>
          <H2>Expected response</H2>
          <CodeBlock>{`{
  "audio_id": "aud_8f2k19xz",
  "url": "https://cdn.soniccora.com/audio/aud_8f2k19xz.mp3",
  "duration": 3.2,
  "status": "ready"
}`}</CodeBlock>
          <NextLink setActive={setActive} to="auth" label="Authentication" />
        </>
      );
    case "auth":
      return (
        <>
          <H1>Authentication</H1>
          <Lead>
            All Soniccora API requests are authenticated using bearer tokens issued from your
            dashboard.
          </Lead>
          <H2>Header format</H2>
          <CodeBlock lang="http">{`Authorization: Bearer sc_live_••••••••••••••
Content-Type: application/json`}</CodeBlock>
          <H2>Security best practices</H2>
          <UL>
            <LI>Never expose API keys in client-side code or public repositories</LI>
            <LI>Use separate keys for development and production environments</LI>
            <LI>Rotate keys regularly and immediately revoke compromised keys</LI>
            <LI>Restrict keys by scope and IP allowlist when possible</LI>
          </UL>
          <P>
            Manage all keys, scopes, and rotation policies from the dashboard's API Keys
            page.
          </P>
          <NextLink setActive={setActive} to="post-generate" label="POST /v1/audio/generate" />
        </>
      );
    case "post-generate":
      return (
        <>
          <H1>POST /v1/audio/generate</H1>
          <Lead>Generate a new audio asset from a text prompt and parameters.</Lead>
          <H2>Endpoint</H2>
          <CodeBlock lang="http">{`POST https://api.soniccora.com/v1/audio/generate`}</CodeBlock>
          <H2>Request parameters</H2>
          <ParamTable
            rows={[
              { p: "prompt", t: "string", r: "Yes", d: "Text description of the audio you want to generate." },
              { p: "tone", t: "string", r: "No", d: "soft / sharp / warm / neutral" },
              { p: "pitch", t: "string", r: "No", d: "low / mid / high" },
              { p: "duration", t: "number", r: "No", d: "Length in seconds (max 120)." },
              { p: "format", t: "string", r: "No", d: "mp3 / wav / ogg (default: mp3)" },
            ]}
          />
          <H2>Request example</H2>
          <CodeBlock>{`{
  "prompt": "A calm notification chime",
  "tone": "soft",
  "pitch": "mid",
  "duration": 3,
  "format": "mp3"
}`}</CodeBlock>
          <H2>Response 200 OK</H2>
          <CodeBlock>{`{
  "audio_id": "aud_8f2k19xz",
  "url": "https://cdn.soniccora.com/audio/aud_8f2k19xz.mp3",
  "duration": 3.2,
  "status": "ready",
  "created_at": "2025-04-22T10:14:09Z"
}`}</CodeBlock>
          <H2>Error codes</H2>
          <ParamTable
            rows={[
              { p: "400", t: "error", r: "—", d: "Invalid or missing parameters." },
              { p: "401", t: "error", r: "—", d: "Missing or invalid API key." },
              { p: "402", t: "error", r: "—", d: "Generation quota exceeded for current plan." },
              { p: "429", t: "error", r: "—", d: "Rate limit exceeded — back off and retry." },
              { p: "500", t: "error", r: "—", d: "Internal engine error — safe to retry." },
            ]}
          />
          <NextLink setActive={setActive} to="get-audio" label="GET /v1/audio/{id}" />
        </>
      );
    case "get-audio":
      return (
        <>
          <H1>GET /v1/audio/{"{id}"}</H1>
          <Lead>Retrieve metadata and the CDN URL for a previously generated audio asset.</Lead>
          <H2>Endpoint</H2>
          <CodeBlock lang="http">{`GET https://api.soniccora.com/v1/audio/aud_8f2k19xz`}</CodeBlock>
          <H2>Path parameters</H2>
          <ParamTable
            rows={[
              { p: "id", t: "string", r: "Yes", d: "Audio asset identifier returned at generation time." },
            ]}
          />
          <H2>Response 200 OK</H2>
          <CodeBlock>{`{
  "audio_id": "aud_8f2k19xz",
  "url": "https://cdn.soniccora.com/audio/aud_8f2k19xz.mp3",
  "duration": 3.2,
  "format": "mp3",
  "status": "ready",
  "created_at": "2025-04-22T10:14:09Z"
}`}</CodeBlock>
          <NextLink setActive={setActive} to="delete-audio" label="DELETE /v1/audio/{id}" />
        </>
      );
    case "delete-audio":
      return (
        <>
          <H1>DELETE /v1/audio/{"{id}"}</H1>
          <Lead>Permanently delete a generated audio asset and remove it from the CDN.</Lead>
          <CodeBlock lang="http">{`DELETE https://api.soniccora.com/v1/audio/aud_8f2k19xz`}</CodeBlock>
          <H2>Response 204 No Content</H2>
          <P>The asset has been removed and is no longer accessible from the CDN URL.</P>
          <NextLink setActive={setActive} to="formats" label="Supported Formats" />
        </>
      );
    case "formats":
      return (
        <>
          <H1>Supported Formats</H1>
          <Lead>Soniccora outputs audio in industry-standard, widely supported formats.</Lead>
          <ParamTable
            rows={[
              { p: "mp3", t: "lossy", r: "—", d: "Best for web playback and small file size." },
              { p: "wav", t: "lossless", r: "—", d: "Best for editing pipelines and high fidelity." },
              { p: "ogg", t: "lossy", r: "—", d: "Open format for cross-platform delivery." },
              { p: "flac", t: "lossless", r: "—", d: "Lossless compression for archival quality." },
            ]}
          />
        </>
      );
    case "tone-pitch":
      return (
        <>
          <H1>Tone & Pitch Parameters</H1>
          <Lead>Shape the character of every generation with fine-grained controls.</Lead>
          <H2>Tone values</H2>
          <UL>
            <LI><span className="font-mono text-primary">soft</span> — gentle, low-energy outputs ideal for notifications</LI>
            <LI><span className="font-mono text-primary">sharp</span> — bright, attention-grabbing alerts</LI>
            <LI><span className="font-mono text-primary">warm</span> — rounded, organic tonal character</LI>
            <LI><span className="font-mono text-primary">neutral</span> — balanced default with no coloring</LI>
          </UL>
          <H2>Pitch values</H2>
          <P>Choose <span className="font-mono text-primary">low</span>, <span className="font-mono text-primary">mid</span>, or <span className="font-mono text-primary">high</span> for quick presets, or use the SDK to specify a precise semitone offset between -12 and +12.</P>
          <CodeBlock>{`{
  "prompt": "Mission complete confirmation",
  "tone": "warm",
  "pitch": "mid"
}`}</CodeBlock>
        </>
      );
    case "style-presets":
      return (
        <>
          <H1>Style Presets</H1>
          <Lead>Apply curated presets to match common product contexts.</Lead>
          <UL>
            <LI><span className="font-mono text-primary">calm</span> — ambient, meditative outputs</LI>
            <LI><span className="font-mono text-primary">alert</span> — high-attention sound design</LI>
            <LI><span className="font-mono text-primary">corporate</span> — clean, professional brand cues</LI>
            <LI><span className="font-mono text-primary">dynamic</span> — energetic, motion-driven tones</LI>
            <LI><span className="font-mono text-primary">neutral</span> — uncolored baseline output</LI>
          </UL>
        </>
      );
    case "brand-voice":
      return (
        <>
          <H1>Brand Voice Profiles</H1>
          <Lead>Save reusable voice and sound configurations to apply across every generation.</Lead>
          <CodeBlock>{`POST /v1/voice-profiles
{
  "name": "Northwave · Notifications",
  "tone": "soft",
  "pitch": "mid",
  "style": "calm"
}`}</CodeBlock>
          <P>Reference a saved profile by ID on any generation request:</P>
          <CodeBlock>{`{
  "prompt": "New message received",
  "voice_profile_id": "vp_north_001"
}`}</CodeBlock>
        </>
      );
    case "create-workflow":
      return (
        <>
          <H1>Creating Workflows</H1>
          <Lead>Define event-driven audio pipelines without writing orchestration code.</Lead>
          <CodeBlock>{`POST /v1/workflows
{
  "name": "Order confirmation flow",
  "trigger": { "type": "webhook", "event": "order.completed" },
  "steps": [
    { "type": "generate", "voice_profile_id": "vp_north_001",
      "prompt": "Order {{order.id}} confirmed" },
    { "type": "deliver", "channel": "app.notification" }
  ]
}`}</CodeBlock>
        </>
      );
    case "trigger-types":
      return (
        <>
          <H1>Trigger Types</H1>
          <Lead>Workflows can be initiated by any of the following triggers.</Lead>
          <UL>
            <LI><span className="font-mono text-primary">api_call</span> — direct invocation via the workflows API</LI>
            <LI><span className="font-mono text-primary">webhook</span> — incoming event from an external system</LI>
            <LI><span className="font-mono text-primary">schedule</span> — cron-style recurring execution</LI>
            <LI><span className="font-mono text-primary">app_event</span> — first-party event from your Soniccora-connected app</LI>
          </UL>
        </>
      );
    case "webhooks":
      return (
        <>
          <H1>Webhook Configuration</H1>
          <Lead>Receive asynchronous job completions and workflow events at your endpoint.</Lead>
          <CodeBlock>{`POST /v1/webhooks
{
  "url": "https://example.com/hooks/soniccora",
  "events": ["audio.ready", "workflow.completed"],
  "secret": "whsec_••••••••"
}`}</CodeBlock>
          <P>Verify each delivery using the <span className="font-mono text-primary">X-Soniccora-Signature</span> header (HMAC-SHA256 of the raw body with your shared secret).</P>
        </>
      );
    case "upload-assets":
      return (
        <>
          <H1>Upload Assets</H1>
          <Lead>Upload existing audio files to your sound library for reuse and templating.</Lead>
          <CodeBlock>{`POST /v1/library/assets
Content-Type: multipart/form-data

file=@chime.wav
name="House Chime"
tags=["notification","brand"]`}</CodeBlock>
        </>
      );
    case "manage-templates":
      return (
        <>
          <H1>Manage Templates</H1>
          <Lead>Templates let you parameterize audio generations for repeatable use.</Lead>
          <CodeBlock>{`POST /v1/library/templates
{
  "name": "Order confirmation",
  "prompt": "Order {{order_id}} confirmed for {{customer}}",
  "voice_profile_id": "vp_north_001"
}`}</CodeBlock>
        </>
      );
    case "retrieve-assets":
      return (
        <>
          <H1>Retrieve Assets</H1>
          <Lead>List and fetch sound library entries with filtering and pagination.</Lead>
          <CodeBlock lang="http">{`GET /v1/library/assets?tag=notification&limit=20`}</CodeBlock>
          <CodeBlock>{`{
  "data": [
    {
      "asset_id": "ast_q19f0",
      "name": "House Chime",
      "url": "https://cdn.soniccora.com/library/ast_q19f0.wav",
      "tags": ["notification","brand"]
    }
  ],
  "next_cursor": null
}`}</CodeBlock>
        </>
      );
    case "sdk-node":
      return (
        <>
          <H1>Node.js SDK</H1>
          <Lead>The official TypeScript-first SDK for Soniccora.</Lead>
          <CodeBlock lang="bash">{`npm install @soniccora/sdk`}</CodeBlock>
          <CodeBlock lang="typescript">{`import { Soniccora } from "@soniccora/sdk";

const sc = new Soniccora({ apiKey: process.env.SONIC_KEY! });

// Generate
const audio = await sc.audio.generate({
  prompt: "A calm notification chime",
  tone: "soft",
});

// Retrieve
const fetched = await sc.audio.get(audio.audio_id);

// Delete
await sc.audio.delete(audio.audio_id);`}</CodeBlock>
        </>
      );
    case "sdk-python":
      return (
        <>
          <H1>Python SDK (Beta)</H1>
          <Lead>Pythonic bindings for the Soniccora API.</Lead>
          <CodeBlock lang="bash">{`pip install soniccora`}</CodeBlock>
          <CodeBlock lang="python">{`from soniccora import Soniccora

sc = Soniccora(api_key=os.environ["SONIC_KEY"])

audio = sc.audio.generate(
    prompt="A calm notification chime",
    tone="soft",
)

print(audio.url)`}</CodeBlock>
        </>
      );
    default:
      return null;
  }
}
