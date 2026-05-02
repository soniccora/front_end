import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Rocket, CheckCircle2, Cpu, Cloud, Zap, Layers, GitMerge, Mic, BarChart3 } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { WaveformBackground } from "@/components/site/Waveform";
import { SectionDivider } from "@/components/site/SectionDivider";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Soniccora Platform — The Complete AI Audio Creation Platform" },
      {
        name: "description",
        content:
          "Generate, customize, automate, and deploy intelligent audio in a single unified platform powered by Soniccora's AI engine and NVIDIA GPU acceleration.",
      },
      {
        property: "og:title",
        content: "Soniccora Platform — Complete AI Audio Creation",
      },
      {
        property: "og:description",
        content:
          "A unified platform to generate, customize, and deploy intelligent audio.",
      },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Architecture />
        <Modules />
        <NvidiaIntegration />
        <Integrations />
        <Performance />
        <FinalCta />
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
      <div className="relative mx-auto max-w-7xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <Reveal>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            SONICCORA PLATFORM · v1.0 · NVIDIA ACCELERATED
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            THE COMPLETE AI AUDIO CREATION{" "}
            <span className="text-glow-cyan text-primary">PLATFORM.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Generate, customize, automate, and deploy intelligent audio — in a single unified platform. 
            Powered by NVIDIA GPU acceleration and enterprise-grade infrastructure.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href="https://app.soniccora.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-md bg-primary px-8 text-base font-bold text-primary-foreground shadow-[0_0_40px_rgba(0,229,255,0.5)] transition-transform hover:scale-[1.03]"
            >
              <Rocket size={18} />
              START BUILDING FREE
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary"
            >
              View API Docs <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Architecture() {
  const layers = [
    {
      label: "USER INTERFACE",
      items: ["Dashboard", "REST API", "SDK (Node/Python)", "Webhooks"],
      color: "text-primary",
      description: "Multi-language SDKs and real-time event delivery"
    },
    {
      label: "SONICCORA AUDIO ENGINE",
      items: ["Neural Synthesis", "Waveform Builder", "Style Engine", "Voice Cloning"],
      color: "text-secondary",
      description: "Proprietary AI models for high-fidelity audio generation"
    },
    {
      label: "NVIDIA RIVA & GPU ACCELERATION",
      items: ["H100 Tensor Core GPUs", "Real-Time TTS", "Low-Latency Inference", "AWS P4 Instances"],
      color: "text-primary",
      description: "Enterprise-grade speech synthesis and audio processing"
    },
    {
      label: "OUTPUT & DEPLOYMENT",
      items: ["CDN Delivery", "REST API", "App Integration", "Webhook Events"],
      color: "text-secondary",
      description: "Global edge delivery and seamless integration"
    },
  ];

  return (
    <>
      <SectionDivider />
      <section id="architecture" className="relative overflow-hidden py-28">
        <WaveformBackground />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-primary">ARCHITECTURE</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              POWERED BY NVIDIA GPU INFRASTRUCTURE.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Soniccora runs on AWS GPU-optimized infrastructure with NVIDIA H100 Tensor Core GPUs
              and NVIDIA Riva for real-time speech synthesis at enterprise scale.
            </p>
          </Reveal>

          <div className="mt-14 space-y-3">
            {layers.map((l, i) => (
              <Reveal key={l.label} delay={i * 0.08}>
                <div className="relative">
                  <div className="glass-strong flex flex-col gap-3 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-xs tracking-widest ${l.color}`}
                      >
                        L{i + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold">{l.label}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{l.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {l.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-border bg-surface px-3 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  {i < layers.length - 1 && (
                    <div className="ml-8 flex h-6 items-center">
                      <svg width="2" height="24" className="overflow-visible">
                        <line
                          x1="1"
                          y1="0"
                          x2="1"
                          y2="24"
                          stroke="#00E5FF"
                          strokeWidth="1.5"
                          strokeDasharray="3 3"
                          className="animate-dash"
                        />
                      </svg>
                    </div>
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

function Modules() {
  const modules = [
    {
      n: "01",
      title: "AI AUDIO GENERATION ENGINE",
      desc: "The core synthesis system processes text prompts and parameters through a neural waveform builder, producing high-fidelity audio in industry-standard formats. Generation runs on NVIDIA H100 GPUs with sub-2-second latency for standard outputs and elastic scaling for batch jobs.",
      specs: [
        "Output formats: MP3, WAV, OGG, FLAC",
        "Max duration: 120 seconds per generation",
        "Latency: <2s with GPU acceleration",
        "Concurrent jobs: Up to 50 (Pro), Unlimited (Enterprise)",
        "Powered by NVIDIA Riva TTS",
      ],
      icon: Mic,
    },
    {
      n: "02",
      title: "VOICE & SOUND CUSTOMIZATION",
      desc: "Fine-grained controls for tone, pitch, and emotional style let you sculpt audio to match your brand. Save reusable brand voice profiles and apply them consistently across every generation, channel, and product surface.",
      specs: [
        "Tone presets: 12 built-in + custom",
        "Pitch range: -12 to +12 semitones",
        "Style modes: Calm, Alert, Corporate, Dynamic, Neutral",
        "Brand voice profiles: Save and reuse across projects",
        "Voice cloning available for Enterprise",
      ],
      icon: Zap,
    },
    {
      n: "03",
      title: "AUDIO WORKFLOW AUTOMATION",
      desc: "An event-driven workflow engine routes audio generation through conditional logic, scheduled triggers, and webhook integrations. Build complex playback flows without writing orchestration code. Real-time synthesis for interactive applications.",
      specs: [
        "Trigger types: API call, webhook, schedule, app event",
        "Conditional logic: If/then audio routing",
        "Max workflow steps: 20 per flow",
        "Webhook delivery: <500ms average",
        "Real-time synthesis ready",
      ],
      icon: GitMerge,
    },
  ];

  return (
    <>
      <SectionDivider />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-primary">MODULES</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              PLATFORM MODULES.
            </h2>
          </Reveal>

          <div className="mt-14 space-y-5">
            {modules.map((m, i) => (
              <Reveal key={m.n} delay={i * 0.08}>
                <div className="glass overflow-hidden rounded-2xl p-8 transition-all hover:border-primary/30">
                  <div className="grid gap-8 lg:grid-cols-3">
                    <div>
                      <span className="font-mono text-xs tracking-widest text-primary">
                        MODULE {m.n}
                      </span>
                      <h3 className="mt-3 font-display text-2xl font-bold">{m.title}</h3>
                      <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] tracking-widest text-primary">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                        ACTIVE
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground lg:col-span-1">
                      {m.desc}
                    </p>
                    <ul className="space-y-2 lg:col-span-1">
                      {m.specs.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 size={14} className="mt-1 shrink-0 text-primary" />
                          <span className="text-foreground/90">{s}</span>
                        </li>
                      ))}
                    </ul>
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

function NvidiaIntegration() {
  const features = [
    {
      title: "NVIDIA Riva",
      description: "Enterprise-grade GPU-accelerated speech synthesis for real-time voice generation and customization.",
      specs: ["Real-time TTS", "Low-latency inference", "Multi-language support"],
    },
    {
      title: "NVIDIA H100 Tensor Core GPUs",
      description: "Training and inference for high-quality text-to-speech and voice cloning models with massive parallelism.",
      specs: ["Model training acceleration", "Reduced inference latency", "High-throughput processing"],
    },
    {
      title: "AWS P4 Instances",
      description: "Production deployment on AWS GPU-optimized infrastructure for global scalability and reliability.",
      specs: ["Enterprise SLA", "Auto-scaling support", "Multi-region deployment"],
    },
  ];

  return (
    <>
      <SectionDivider />
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex items-center gap-3">
              <Cpu className="h-8 w-8 text-primary" />
              <p className="font-mono text-xs tracking-[0.3em] text-primary">NVIDIA PARTNER ECOSYSTEM</p>
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              ENTERPRISE GPU INFRASTRUCTURE.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Soniccora is built on NVIDIA's accelerated computing platform, delivering 
              enterprise-grade performance for AI audio generation at scale.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      {i === 0 ? <Mic className="h-5 w-5 text-primary" /> : 
                       i === 1 ? <Cpu className="h-5 w-5 text-primary" /> : 
                       <Cloud className="h-5 w-5 text-primary" />}
                    </div>
                    <h3 className="font-display text-xl font-bold">{f.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{f.description}</p>
                  <ul className="space-y-1.5">
                    {f.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-xs text-foreground/80">
                        <CheckCircle2 size={12} className="text-primary" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24}>
            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-mono text-primary">DEPLOYMENT ARCHITECTURE</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Amazon EC2 P4 instances · NVIDIA H100 GPUs · Global CDN delivery · <span className="text-primary">99.9% uptime SLA</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Integrations() {
  const tabs = [
    {
      id: "node",
      label: "Node.js",
      code: `import { Soniccora } from "@soniccora/sdk";

const sc = new Soniccora({ 
  apiKey: process.env.SONIC_KEY,
  region: "us-east-1"  // GPU-optimized endpoint
});

// Real-time audio generation with GPU acceleration
const audio = await sc.audio.generate({
  prompt: "A calm notification chime",
  tone: "soft",
  pitch: "mid",
  duration: 3,
  format: "mp3",
});

console.log(audio.url); // CDN-delivered in <2s`,
    },
    {
      id: "python",
      label: "Python",
      code: `from soniccora import Soniccora

sc = Soniccora(
    api_key=os.environ["SONIC_KEY"],
    region="us-east-1"
)

# Generate high-fidelity audio
audio = sc.audio.generate(
    prompt="A calm notification chime",
    tone="soft",
    pitch="mid",
    duration=3,
    format="mp3",
)

print(audio.url)  # Instant CDN URL`,
    },
    {
      id: "rest",
      label: "REST",
      code: `curl -X POST https://api.soniccora.com/v1/audio/generate \\
  -H "Authorization: Bearer $SONIC_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "A calm notification chime",
    "tone": "soft",
    "pitch": "mid",
    "duration": 3,
    "format": "mp3",
    "gpu_accelerated": true
  }'`,
    },
  ];
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;

  return (
    <>
      <SectionDivider />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-primary">INTEGRATIONS</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              INTEGRATE IN MINUTES.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Native SDKs for Node.js and Python, plus a full REST API — all backed by GPU-accelerated endpoints.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-strong mt-12 overflow-hidden rounded-xl">
              <div className="flex items-center gap-1 border-b border-border bg-surface-2 px-3 py-2">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`rounded-md px-4 py-1.5 font-mono text-xs transition-all ${
                      active === t.id
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed text-foreground/90">
                {current.code}
              </pre>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 items-center justify-between">
              <Link
                to="/docs"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Explore full documentation <ArrowRight size={14} />
              </Link>
              <span className="text-xs text-muted-foreground">
                SDK available on npm and PyPI
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Performance() {
  const metrics = [
    { v: "99.9%", l: "Platform Uptime SLA", icon: BarChart3 },
    { v: "<2s", l: "Average Audio Generation", icon: Zap },
    { v: "10M+", l: "Audio Outputs Delivered", icon: Cloud },
    { v: "50ms", l: "API Response Time", icon: Layers },
  ];
  return (
    <>
      <SectionDivider />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-primary">INFRASTRUCTURE</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              ENTERPRISE-GRADE INFRASTRUCTURE.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Powered by AWS GPU-optimized instances and NVIDIA acceleration for unmatched performance.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <Reveal key={m.l} delay={i * 0.06}>
                <div className="glass relative h-full overflow-hidden rounded-2xl p-7 text-center">
                  <div className="absolute inset-0 radial-cyan opacity-30" />
                  <m.icon className="relative mx-auto h-8 w-8 text-primary/60 mb-3" />
                  <p className="relative font-display text-5xl font-bold text-glow-cyan text-primary">
                    {m.v}
                  </p>
                  <p className="relative mt-3 font-mono text-xs tracking-widest text-muted-foreground">
                    {m.l.toUpperCase()}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.24}>
            <div className="mt-8 text-center">
              <p className="text-xs font-mono text-muted-foreground">
                DEPLOYED ON AMAZON EC2 P4 INSTANCES · NVIDIA H100 GPUs · GLOBAL EDGE NETWORK
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FinalCta() {
  return (
    <>
      <SectionDivider />
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 radial-cyan opacity-50" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-5xl font-bold sm:text-7xl uppercase">
              READY TO BUILD WITH SONICCORA?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Start free with 100 generations per month — no credit card required. Enterprise plans include dedicated GPU capacity.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4">
              <a
                href="https://app.soniccora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-[60px] items-center justify-center gap-3 rounded-md bg-primary px-12 text-base font-bold text-primary-foreground shadow-[0_0_60px_rgba(0,229,255,0.55)] transition-transform hover:scale-[1.03]"
              >
                <Rocket size={20} />
                GET STARTED FREE
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-xs text-muted-foreground">
                Free tier: 100 generations/month · Pro: 5,000/month · Enterprise: Custom GPU allocation
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
