import { motion } from "framer-motion";

interface Menu {
  title: string;
  image: string;
  href: string;
}

interface Props {
  item: Menu;
  setPreview: (item: Menu | null) => void;
}

export default function MenuItem({
  item,
  setPreview,
}: Props) {
  return (
    <motion.a
      href={item.href}
      whileHover={{
        x: 15,
      }}
      onMouseEnter={() => setPreview(item)}
      onMouseLeave={() => setPreview(null)}
      className="
        block
        cursor-pointer
        select-none
        text-[72px]
        font-black
        leading-none
        tracking-[-0.08em]
        text-zinc-700
        transition-all
        duration-300
        hover:text-white
        md:text-[96px]
      "
    >
      {item.title}
    </motion.a>
  );
}