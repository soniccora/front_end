import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SectionDivider } from "@/components/site/SectionDivider";
import { SeoSchema } from "@/components/site/SeoSchema";
import { sectionMedia } from "@/lib/media";

const PAGE_TITLE = "How It Works — Soniccora AI Audio Engine";
const PAGE_DESC =
  "From a single text prompt to deployed audio in under two seconds. See how Soniccora's three-stage pipeline turns intent into intelligent, branded sound — with code samples and real benchmarks.";

const FAQS = [
  {
    q: "How fast is one generation, end to end?",
    a: "Median end-to-end latency for a 3-second clip is 1.4 seconds — including tokenization, synthesis, post-processing, encoding, and CDN upload. Streaming endpoints deliver first-byte audio in ~280ms.",
  },
  {
    q: "Do I need to manage infrastructure or GPUs?",
    a: "No. You hit a single REST endpoint (or use the SDK) and we handle GPU scheduling, scaling, encoding, storage, and global CDN delivery. You get back a permanent URL.",
  },
  {
    q: "Can I run jobs asynchronously?",
    a: "Yes. Pass async: true and a callback_url. We POST a signed webhook the moment the asset is ready — no polling required. Useful for batch jobs and long workflows.",
  },
  {
    q: "How do brand voice profiles work?",
    a: "Train a profile once from 30 seconds of reference audio (Pro) or a custom model (Enterprise), then pass voice_profile_id with any request. The style engine applies it deterministically across every generation.",
  },
  {
    q: "What languages do you ship SDKs in?",
    a: "Node.js and Python are GA. Go and Rust are in private beta. The REST API works from anything that speaks HTTP.",
  },
];

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:image", content: sectionMedia.howItWorks.hero.src },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: sectionMedia.howItWorks.hero.src },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SeoSchema name={PAGE_TITLE} description={PAGE_DESC} url="/how-it-works" faqs={FAQS} />
      <Navbar />
      <main>
        <Hero />
        <Steps />
        <CodeFlow />
        <UseCases />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            HOW IT WORKS
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            INPUT. <span className="text-primary text-glow-cyan">SYNTHESIZE.</span> DEPLOY.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Soniccora turns a single text prompt into deployable audio in under two seconds —
            without studio time, sound engineers, or stitched-together tooling. One call in,
            one CDN URL out.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Steps() {
  const m = sectionMedia.howItWorks;
  const steps = [
    {
      n: "01",
      icon: "/INPUT.svg",
      title: "INPUT",
      img: m.input,
      desc: "Send a text prompt with optional parameters: tone, pitch, duration, format, and a saved brand-voice profile. Use REST, the SDK, or trigger from a workflow event.",
      bullets: [
        "REST API or typed SDK (Node, Python)",
        "Synchronous or async with signed webhooks",
        "Brand voice profiles + reusable templates",
        "Optional seed for reproducible output",
      ],
    },
    {
      n: "02",
      icon: "/AI_ENGINE.svg",
      title: "AI ENGINE",
      img: m.engine,
      desc: "The neural synthesis engine generates the raw waveform on H100 GPU clusters and applies your style profile in a single pass. Quality is scored with MOS in real time.",
      bullets: [
        "Diffusion-based 48kHz waveform model",
        "Deterministic DSP post-processing graph",
        "Sub-2s P50 latency for 3-second clips",
        "First-byte streaming for interactive UX",
      ],
    },
    {
      n: "03",
      icon: "/OUTPUT_DEPLOY.svg",
      title: "OUTPUT & DEPLOY",
      img: m.output,
      desc: "Audio is encoded, hashed, uploaded to the global edge CDN, and returned with a permanent URL ready to drop into your app, IVR, game, or content pipeline.",
      bullets: [
        "MP3 / WAV / OGG / FLAC encoding",
        "Global anycast CDN with <50ms cached replay",
        "Webhook + workflow triggers",
        "Permanent signed URLs with usage analytics",
      ],
    },
  ];
  return (
    <>
      <SectionDivider />
      <section className="py-28">
        <div className="mx-auto max-w-7xl space-y-24 px-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div
                  className={`glass-strong relative overflow-hidden rounded-2xl ${s.img.aspect}`}
                >
                  <img
                    src={s.img.src}
                    alt={s.img.alt}
                    width={s.img.width}
                    height={s.img.height}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute left-4 top-4 rounded-md border border-primary/40 bg-background/70 px-3 py-1 font-mono text-[11px] tracking-widest text-primary backdrop-blur">
                    STEP {s.n}
                  </div>
                </div>
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <img src={s.icon} alt={s.title} className="h-9 w-9" />
                  </div>
                  <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground">{s.desc}</p>
                  <ul className="mt-6 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <ArrowRight size={14} className="mt-1 text-primary" />
                        <span className="text-foreground/90">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function CodeFlow() {
  return (
    <>
      <SectionDivider />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-primary">END-TO-END</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              IN 12 LINES OF CODE.
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              From npm install to a playing chime — copy, paste, ship. The same SDK powers
              IVR, in-app notifications, game audio, and content pipelines.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-strong mt-10 overflow-hidden rounded-xl">
              <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                  end-to-end.ts
                </span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed text-foreground/90">{`import { Soniccora } from "@soniccora/sdk";

const sc = new Soniccora({ apiKey: process.env.SONIC_KEY });

const audio = await sc.audio.generate({
  prompt: "Mission complete confirmation",
  voice_profile_id: "vp_north_001",
  duration: 2,
  format: "mp3",
});

await playInApp(audio.url);  // Live in <2s, globally cached.`}</pre>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function UseCases() {
  const cases = [
    {
      title: "In-app notifications",
      text: "Generate per-event chimes and alerts that match your product's emotional tone. A friendly success ping, a calm error tone, a celebratory milestone.",
    },
    {
      title: "Dynamic IVR & voice agents",
      text: "Synthesize prompts on the fly with a consistent brand voice across every call. No more pre-recorded 10,000-line voice libraries.",
    },
    {
      title: "Content & video pipelines",
      text: "Auto-generate sound design, intros, outros, and stingers for video and podcast workflows. Plug into Descript, Premiere, or your own NLE.",
    },
    {
      title: "Game & XR audio",
      text: "Stream context-aware ambient audio and effects without shipping massive asset bundles. Every player gets a unique sonic environment.",
    },
    {
      title: "E-commerce & fintech alerts",
      text: "Branded transaction tones for every payment, shipment, or fraud signal — generated per-event with the customer's preferred voice persona.",
    },
    {
      title: "Accessibility narration",
      text: "On-demand narration for articles, product pages, and UI flows. Keep tone, pace, and pronunciation consistent across thousands of pages.",
    },
  ];
  return (
    <>
      <SectionDivider />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-primary">USE CASES</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              WHAT TEAMS BUILD.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="glass h-full rounded-2xl p-7">
                  <h3 className="font-display text-xl font-bold">{c.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
              COMMON QUESTIONS.
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
  const img = sectionMedia.howItWorks.cta;
  return (
    <>
      <SectionDivider />
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <img
          src={img.src}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              READY TO GENERATE YOUR FIRST SOUND?
            </h2>
            <p className="mt-4 text-muted-foreground">
              100 free generations every month. Upgrade only when you scale.
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
                Read the Docs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
