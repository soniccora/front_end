import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Rocket } from "lucide-react";

export const Route = createFileRoute("/login-firebase" as any)({
  component: LoginPage,
});

function LoginPage() {
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    try {
      setError(null);
      console.log("Starting Firebase Google Login...");
      await signInWithPopup(auth, googleProvider);
      window.location.href = "/dashboard";
    } catch (err: any) {
      console.error("Firebase Login error:", err);
      if (err.code === "auth/popup-blocked") {
        try {
          await signInWithRedirect(auth, googleProvider);
        } catch (reErr: any) {
          setError(reErr.message);
        }
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="w-full max-w-md space-y-8 glass p-10 rounded-3xl border border-primary/20 shadow-[0_0_50px_rgba(0,229,255,0.1)]">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight">
              Welcome to <span className="text-primary text-glow-cyan">Soniccora</span>
            </h1>
            <p className="mt-3 text-muted-foreground">Sign in to access your audio command center</p>
          </div>

          {error && (
            <div className="rounded-md bg-destructive/10 p-4 border border-destructive/20">
              <p className="text-sm text-destructive font-medium">{error}</p>
            </div>
          )}

          <div className="space-y-4">
            <button
              onClick={handleGoogleLogin}
              className="flex w-full items-center justify-center gap-3 rounded-md bg-primary py-4 text-sm font-bold text-primary-foreground shadow-[0_0_30px_rgba(0,229,255,0.45)] transition-all hover:scale-[1.02]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="currentColor"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="currentColor"
                  opacity="0.8"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="currentColor"
                  opacity="0.6"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="currentColor"
                  opacity="0.9"
                />
              </svg>
              Continue with Google
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground tracking-widest">or</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                By continuing, you agree to our{" "}
                <a href="/terms" className="underline hover:text-primary">Terms</a> and{" "}
                <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
