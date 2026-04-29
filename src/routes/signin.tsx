import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/signin" as any)({
  component: SignInPage,
});

function SignInPage() {
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    try {
      setError(null);
      console.log("Starting Firebase Login...");
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Success:", result.user.email);
      window.location.href = "/dashboard";
    } catch (err: any) {
      console.error("Firebase Error:", err);
      if (err.code === "auth/popup-blocked") {
        await signInWithRedirect(auth, googleProvider);
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="w-full max-w-md glass p-12 rounded-3xl border border-primary/20 text-center">
          <h1 className="text-4xl font-bold text-glow-cyan text-primary">FIREBASE LOGIN</h1>
          <p className="mt-4 text-muted-foreground">Please use the button below to sign in via Google.</p>

          {error && (
            <div className="mt-6 p-3 rounded-md bg-destructive/10 text-destructive border border-destructive/20 text-xs">
              {error}
            </div>
          )}

          <button
            onClick={handleGoogleLogin}
            className="mt-10 flex w-full items-center justify-center gap-3 rounded-md bg-primary py-4 text-sm font-bold text-primary-foreground shadow-[0_0_30px_rgba(0,229,255,0.45)] transition-transform hover:scale-[1.02]"
          >
            SIGN IN WITH GOOGLE
          </button>
          
          <p className="mt-8 text-[10px] uppercase tracking-widest text-muted-foreground">
            Bypassing platform default auth
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
