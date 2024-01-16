"use client";
import { supabase } from "./providers";

export default function Home() {
  const handleOnClick = async () => {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    console.log("DATA: ", data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <a
        href={`https://ixoocxoteluivttovfzm.supabase.co/auth/v1/authorize?provider=google&redirect_to=https://my-next-app-dn9.pages.dev/auth/callback`}
      >
        Google
      </a> */}
      <button onClick={handleOnClick}>Google</button>
    </main>
  );
}
