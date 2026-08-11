import { useNavigate, useLocation } from "react-router-dom";

export type ViewMode = "spiral" | "list";

export default function ModeSwitcher() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentMode: ViewMode =
    location.pathname === "/list" ? "list" : "spiral";

  const switchMode = (mode: ViewMode) => {
    if (mode === currentMode) return;

    if (mode === "spiral") {
      navigate("/");
    } else {
      navigate("/list");
    }
  };

  return (
    <div
      className="
        absolute
        left-1/2
        top-7
        z-[100]
        flex
        -translate-x-1/2
        items-center
        gap-5
        text-sm
      "
    >
      <button
        onClick={() => switchMode("spiral")}
        className={`
          transition
          duration-300
          ${
            currentMode === "spiral"
              ? "font-medium text-white"
              : "text-white/35 hover:text-white"
          }
        `}
      >
        float
      </button>

      <span
        className={`
          h-2
          w-2
          rounded-full
          transition
          duration-300
          ${
            currentMode === "spiral"
              ? "bg-[#C6FA00] shadow-[0_0_12px_rgba(198,250,0,0.8)]"
              : "bg-white/30"
          }
        `}
      />

      <button
        onClick={() => switchMode("list")}
        className={`
          transition
          duration-300
          ${
            currentMode === "list"
              ? "font-medium text-white"
              : "text-white/35 hover:text-white"
          }
        `}
      >
        list
      </button>
    </div>
  );
}