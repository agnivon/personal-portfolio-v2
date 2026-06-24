"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-cyan-400 mb-8 transition-colors cursor-pointer"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back
    </button>
  );
}
