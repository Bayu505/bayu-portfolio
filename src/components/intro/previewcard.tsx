import { AnimatePresence, motion } from "framer-motion";

type Preview = {
  title: string;
  image: string;
};

type Props = {
  preview: Preview | null;
};

export default function PreviewCard({ preview }: Props) {
  return (
    <AnimatePresence>
      {preview && (
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: 40,
            scale: 0.95,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            h-[480px]
            w-[360px]
            overflow-hidden
            rounded-[28px]
            border
            border-white/10
            bg-zinc-900
          "
        >
          <img
            src={preview.image}
            alt={preview.title}
            className="h-full w-full object-cover"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}