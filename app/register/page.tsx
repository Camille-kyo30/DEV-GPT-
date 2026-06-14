"use client";

import { useState } from "react";
import { registerUser } from "@/lib/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await registerUser(email, password);
    alert("Compte créé !");
  };

  return (
    <div>
      <h1>Inscription</h1>

      <input onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleRegister}>Créer compte</button>
    </div>
  );
}"use client";

import { useState } from "react";
import { registerUser } from "@/lib/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await registerUser(email, password);
    alert("Compte créé !");
  };

  return (
    <div>
      <h1>Inscription</h1>

      <input onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleRegister}>Créer compte</button>
    </div>
  );
}"use client";

import { useState } from "react";
import { registerUser } from "@/lib/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await registerUser(email, password);
    alert("Compte créé !");
  };

  return (
    <div>
      <h1>Inscription</h1>

      <input onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleRegister}>Créer compte</button>
    </div>
  );
}
