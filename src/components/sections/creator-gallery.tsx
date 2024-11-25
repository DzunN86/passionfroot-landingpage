import { transitions, variants, whileInView } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

function CreatorLink({ link, className, children }: { link: string; className?: string; children: React.ReactNode }) {
  return (
    <motion.a
    transition={transitions.default}
      variants={variants.fadeInDown}
      aria-label="creator-link"
      href={link}
      className={cn(
        `
        tracking-[-.18px] text-primary bg-[#ddd0] bg-[linear-gradient(#fbfbf8,#f7f5ee)] text-[15px] font-semibold leading-[1.3] rounded-[6px] py-2 px-3 overflow-hidden relative shadow-button transition-all duration-200 ease-in-out
        before:content-[''] before:absolute before:opacity-0 before:top-0 before:left-0 before:w-full before:h-full 
        before:bg-[linear-gradient(73deg,#fca061,#ffc7a1)] 
        before:transition-all before:duration-200 before:ease-in-out z-1
        hover:before:opacity-100
        `,
        className
      )}
    >
      <div className="z-[3] relative">{children}</div>
    </motion.a>
  );
}

export default function CreatorGallery() {
  return (
    <>
      <motion.div
        {...whileInView}
        transition={transitions.default}
        variants={variants.staggerChildren}
        className="container max-w-full md:max-w-7xl mx-auto flex flex-col items-center justify-start text-center w-[37.5rem] px-4 md:px-0"
      >
        <motion.h1 transition={transitions.default} variants={variants.fadeInDown} className="font-heading text-[1.7rem] sm:text-[2rem] lg:text-5xl leading-[115%] text-primary tracking-[-.6px]">
          Creator Gallery
        </motion.h1>
        <motion.p transition={transitions.default} variants={variants.fadeInDown} className="text-[#4e4d46] text-[1rem] lg:text-[1.25rem] leading-[150%] tracking-[-.32px]">
          We're proud to support a diverse community of creators. Explore their storefronts below to get inspired!
        </motion.p>
      </motion.div>
      <motion.div
        {...whileInView}
        transition={transitions.default}
        variants={variants.staggerChildren}
        className="container max-w-full md:max-w-7xl mx-auto w-[42.5rem] flex flex-wrap justify-center items-center mt-6 mb-8 md:mb-12 gap-2 md:gap-[.75rem]"
      >
        <CreatorLink link="#gold-standard">Gold Standard</CreatorLink>
        <CreatorLink link="#marketing-and-design" className="before:bg-[linear-gradient(75deg,#51b1fb,#69bcfca3)]">
          Marketing & Design
        </CreatorLink>
        <CreatorLink link="#Development" className="before:bg-[linear-gradient(167deg,#58df8c,#6ce49a8a)]">
          Productivity & Personal Development
        </CreatorLink>
        <CreatorLink link="#Tech" className="before:bg-[linear-gradient(150deg,#ee5968,#ef6c799e)]">
          Tech & Business
        </CreatorLink>
        <CreatorLink link="#AI" className="before:bg-[linear-gradient(137deg,#b26bf5,#c287f7b0)]">
          Artificial Intelligence
        </CreatorLink>
        <CreatorLink link="#Froot" className="before:bg-[linear-gradient(131deg,#4ad5e8,#61daea82)]">
          Froot Salad!
        </CreatorLink>
      </motion.div>
    </>
  );
}
