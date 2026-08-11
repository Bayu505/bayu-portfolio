import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">

      {/* Main Spotlight */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.25, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[-260px]
          h-[750px]
          w-[750px]
          -translate-x-1/2
          rounded-full
          bg-[#C6FA00]
          blur-[230px]
        "
        style={{
          opacity: 0.12,
        }}
      />

      {/* Left Ambient */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, 15, -15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-250px]
          top-[250px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#C6FA00]
          blur-[220px]
        "
        style={{
          opacity: 0.04,
        }}
      />

      {/* Right Ambient */}
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, -15, 15, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-220px]
          bottom-[120px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#C6FA00]
          blur-[220px]
        "
        style={{
          opacity: 0.03,
        }}
      />
    </div>
  );
}