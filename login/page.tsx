"use client";

import { useState } from "react";
import { loginUser, loginWithGoogle } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    await loginUser(email, password);
    router.push("/dashboard");
  };

  return (
    <div>
      <h1>Connexion</h1>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Se connecter</button>

      <button onClick={loginWithGoogle}>
        Connexion Google
      </button>
    </div>
  );
}
