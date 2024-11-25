import CustomerItem from "@/components/sections/customer-item";
import { CustomerType } from "@/types";
import { whileInView, transitions, variants, animate } from "@/lib/animations";
import { motion } from "motion/react";

interface CreatorGalleryItemProps {
  id: string;
  title: string;
  customers: CustomerType[];
  theme: {
    gradientStart: string;
    gradientEnd: string;
    primary: string;
    secondary: string;
  };
}

export default function CreatorGalleryItem({ id, title, customers, theme }: CreatorGalleryItemProps) {
  return (
    <div id={id} className="bg-[#f5f3ea00] bg-[linear-gradient(#faf9f5,#f5f3ea)] rounded-[6px] flex justify-center mt-6 px-4 md:px-0 mx-4 py-8 md:py-16">
      <div className="px-5 md:px-10">
        <div className="container mx-auto max-w-[80rem]">
          <motion.h1
            {...whileInView}
            transition={transitions.default}
            variants={variants.fadeInDown}
            className="font-heading text-center tracking-[-.6px] leading-[115%] text-[1.7rem] sm:text-[2rem] lg:text-5xl text-primary"
          >
            {title}
          </motion.h1>
          <motion.div
            {...whileInView}
            transition={transitions.default}
            variants={variants.staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:flex flex-wrap gap-4 content-center justify-center mt-6 lg:mt-12"
          >
            {customers.map((customer) => (
              <CustomerItem key={customer.name} name={customer.name} avatar={customer.avatar} about={customer.about} theme={theme} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
