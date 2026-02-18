"use client";

import { useEffect } from "react";

export default function PasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Force light mode on password page
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("dark");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", "light");
    }
  }, []);

  return <>{children}</>;
}
