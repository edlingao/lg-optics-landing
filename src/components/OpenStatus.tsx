"use client";
import { useEffect, useState } from "react";
import { openStatus } from "@/lib/hours";

// Rendered on the client only: pages are static, so the server cannot know the visitor's "now".
export default function OpenStatus({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<ReturnType<typeof openStatus> | null>(null);
  useEffect(() => {
    const update = () => setStatus(openStatus(new Date()));
    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);
  if (!status) return null;
  return <p className={`inline-flex items-center gap-2 text-sm font-semibold ${className}`}>
    <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${status.open ? "bg-green-400" : "bg-amber-400"}`} />{status.text}
  </p>;
}
