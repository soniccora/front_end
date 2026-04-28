import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs tracking-[0.3em] text-primary">ERROR · 404</p>
        <h1 className="mt-6 font-display text-7xl font-bold text-foreground">Lost signal.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The frequency you're tuning into doesn't exist on this network.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]"
          >
            Return to base
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Soniccora — The AI Audio Engine for Smart Sound Creation" },
      {
        name: "description",
        content:
          "Soniccora is an AI-powered audio engine for generating custom voice sounds, alert tones, and automated audio workflows in real time.",
      },
      { name: "author", content: "Soniccora" },
      { property: "og:title", content: "Soniccora — The AI Audio Engine" },
      {
        property: "og:description",
        content: "Generate intelligent audio at scale with real-time AI synthesis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return <Outlet />;
}
