import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Waves,
  Sliders,
  GitBranch,
  Code2,
  Layers,
  Mic,
  Check,
  Clock,
  TrendingDown,
  Shuffle,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Waveform, WaveformBackground } from "@/components/site/Waveform";
import { SectionDivider } from "@/components/site/SectionDivider";
import heroEngine from "@/assets/hero-engine.webp";
import heroBg from "@/assets/hero-bg.jpg";
import dashboardImg from "@/assets/dashboard-preview.jpg";
import capWaveform from "@/assets/capability-waveform.svg";
import capVoice from "@/assets/capability-voice.svg";
import capWorkflow from "@/assets/capability-workflow.svg";
import capApi from "@/assets/capability-api.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soniccora — Powering Next-Gen Audio with AI-Driven Systems" },
      {
        name: "description",
        content:
          "Design, generate, and automate custom audio experiences with Soniccora's real-time AI synthesis and scalable workflow infrastructure.",
      },
      { property: "og:title", content: "Soniccora — Next-Gen AI Audio" },
      {
        property: "og:description",
        content: "Design, generate, and automate custom audio at scale with real-time AI synthesis.",
      },
      { property: "og:image", content: heroEngine },
      { property: "twitter:image", content: heroEngine },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <HowItWorks />
        <Capabilities />
        <DashboardPreview />
        <WhoFor />
        <Pricing />
        <ApiDocs />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- HERO ---------- */
function HeroFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,229,255,0.25), transparent 55%), radial-gradient(ellipse at 80% 60%, rgba(123,47,255,0.22), transparent 55%), #080808",
        }}
      />
      <WaveformBackground />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-48 w-48 rounded-full border border-primary/40 bg-primary/5 shadow-[0_0_120px_rgba(0,229,255,0.45)] sm:h-64 sm:w-64" />
      </div>
      <div className="absolute inset-x-0 top-1/2 h-24 -translate-y-1/2 px-8">
        <Waveform bars={48} />
      </div>
    </div>
  );
}

function HeroSkeleton() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 animate-pulse"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,229,255,0.20), transparent 55%), radial-gradient(ellipse at 80% 60%, rgba(123,47,255,0.18), transparent 55%), #0a0a0a",
        }}
      />
      <WaveformBackground />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-40 w-40 animate-pulse rounded-full border border-primary/30 bg-primary/5 shadow-[0_0_100px_rgba(0,229,255,0.35)] sm:h-56 sm:w-56" />
      </div>
      <div className="absolute inset-x-0 top-1/2 h-20 -translate-y-1/2 px-8 opacity-60">
        <Waveform bars={48} />
      </div>
    </div>
  );
}

function Hero() {
  const [imgStatus, setImgStatus] = React.useState<"loading" | "loaded" | "error">("loading");
  const parallaxRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const onScroll = () => {
      const y = window.scrollY;
      if (parallaxRef.current) {
        const translateY = Math.min(y * 0.12, 80);
        const scale = 1 + Math.min(y * 0.0002, 0.04);
        parallaxRef.current.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const callouts = [
    { label: "Neural Voice Synthesis", x: "4%", y: "12%", anchor: "left" },
    { label: "Real-Time Waveform Engine", x: "4%", y: "82%", anchor: "left" },
    { label: "Automated Audio Triggers", x: "96%", y: "12%", anchor: "right" },
    { label: "GPU-Accelerated Processing", x: "96%", y: "82%", anchor: "right" },
  ] as const;

  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="grid-bg absolute inset-0 opacity-30" />
      <WaveformBackground />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-primary shadow-[0_0_24px_rgba(0,229,255,0.25)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            AI-POWERED AUDIO ENGINE · NOW IN BETA
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mx-auto mt-8 max-w-5xl text-center font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
            POWERING <span className="text-glow-cyan text-primary">NEXT-GEN</span> AUDIO
            <br />
            WITH AI-DRIVEN
            <br />
            SYSTEMS.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base text-muted-foreground sm:text-lg">
            Design, generate, and automate custom audio experiences with real-time AI synthesis
            and scalable workflow infrastructure.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/pricing"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-7 text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_36px_rgba(0,229,255,0.6)]"
            >
              Get Started
              <Zap size={16} className="transition-transform group-hover:scale-110" />
            </Link>
            <Link
              to="/product"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border-strong bg-surface/40 px-7 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-primary/60 hover:bg-surface"
            >
              Explore Engine
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center font-mono text-xs tracking-[0.18em] text-muted-foreground">
            ⚡ 500+ DEVELOPERS · 10M+ AUDIO OUTPUTS · 99.9% UPTIME
          </p>
        </Reveal>

        {/* Hero visual */}
        <Reveal delay={0.25}>
          <div
            ref={parallaxRef}
            style={{ willChange: "transform" }}
            className="relative mx-auto mt-12 aspect-[16/9] w-full max-w-6xl overflow-hidden rounded-2xl border border-border-strong bg-surface/30 shadow-[0_0_120px_rgba(0,229,255,0.15)] sm:mt-16 sm:rounded-3xl"
          >
            {imgStatus !== "error" && (
              <img
                src={heroEngine}
                alt="Soniccora AI audio engine — glowing neural core with cyan and purple waveforms"
                width={1920}
                height={1080}
                onLoad={() => setImgStatus("loaded")}
                onError={() => setImgStatus("error")}
                className={`h-full w-full object-cover transition-opacity duration-700 ${imgStatus === "loaded" ? "opacity-100" : "opacity-0"}`}
              />
            )}
            {imgStatus === "loading" && <HeroSkeleton />}
            {imgStatus === "error" && <HeroSkeleton />}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20" />

            {callouts.map((c) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="absolute hidden lg:block"
                style={{
                  left: c.anchor === "left" ? c.x : undefined,
                  right: c.anchor === "right" ? "4%" : undefined,
                  top: c.y,
                  transform: "translateY(-50%)",
                }}
              >
                <div
                  className={`flex items-center gap-2 ${c.anchor === "right" ? "flex-row-reverse" : ""}`}
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_10px_rgba(0,229,255,0.9)]" />
                  <div className="whitespace-nowrap rounded-md border border-border-strong bg-background/80 px-2.5 py-1 font-mono text-[10px] tracking-wider text-foreground backdrop-blur-sm">
                    {c.label.toUpperCase()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}


/* ---------- TRUST BAR ---------- */
function TrustBar() {
  const logos = ["NORTHWAVE", "AURALABS", "BYTEFORGE", "PULSAR.IO", "NIMBUS", "QUANTA"];
  return (
    <section className="border-y border-border bg-surface/30 py-10">
      <p className="text-center font-mono text-[11px] tracking-[0.3em] text-muted-foreground">
        BUILT FOR TEAMS AT
      </p>
      <div className="mt-6 overflow-hidden">
        <div className="animate-marquee flex w-max gap-16 px-6">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="font-display text-2xl font-bold tracking-widest text-muted-foreground/40 hover:text-muted-foreground"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROBLEM ---------- */
function Problem() {
  return (
    <>
      <SectionDivider />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-destructive/80">
              THE PROBLEM
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              AUDIO SYSTEMS AREN'T BUILT FOR MODERN SCALE.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                img: "/Time-Consuming.svg",
                title: "01. Manual Audio Creation Bottlenecks",
                text: "Creating custom audio requires time, tools, and expertise—making it slow, expensive, and difficult to scale across products.",
              },
              {
                img: "/No_Consistency.svg",
                title: "02. Inconsistent Audio Branding",
                text: "Businesses struggle to maintain a unified sound identity across platforms, leading to fragmented and unrecognizable user experiences.",
              },
              {
                img: "/Not_Scalable.svg",
                title: "03. Lack of Automation & Integration",
                text: "Audio workflows are rarely automated and difficult to integrate into applications, limiting real-time responsiveness and system efficiency.",
              },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-destructive/15 bg-gradient-to-br from-destructive/5 to-transparent p-7 transition-all hover:border-destructive/30">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-destructive/20 bg-destructive/10 text-destructive">
                    <img src={p.img} alt={p.title} className="h-10 w-10" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-14 flex items-center justify-center gap-3 text-muted-foreground">
              <span className="h-px w-16 bg-border-strong" />
              <ArrowRight size={16} className="text-primary" />
              <span className="font-mono text-xs tracking-[0.2em] text-primary">
                WE FIXED IT
              </span>
              <ArrowRight size={16} className="text-primary" />
              <span className="h-px w-16 bg-border-strong" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      img: "/INPUT.svg",
      title: "01. Define Your Audio Input",
      text: "Input text, configure voice parameters, or upload sound requirements to initiate the audio generation process.",
    },
    {
      n: "02",
      img: "/AI_ENGINE.svg",
      title: "02. AI Generates & Structures Sound",
      text: "The engine synthesizes audio, builds waveforms, and applies intelligent logic to create structured sound outputs.",
      badge: "Powered by NVIDIA Audio SDK Architecture",
    },
    {
      n: "03",
      img: "/OUTPUT_DEPLOY.svg",
      title: "03. Automate & Deploy in Real Time",
      text: "Audio workflows are executed instantly and delivered into your applications through seamless integration.",
    },
  ];
  return (
    <>
      <SectionDivider />
      <section id="how-it-works" className="relative scroll-mt-24 overflow-hidden py-28">
        <WaveformBackground />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-primary">PROCESS</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              FROM INPUT TO INTELLIGENT AUDIO IN THREE STEPS.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Soniccora transforms simple inputs into fully automated audio systems—powered by
              AI and real-time processing.
            </p>
          </Reveal>

          <div className="relative mt-16 grid gap-6 md:grid-cols-3">
            {/* connector */}
            <svg
              className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 md:block"
              viewBox="0 0 1000 4"
              preserveAspectRatio="none"
              height="4"
              width="100%"
            >
              <line
                x1="0"
                y1="2"
                x2="1000"
                y2="2"
                stroke="#00E5FF"
                strokeWidth="1.2"
                strokeDasharray="6 6"
                className="animate-dash"
              />
            </svg>

            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="glass relative h-full rounded-2xl p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-widest text-primary">
                      STEP {s.n}
                    </span>
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <img src={s.img} alt={s.title} className="h-10 w-10" />
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                  {s.badge && (
                    <span className="mt-5 inline-flex items-center gap-2 rounded-md border border-secondary/30 bg-secondary/10 px-3 py-1 font-mono text-[10px] tracking-wider text-secondary">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      {s.badge}
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- CAPABILITIES ---------- */
function Capabilities() {
  return (
    <>
      <SectionDivider />
      <section id="platform" className="scroll-mt-24 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-primary">CAPABILITIES</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
              CORE CAPABILITIES OF THE SONICCORA ENGINE.
            </h2>
            <p className="mt-3 text-muted-foreground">
              A unified system designed to generate, control, and scale intelligent audio across
              modern applications.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              {
                icon: Waves,
                img: capWaveform,
                title: "01. AI Audio Synthesis",
                tag: "Core Engine",
                text: "Generate high-quality voice outputs, alerts, and sound elements instantly using advanced AI-driven sound creation.",
              },
              {
                icon: Sliders,
                img: capVoice,
                title: "02. Voice & Sound Customization",
                tag: "Customization Layer",
                text: "Fine-tune tone, pitch, and style to create consistent, branded audio identities tailored to your product.",
              },
              {
                icon: GitBranch,
                img: capWorkflow,
                title: "03. Workflow Automation Engine",
                tag: "Automation",
                text: "Design and execute dynamic audio flows with triggers, conditions, and real-time playback logic.",
              },
              {
                icon: Code2,
                img: capApi,
                title: "04. API-Based Audio Deployment",
                tag: "Developer Tools",
                text: "Integrate and deliver audio seamlessly into applications with scalable, real-time processing infrastructure.",
              },
            ].map((it, i) => (
              <Reveal key={it.title} delay={i * 0.08}>
                <div className="glass group relative h-full overflow-hidden rounded-2xl transition-all hover:border-primary/30">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={it.img}
                      alt={it.title}
                      width={1200}
                      height={675}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                    <span className="absolute right-4 top-4 rounded-full border border-border-strong bg-background/70 px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground backdrop-blur">
                      {it.tag}
                    </span>
                  </div>
                  <div className="p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 text-primary">
                      <it.icon size={20} />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold">{it.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {it.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- DASHBOARD PREVIEW ---------- */
function DashboardPreview() {
  return (
    <>
      <SectionDivider />
      <section id="technology" className="relative scroll-mt-24 overflow-hidden py-28">
        <div className="absolute inset-0 radial-cyan opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <p className="font-mono text-xs tracking-[0.3em] text-primary">DASHBOARD</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              YOUR AUDIO COMMAND CENTER.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              A full command-center dashboard to generate, monitor, and deploy audio — all in
              one place.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto mt-14 max-w-6xl">
              <div className="glass-strong relative overflow-hidden rounded-2xl shadow-[0_0_120px_rgba(0,229,255,0.18)]">
                <img
                  src={dashboardImg}
                  alt="Soniccora dashboard preview — audio analytics, waveforms, and system health"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background via-background/30 to-transparent">
                  <Link
                    to="/product"
                    className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_0_40px_rgba(0,229,255,0.5)] transition-transform hover:scale-105"
                  >
                    See Full Platform
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ---------- WHO FOR ---------- */
function WhoFor() {
  return (
    <>
      <SectionDivider />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-primary">AUDIENCE</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              BUILT FOR TEAMS THAT RELY ON INTELLIGENT AUDIO.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Soniccora is designed for creators, developers, and businesses that need
              scalable, real-time sound systems.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                img: "/App_Developers.svg",
                title: "01. Developers & Engineering Teams",
                text: "Build and integrate AI-powered audio directly into applications using flexible APIs and real-time processing systems.",
              },
              {
                img: "/Saas_Platforms.svg",
                title: "02. SaaS Platforms & Digital Products",
                text: "Enhance user experience with automated alerts, voice interactions, and dynamic audio workflows at scale.",
              },
              {
                img: "/Media_Creators.svg",
                title: "03. Brands & Content Creators",
                text: "Create consistent audio identities and produce high-quality sound assets without complex production workflows.",
              },
            ].map((it, i) => (
              <Reveal key={it.title} delay={i * 0.08}>
                <div className="glass h-full rounded-2xl p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                    <img src={it.img} alt={it.title} className="h-10 w-10" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- PRICING ---------- */
function Pricing() {
  return (
    <>
      <SectionDivider />
      <section id="pricing" className="scroll-mt-24 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <p className="font-mono text-xs tracking-[0.3em] text-primary">PRICING</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              SCALE AUDIO INTELLIGENCE ON YOUR TERMS.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                name: "SIGNAL LAYER",
                tier: "Starter Tier",
                price: "Free",
                cta: "Start Building",
                bestFor: "Individual developers & small projects",
                features: [
                  "Core AI audio generation access",
                  "Basic voice and tone customization",
                  "Limited workflow automation",
                  "Standard audio processing speed",
                  "Entry-level API access",
                ],
              },
              {
                name: "FLOW ENGINE",
                tier: "Growth Tier",
                price: "$49",
                period: "/month",
                cta: "Upgrade to Flow",
                featured: true,
                bestFor: "SaaS platforms & growing applications",
                features: [
                  "Advanced AI audio synthesis capabilities",
                  "Full voice customization controls",
                  "Multi-step audio workflow automation",
                  "Real-time processing & faster generation",
                  "Extended API usage with higher limits",
                  "Sound asset management system",
                ],
              },
              {
                name: "CORE INFRASTRUCTURE",
                tier: "Enterprise Tier",
                price: "Custom",
                cta: "Contact Sales",
                bestFor: "Enterprises & large-scale platforms",
                features: [
                  "High-performance AI audio engine access",
                  "Custom voice modeling & branded audio identity",
                  "Complex workflow orchestration (multi-trigger systems)",
                  "Priority processing with low-latency output",
                  "Dedicated API infrastructure & scaling support",
                  "Advanced system monitoring & usage analytics",
                ],
              },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl p-7 ${
                    t.featured
                      ? "border border-primary/60 bg-gradient-to-b from-primary/[0.08] to-surface shadow-[0_0_40px_rgba(0,229,255,0.2)]"
                      : "glass"
                  }`}
                >
                  {t.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 font-mono text-[10px] tracking-widest text-primary-foreground">
                      MOST POPULAR
                    </span>
                  )}
                  <p className="font-mono text-xs tracking-[0.2em] text-primary">{t.name}</p>
                  <p className="mt-1 text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                    {t.tier}
                  </p>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold">{t.price}</span>
                    {t.period && (
                      <span className="text-sm text-muted-foreground">{t.period}</span>
                    )}
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">{t.bestFor}</p>
                  <ul className="mt-6 flex-grow space-y-3">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check
                          size={16}
                          className={`mt-0.5 shrink-0 ${
                            t.featured ? "text-primary" : "text-muted-foreground"
                          }`}
                        />
                        <span className="text-foreground/90">{f}</span>
                      </li>
                    ))}
                  </ul>
                  {t.name === "SIGNAL LAYER" ? (
                    <Link
                      to="/product"
                      className="mt-7 block w-full rounded-md border border-border-strong bg-surface py-2.5 text-center text-sm font-bold transition-all hover:border-primary/40 hover:bg-surface/80"
                    >
                      {t.cta}
                    </Link>
                  ) : t.name === "FLOW ENGINE" ? (
                    <a
                      href="https://buy.stripe.com/test_eVq3cv91V5yW7dU1fO2B200"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 block w-full rounded-md bg-primary py-2.5 text-center text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.55)]"
                    >
                      {t.cta}
                    </a>
                  ) : (
                    <Link
                      to="/contact"
                      className="mt-7 block w-full rounded-md border border-border-strong bg-surface py-2.5 text-center text-sm font-bold transition-all hover:border-primary/40 hover:bg-surface/80"
                    >
                      {t.cta}
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            All plans include 99.9% uptime SLA and SOC2-compliant infrastructure.
          </p>
        </div>
      </section>
    </>
  );
}

/* ---------- API DOCS PREVIEW ---------- */
function ApiDocs() {
  const features = [
    "REST API with JSON responses",
    "Webhook support for async audio jobs",
    "SDKs for Node.js, Python (Q2 2025)",
    "API key management in dashboard",
    "Rate limiting & usage analytics",
  ];
  return (
    <>
      <SectionDivider />
      <section id="docs" className="scroll-mt-24 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="font-mono text-xs tracking-[0.3em] text-primary">DEVELOPERS</p>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                BUILT API-FIRST.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Clean, documented, and ready to integrate.
              </p>
              <ul className="mt-8 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <ArrowRight size={16} className="mt-1 text-primary" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/docs"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
              >
                View Full API Reference <ArrowRight size={14} />
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-strong overflow-hidden rounded-xl">
                <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                  <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                    soniccora.api
                  </span>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-relaxed text-foreground/90">
{`POST /v1/audio/generate
Content-Type: application/json
Authorization: Bearer {API_KEY}

{
  "prompt": "A calm notification chime",
  "tone": "soft",
  "pitch": "mid",
  "duration": 3,
  "format": "mp3"
}

`}
<span className="text-primary">{`Response 200 OK`}</span>{`
{
  "audio_id": "aud_8f2k19xz",
  "url": "https://cdn.soniccora.com/audio/aud_8f2k19xz.mp3",
  "duration": 3.2,
  "status": "ready"
}`}
                </pre>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}



/* ---------- FINAL CTA ---------- */
function FinalCta() {
  return (
    <>
      <SectionDivider />
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-x-0 top-0 h-full radial-cyan opacity-50" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-bold sm:text-6xl">
              START BUILDING WITH SONICCORA.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Join 500+ developers generating intelligent audio at scale.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 text-sm font-bold text-primary-foreground shadow-[0_0_40px_rgba(0,229,255,0.5)] transition-transform hover:scale-105"
              >
                Contact Us <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
