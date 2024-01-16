"use client";

import { useEffect } from "react";
import { supabase } from "./providers";

export function IsLoggedIn() {
  useEffect(() => {
    async function getAuth() {
      const user = await supabase.auth.getUser();
      console.log("USER: ", user);
    }

    getAuth();
  }, []);

  return <div>Is logged in: </div>;
}
