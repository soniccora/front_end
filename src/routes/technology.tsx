import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SectionDivider } from "@/components/site/SectionDivider";
import { SeoSchema } from "@/components/site/SeoSchema";
import { sectionMedia } from "@/lib/media";

const PAGE_TITLE = "Technology — Soniccora's Neural Audio Engine";
const PAGE_DESC =
  "Inside Soniccora's GPU-accelerated neural audio engine: the four-stage synthesis pipeline, H100 infrastructure, sub-2s latency benchmarks, and the science behind real-time AI sound.";

const FAQS = [
  {
    q: "What model architecture powers Soniccora?",
    a: "Soniccora runs a proprietary diffusion-based waveform model trained on a curated 180k-hour multi-domain audio corpus, conditioned on text and acoustic intent vectors produced by our in-house tokenizer.",
  },
  {
    q: "How do you achieve sub-2-second latency?",
    a: "We co-designed the model and inference stack: streaming token generation, FlashAttention-3 kernels, FP8 inference on NVIDIA H100s, and a warm GPU pool sized against live demand. First-byte audio streams before the full clip finishes rendering.",
  },
  {
    q: "Where does generation actually run?",
    a: "Inference clusters run in 3 primary regions (us-east, eu-west, ap-southeast) with audio fan-out to 12 edge PoPs. Requests are routed to the nearest healthy region with automatic failover.",
  },
  {
    q: "Is the audio output deterministic?",
    a: "The synthesis stage is sampling-based and stochastic by default, but post-processing (style, EQ, brand voice) is fully deterministic. Pin a seed in the request to make a generation reproducible end-to-end.",
  },
  {
    q: "How is my data handled?",
    a: "Prompts and outputs are encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC2 Type II certified, never train on customer prompts, and offer per-tenant key isolation on Enterprise.",
  },
];

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:image", content: sectionMedia.technology.hero.src },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: sectionMedia.technology.hero.src },
    ],
  }),
  component: TechnologyPage,
});

function TechnologyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SeoSchema name={PAGE_TITLE} description={PAGE_DESC} url="/technology" faqs={FAQS} />
      <Navbar />
      <main>
        <Hero />
        <Pipeline />
        <Stack />
        <Benchmarks />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  const img = sectionMedia.technology.hero;
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-primary">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                NEURAL AUDIO ENGINE
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                THE SCIENCE OF{" "}
                <span className="text-primary text-glow-cyan">REAL-TIME</span> SOUND.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Soniccora is built on a custom diffusion synthesis pipeline that converts text
                and parameters into broadcast-quality audio in under two seconds — at planet
                scale, on bare-metal H100s, with deterministic style post-processing.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/docs"
                  className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-bold text-primary-foreground hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]"
                >
                  Read the Docs <ArrowRight size={16} />
                </Link>
                <Link
                  to="/product"
                  className="inline-flex h-12 items-center gap-2 rounded-md border border-border-strong bg-surface/40 px-6 text-sm font-semibold backdrop-blur hover:border-primary/60"
                >
                  Platform Overview
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className={`glass-strong relative overflow-hidden rounded-2xl ${img.aspect}`}>
              <img
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Pipeline() {
  const steps = [
    {
      n: "01",
      title: "Tokenizer & Intent Parser",
      desc: "Your prompt is parsed into 1,024-dim acoustic intent vectors — separating semantic meaning from emotional tone, pacing, and texture cues. Brand-voice profiles are merged in at this stage.",
      meta: "~40ms · CPU pool",
    },
    {
      n: "02",
      title: "Neural Waveform Synthesis",
      desc: "A diffusion-based audio model generates raw 48kHz waveform samples conditioned on the intent vector. Streaming decoder emits the first 200ms before the full clip is finished.",
      meta: "~900ms · H100 cluster",
    },
    {
      n: "03",
      title: "Style Engine & Post-Processing",
      desc: "Tone, pitch, EQ, loudness normalization, and brand-voice fingerprints are applied via a deterministic DSP graph — so identical inputs always produce identical mastered outputs.",
      meta: "~120ms · Deterministic",
    },
    {
      n: "04",
      title: "Encode, Cache & Edge Deliver",
      desc: "Outputs are encoded to MP3/WAV/OGG/FLAC, hashed, written to object storage, and pushed to 12 global PoPs. Repeat requests for the same hash hit cache in <50ms.",
      meta: "~180ms · Global CDN",
    },
  ];
  return (
    <>
      <SectionDivider />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-primary">PIPELINE</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              FROM PROMPT TO PLAYBACK.
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Every generation runs through four deterministic stages — each independently
              tuned, monitored, and horizontally scaled. The numbers below are real P50
              measurements from production traffic.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="glass h-full rounded-2xl p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-widest text-primary">
                      STAGE {s.n}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                      {s.meta}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Stack() {
  const img = sectionMedia.technology.stack;
  const items = [
    {
      icon: "/GPU-Accelerated Inference.svg",
      title: "GPU-Accelerated Inference",
      text: "Distributed NVIDIA H100 SXM clusters with FP8 kernels keep median latency at 1.4s even at peak concurrency.",
    },
    {
      icon: "/Streaming Audio Delivery.svg",
      title: "Streaming Audio Delivery",
      text: "First-byte audio streams in ~280ms via chunked HTTP — perfect for interactive UX, voice agents, and IVR.",
    },
    {
      icon: "/SOC2 + Encrypted at Rest.svg",
      title: "SOC2 + Encrypted at Rest",
      text: "AES-256 at rest, TLS 1.3 in transit, per-tenant key isolation on Enterprise. SOC2 Type II audited.",
    },
    {
      icon: "/Multi-Region Edge.svg",
      title: "Multi-Region Edge",
      text: "12 global PoPs deliver cached audio under 50ms RTT to 95% of users worldwide via anycast.",
    },
    {
      icon: "/Live Observability.svg",
      title: "Live Observability",
      text: "Per-request tracing, GPU telemetry, MOS quality scoring, and Prometheus-compatible metrics out of the box.",
    },
    {
      icon: "/Horizontal Scale.svg",
      title: "Horizontal Scale",
      text: "Auto-scaling job queues handle 10k+ concurrent generations with zero queue backlog at burst.",
    },
  ];
  return (
    <>
      <SectionDivider />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <Reveal>
              <p className="font-mono text-xs tracking-[0.3em] text-primary">STACK</p>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                BUILT ON BARE METAL.
              </h2>
              <p className="mt-4 text-muted-foreground">
                We control the entire stack — from accelerator silicon to the edge CDN — so
                you don't pay the latency tax of stitched-together third parties. No cold
                starts, no shared multi-tenant queues, no hidden retry costs.
              </p>
              <div className={`glass mt-8 overflow-hidden rounded-2xl ${img.aspect}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((it, i) => (
                <Reveal key={it.title} delay={i * 0.05}>
                  <div className="glass h-full rounded-xl p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 text-primary">
                      <img src={it.icon} alt={it.title} className="h-8 w-8" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold">{it.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Benchmarks() {
  const rows = [
    ["Median latency (3s clip)", "1.4s", "P50 across all regions, last 30d"],
    ["P99 latency (3s clip)", "2.1s", "Includes cold-region routing"],
    ["First-byte audio (streaming)", "280ms", "Chunked HTTP / WebSocket"],
    ["Cached replay latency", "<50ms", "Edge PoP cache hit"],
    ["Concurrent jobs (Pro)", "50", "Higher on Enterprise"],
    ["Audio fidelity (MOS)", "4.6 / 5.0", "Blind listener panel, n=420"],
    ["Output formats supported", "4", "MP3, WAV, OGG, FLAC"],
    ["Global edge regions", "12", "Anycast multi-region"],
    ["Uptime (trailing 90d)", "99.97%", "Public status page"],
  ];
  return (
    <>
      <SectionDivider />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-primary">BENCHMARKS</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              MEASURED, NOT MARKETED.
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              All numbers below are pulled from production traffic over the last 30 days.
              No synthetic benchmarks, no cherry-picked regions.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass mt-12 overflow-hidden rounded-2xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-2 font-mono text-[11px] tracking-widest text-muted-foreground">
                    <th className="px-6 py-4 text-left">METRIC</th>
                    <th className="px-6 py-4 text-left">VALUE</th>
                    <th className="px-6 py-4 text-left">NOTES</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([m, v, n], i) => (
                    <tr
                      key={m}
                      className={i < rows.length - 1 ? "border-b border-border" : ""}
                    >
                      <td className="px-6 py-4 text-foreground/90">{m}</td>
                      <td className="px-6 py-4 font-mono text-primary">{v}</td>
                      <td className="px-6 py-4 text-muted-foreground">{n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Faq() {
  return (
    <>
      <SectionDivider />
      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-primary">FAQ</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              ENGINEERING QUESTIONS.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="glass h-full rounded-xl p-6">
                  <h3 className="font-display text-base font-bold">{f.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Cta() {
  const img = sectionMedia.technology.cta;
  return (
    <>
      <SectionDivider />
      <section className="relative overflow-hidden py-28">
        <img
          src={img.src}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              SEE THE ENGINE IN ACTION.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Generate your first audio asset in under five minutes. Free tier — no card required.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/pricing"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-7 text-sm font-bold text-primary-foreground shadow-[0_0_30px_rgba(0,229,255,0.5)]"
              >
                Start Building Free <ArrowRight size={16} />
              </Link>
              <Link
                to="/docs"
                className="inline-flex h-12 items-center gap-2 rounded-md border border-border-strong bg-surface/40 px-7 text-sm font-semibold backdrop-blur"
              >
                Read API Docs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
