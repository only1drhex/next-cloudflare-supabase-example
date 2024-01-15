"use client";
import Image from "next/image";

import { createBrowserClient } from "@supabase/ssr";

export default function Home() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const onClick = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `http://example.com/auth/callback`,
      },
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={onClick}>Sign in with Google</button>
    </main>
  );
}
