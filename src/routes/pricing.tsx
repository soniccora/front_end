import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SectionDivider } from "@/components/site/SectionDivider";
import { SeoSchema } from "@/components/site/SeoSchema";
import { sectionMedia } from "@/lib/media";

const PAGE_TITLE = "Pricing — Soniccora AI Audio Engine";
const PAGE_DESC =
  "Simple, scalable pricing for the Soniccora AI audio engine. Start free with 100 generations per month, scale to Pro at $49 with 10k generations, or talk to us for unlimited Enterprise.";

const FAQS = [
  {
    q: "What counts as one audio generation?",
    a: "Each successful API call to /v1/audio/generate that returns a ready audio asset counts as one generation, regardless of duration up to 120 seconds. Cached replays of an existing asset are free.",
  },
  {
    q: "Can I upgrade or downgrade at any time?",
    a: "Yes. Plan changes take effect immediately, and we prorate the difference automatically on your next invoice. No long-term contracts on Starter or Pro.",
  },
  {
    q: "Do you offer a free trial of Pro?",
    a: "Pro includes a 14-day free trial — no credit card required. You'll only be billed if you choose to continue after day 14, and you can cancel from the dashboard at any time.",
  },
  {
    q: "What happens if I exceed my monthly quota?",
    a: "On Starter, generations pause until the next cycle. On Pro, additional generations are billed at $0.004 each — no surprise overages above 2x your plan. Enterprise plans have no caps.",
  },
  {
    q: "Is custom voice training included?",
    a: "Custom voice model training is available exclusively on Enterprise plans, with onboarding handled by our voice team. Pro plans include 10 brand voice profiles cloned from reference audio.",
  },
  {
    q: "How do I get an enterprise quote?",
    a: "Use the Contact Sales button above. We typically respond within one business day with a tailored proposal including SLA, dedicated infrastructure, and volume pricing.",
  },
  {
    q: "Do you offer discounts for startups or non-profits?",
    a: "Yes — early-stage startups (under $5M raised) and registered non-profits get 50% off Pro for 12 months. Email connect@soniccora.com from your company domain to apply.",
  },
  {
    q: "What payment methods do you accept?",
    a: "All major credit cards via Stripe. Enterprise customers can pay annually via invoice (NET-30) in USD or EUR.",
  },
];

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: "Soniccora Pricing — Simple & Scalable" },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:image", content: sectionMedia.pricing.hero.src },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: sectionMedia.pricing.hero.src },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SeoSchema name={PAGE_TITLE} description={PAGE_DESC} url="/pricing" faqs={FAQS} />
      <Navbar />
      <main>
        <Hero />
        <Tiers />
        <Compare />
        <UsagePricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            PRICING
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            SCALE AUDIO <span className="text-primary text-glow-cyan">INTELLIGENCE</span> ON YOUR
            TERMS.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            From early-stage building to mission-critical core infrastructure. Choose the layer
            that matches your scale.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Tiers() {
  const tiers = [
    {
      name: "SIGNAL LAYER",
      tier: "Starter Tier",
      price: "Free",
      desc: "For early-stage builders exploring AI audio systems.",
      bestFor: "Best For: Individual developers & small projects",
      cta: "Start Building",
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
      desc: "For products scaling audio experiences across users.",
      bestFor: "Best For: SaaS platforms & growing applications",
      cta: "Upgrade to Flow",
      featured: true,
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
      desc: "For businesses running mission-critical audio systems.",
      bestFor: "Best For: Enterprises & large-scale platforms",
      cta: "Contact Sales",
      features: [
        "High-performance AI audio engine access",
        "Custom voice modeling & branded audio identity",
        "Complex workflow orchestration (multi-trigger systems)",
        "Priority processing with low-latency output",
        "Dedicated API infrastructure & scaling support",
        "Advanced system monitoring & usage analytics",
      ],
    },
  ];
  return (
    <section className="pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
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
                <p className="mt-2 text-xs text-muted-foreground">{t.bestFor}</p>
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
          All plans include 99.9% uptime SLA, SOC2-compliant infrastructure, and global edge
          delivery.
        </p>
      </div>
    </section>
  );
}

function Compare() {
  const features = [
    ["Monthly generations", "100", "10,000", "Unlimited"],
    ["Voice customization", "Basic", "Full suite", "Full suite + custom"],
    ["Workflow automation", false, true, true],
    ["Brand voice profiles", "1", "10", "Unlimited"],
    ["Concurrent jobs", "2", "50", "Unlimited"],
    ["Output formats", "MP3, WAV", "All", "All"],
    ["Priority API access", false, true, true],
    ["Streaming first-byte audio", false, true, true],
    ["Webhook delivery", false, true, true],
    ["Custom voice model training", false, false, true],
    ["Dedicated infrastructure", false, false, true],
    ["SSO (SAML / OIDC)", false, false, true],
    ["SLA", "Best effort", "99.9%", "99.99%"],
    ["Support", "Community", "Email · 24h", "Dedicated engineer"],
  ];
  const cell = (v: string | boolean) =>
    typeof v === "boolean" ? (
      v ? (
        <Check size={16} className="mx-auto text-primary" />
      ) : (
        <X size={16} className="mx-auto text-muted-foreground/40" />
      )
    ) : (
      <span className="text-foreground/90">{v}</span>
    );
  return (
    <>
      <SectionDivider />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-primary">COMPARE</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              ALL FEATURES, SIDE BY SIDE.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass mt-10 overflow-x-auto rounded-2xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-2 font-mono text-[11px] tracking-widest text-muted-foreground">
                    <th className="px-6 py-4 text-left">FEATURE</th>
                    <th className="px-6 py-4 text-center">STARTER</th>
                    <th className="px-6 py-4 text-center text-primary">PRO</th>
                    <th className="px-6 py-4 text-center">ENTERPRISE</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((row, i) => (
                    <tr
                      key={row[0] as string}
                      className={i < features.length - 1 ? "border-b border-border" : ""}
                    >
                      <td className="px-6 py-4 text-foreground/90">{row[0]}</td>
                      <td className="px-6 py-4 text-center">{cell(row[1])}</td>
                      <td className="px-6 py-4 text-center">{cell(row[2])}</td>
                      <td className="px-6 py-4 text-center">{cell(row[3])}</td>
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

function UsagePricing() {
  const tiers = [
    { range: "0 – 10,000 / mo", rate: "Included", note: "Pro plan baseline" },
    { range: "10,001 – 100,000", rate: "$0.004 / gen", note: "~$400 per 100k" },
    { range: "100,001 – 1,000,000", rate: "$0.003 / gen", note: "Auto volume tier" },
    { range: "1,000,000+", rate: "Custom", note: "Talk to sales" },
  ];
  return (
    <>
      <SectionDivider />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-primary">USAGE PRICING</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              LINEAR. PREDICTABLE. NO TRAPS.
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Overage rates apply on the Pro plan once you exceed 10k generations. Volume
              discounts kick in automatically — no renegotiation required.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass mt-10 overflow-x-auto rounded-2xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-2 font-mono text-[11px] tracking-widest text-muted-foreground">
                    <th className="px-6 py-4 text-left">USAGE BAND</th>
                    <th className="px-6 py-4 text-left">RATE</th>
                    <th className="px-6 py-4 text-left">NOTES</th>
                  </tr>
                </thead>
                <tbody>
                  {tiers.map((t, i) => (
                    <tr
                      key={t.range}
                      className={i < tiers.length - 1 ? "border-b border-border" : ""}
                    >
                      <td className="px-6 py-4 text-foreground/90">{t.range}</td>
                      <td className="px-6 py-4 font-mono text-primary">{t.rate}</td>
                      <td className="px-6 py-4 text-muted-foreground">{t.note}</td>
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
              QUESTIONS, ANSWERED.
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


