import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useState, useEffect } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup, onAuthStateChanged, User, signOut, signInWithRedirect, getRedirectResult } from "firebase/auth";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Soniccora" },
      {
        name: "description",
        content: "The Soniccora command center. Sign in to generate, monitor, and deploy audio.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Handle the result of a redirect login
    const checkRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result?.user) {
          setUser(result.user);
        }
      } catch (err: any) {
        console.error("Redirect Result Error:", err);
        setError(err.message);
      }
    };
    checkRedirect();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    }, (err) => {
      setError(err.message);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLoginPopup = async () => {
    try {
      setError(null);
      await signInWithPopup(auth, googleProvider);
    } catch (err: any) {
      setError(err.message);
      console.error("Popup Error:", err);
    }
  };

  const handleLoginRedirect = async () => {
    try {
      setError(null);
      await signInWithRedirect(auth, googleProvider);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-32 pt-40 text-center">
        {!user ? (
          <>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              SIGN IN TO <span className="text-primary text-glow-cyan">DASHBOARD.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Test your Firebase connection here. If the popup doesn't appear, try the redirect method.
            </p>

            {error && (
              <div className="mt-6 p-4 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                {error}
              </div>
            )}

            <div className="mt-8 flex flex-col items-center gap-3">
              <button
                onClick={handleLoginPopup}
                className="inline-flex h-12 w-full max-w-xs items-center justify-center gap-2 rounded-md bg-primary px-7 text-sm font-bold text-primary-foreground shadow-[0_0_30px_rgba(0,229,255,0.5)]"
              >
                Sign In with Popup
              </button>
              <button
                onClick={handleLoginRedirect}
                className="inline-flex h-12 w-full max-w-xs items-center justify-center gap-2 rounded-md border border-border-strong bg-surface/40 px-7 text-sm font-semibold backdrop-blur"
              >
                Sign In with Redirect
              </button>
            </div>
          </>
        ) : (
          <>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              AUTHENTICATED · {user.displayName?.toUpperCase()}
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              FIREBASE IS <span className="text-primary text-glow-cyan">WORKING.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              You have successfully connected your Firebase account. You can now access your
              generation studio and waveform monitor.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={handleLogout}
                className="inline-flex h-12 items-center gap-2 rounded-md border border-border-strong bg-surface/40 px-7 text-sm font-semibold backdrop-blur"
              >
                Logout
              </button>
              <Link
                to="/pricing"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-7 text-sm font-bold text-primary-foreground shadow-[0_0_30px_rgba(0,229,255,0.5)]"
              >
                Manage Subscription <ArrowRight size={16} />
              </Link>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
