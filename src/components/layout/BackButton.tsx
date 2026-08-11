import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const mode = params.get("mode");

  const handleBack = () => {
    if (mode === "list") {
      navigate("/list");
      return;
    }

    navigate("/");
  };

  return (
    <button
      onClick={handleBack}
      className="
        fixed
        left-6
        top-6
        z-[999]
        flex
        items-center
        gap-2
        rounded-full
        border
        border-white/10
        bg-black/40
        px-4
        py-2.5
        text-sm
        text-white/70
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-white/20
        hover:bg-white/[0.08]
        hover:text-white
        md:left-8
        md:top-8
      "
    >
      <ArrowLeft size={16} strokeWidth={1.8} />

      <span>Back</span>
    </button>
  );
}