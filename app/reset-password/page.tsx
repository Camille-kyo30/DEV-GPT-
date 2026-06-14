"use client";

import { useState } from "react";
import { resetPassword } from "@/lib/auth";

export default function Reset() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <h1>Reset password</h1>

      <input onChange={(e) => setEmail(e.target.value)} />

      <button onClick={() => resetPassword(email)}>
        Envoyer email
      </button>
    </div>
  );
}
