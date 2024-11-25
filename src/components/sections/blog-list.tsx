import BlogItem from "@/components/sections/blog-item";
import { transitions, variants, whileInView } from "@/lib/animations";
import { BlogType } from "@/types";
import { motion } from "motion/react";

export default function BlogList({ data }: { data: BlogType[] }) {
  return (
    <section id="blog" className="py-16 md:py-20 px-5 md:px-10">
      <div className="container max-w-full md:max-w-7xl mx-auto">
        <motion.div
         {...whileInView}
         transition={transitions.default}
         variants={variants.staggerChildren}
         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {data.map((item) => (
            <BlogItem key={item.title} title={item.title} description={item.description} image={item.image} readTime={item.readTime} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
