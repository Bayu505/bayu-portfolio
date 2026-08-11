import { useState } from "react";
import Intro from "../components/intro/intro";
import SpiralPreview from "../components/intro/SpiralPreview";

type ViewMode = "list" | "spiral";

export default function Home() {
  const [mode, setMode] = useState<ViewMode>("list");

  return (
    <main className="relative min-h-screen bg-black">
      {/* ================================================= */}
      {/* MODE SWITCHER */}
      {/* ================================================= */}

      <div
        className="
          fixed
          left-1/2
          top-8
          z-[100]
          flex
          -translate-x-1/2
          items-center
          rounded-full
          border
          border-white/10
          bg-black/50
          px-1
          py-1
          backdrop-blur-xl
        "
      >
        <button
          onClick={() => setMode("spiral")}
          className={`
            rounded-full
            px-4
            py-2
            text-[11px]
            font-medium
            uppercase
            tracking-[0.2em]
            transition
            ${
              mode === "spiral"
                ? "bg-white text-black"
                : "text-zinc-500 hover:text-white"
            }
          `}
        >
          Float
        </button>

        <button
          onClick={() => setMode("list")}
          className={`
            rounded-full
            px-4
            py-2
            text-[11px]
            font-medium
            uppercase
            tracking-[0.2em]
            transition
            ${
              mode === "list"
                ? "bg-white text-black"
                : "text-zinc-500 hover:text-white"
            }
          `}
        >
          List
        </button>
      </div>

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      {mode === "list" ? <Intro /> : <SpiralPreview />}
    </main>
  );
}