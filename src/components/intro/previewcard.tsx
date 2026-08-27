import { AnimatePresence, motion } from "framer-motion";

interface Preview {
  title: string;
  image: string;
}

interface Props {
  preview: Preview | null;
}

export default function PreviewCard({ preview }: Props) {
  return (
    <AnimatePresence>

      {preview && (

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
            scale: .95,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: 40,
            scale: .95,
          }}
          transition={{
            duration: .25,
          }}
          className="
            pointer-events-none
            absolute
            left-[58%]
            top-1/2
            -translate-y-1/2
            h-[480px]
            w-[360px]
            overflow-hidden
            rounded-[28px]
            border
            border-white/10
            bg-zinc-900
            shadow-[0_40px_80px_rgba(0,0,0,.5)]
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