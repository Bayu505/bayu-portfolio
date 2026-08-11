"use client";

import { motion } from "framer-motion";

export default function MenuItem({
    item,
    active,
    onHover,
}:any){

return(

<motion.a

href={item.target}

onMouseEnter={onHover}

whileHover={{x:20}}

className="group flex items-center gap-6 py-2"

>

<span className="text-zinc-600 text-xl">

{item.number}

</span>

<h2

className={`
text-[90px]
font-black
leading-none
tracking-[-0.06em]
transition-all
duration-300

${active

?"text-[#C6FA00]"

:"text-zinc-600"}

group-hover:text-white

`}

>

{item.title}

</h2>

</motion.a>

)

}