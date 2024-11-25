import { transitions, variants } from "@/lib/animations";
import { motion } from "motion/react";

interface BlogItemProps {
  title: string;
  image: string;
  description: string;
  readTime: string;
}

export default function BlogItem({ title, image, description, readTime }: BlogItemProps) {
  return (
    <motion.a
      transition={transitions.default}
      variants={variants.fadeIn}
      href="#"
      className="flex flex-col justify-start items-start transition-all duration-300 ease-in-out-quint hover:-translate-y-2"
    >
      <img src={image} alt="cover-image" className="rounded-xl" />
      <div className="text-[#858480] uppercase tracking-[1px] my-3 text-[.875rem] font-semibold font-body leading-[1]">{readTime}</div>
      <h2 className="font-heading leading-[1.35] text-xl">{title}</h2>
      <p className="mt-1 font-body text-[0.875rem] leading-[1.4]">{description}</p>
    </motion.a>
  );
}
