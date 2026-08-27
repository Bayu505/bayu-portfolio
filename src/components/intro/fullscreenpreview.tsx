import { AnimatePresence, motion } from "framer-motion";

interface Props {
  image?: string;
  visible: boolean;
}

export default function FullscreenPreview({
  image,
  visible,
}: Props) {
  return (
    <AnimatePresence mode="wait">
      {visible && image && (
        <motion.div
          key={image}
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.05,
          }}
          transition={{
            duration: .8,
            ease: [0.22,1,0.36,1],
          }}
          className="absolute inset-0 z-[5] overflow-hidden"
        >
          <img
            src={image}
            className="
              h-full
              w-full
              object-cover
              brightness-[.35]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-black/45
            "
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}