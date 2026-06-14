"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/components/AuthProvider";

export default function Dashboard() {
  const { user, role } = useAuth();

  return (
    <ProtectedRoute>
      <div>
        <h1>DEV-GPT Dashboard</h1>
        <p>{user?.email}</p>
        <p>Rôle: {role}</p>
      </div>
    </ProtectedRoute>
  );
}
