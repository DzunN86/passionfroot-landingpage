import { DashboardImg1, DashboardImg2, HeroFigure1, HeroFigure2, HeroImage } from "@/assets";
import { statsCard } from "@/constant";
import { animate, transitions, variants } from "@/lib/animations";
import { motion } from "motion/react";

function StatCard({ value, desc }: { value: string; desc: string }) {
  return (
    <motion.div
      transition={transitions.default}
      variants={variants.fadeInDown}
      className="bg-white h-[8rem] md:h-full text-primary rounded-[.75rem] w-full md:w-auto p-[1.125rem] shadow-[inset_0_0_0_1px_#e8e8e8]"
    >
      <h1 className="font-heading text-[1.7rem] sm:text-[2rem] md:text-[3rem] leading-[115%]">{value}</h1>
      <p className="text-[1rem] md:text-[1.125rem] leading-[1.4] tracking-[-.26px]">{desc}</p>
    </motion.div>
  );
}

export default function HeroLanding() {
  return (
    <div className="font-body mt-2 mx-4 pt-4 rounded-[6px] overflow-hidden relative bg-hero [background-position:50%,0_0] bg-cover flex flex-col items-center gap-[6px]">
      <div className="pt-32 lg:pt-[12rem] px-5 md:px-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <motion.h1 {...animate} transition={transitions.default} variants={variants.fadeInDown} className="font-heading text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] leading-[120%] sm:leading-[130%] md:leading-[1.125] mb-3 text-primary tracking-[-1.14px]">
              Helping creators profit <br /> off their passion
            </motion.h1>
            <motion.p {...animate} transition={{...transitions.default, delay: 0.2}} variants={variants.fadeInDown} className="max-w-[30rem] tracking-[-.32px]">Check out how we help creators - big and small - monetize their content on all channels</motion.p>
          </div>
          <motion.div
            {...animate}
            transition={transitions.default}
            variants={variants.staggerChildren}
            className="flex lg:grid grid-cols-3 flex-wrap gap-3 lg:gap-7 mt-12 justify-center items-center w-full max-w-full lg:max-w-[56.25rem]"
          >
            {statsCard.map((card) => (
              <StatCard value={card.value} desc={card.desc} />
            ))}
          </motion.div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col justify-start items-start absolute top-[45%] right-auto bottom-0 left-0 transform translate-y-[-50%] gap-12">
        <motion.img
          {...animate}
          transition={{ ...transitions.default, delay: 0.8 }}
          variants={{
            ...variants.fadeInRight,
            hidden: { ...variants.fadeInRight.hidden, rotate: 0 },
            show: { ...variants.fadeInRight.show, rotate: 4 },
          }}
          src={DashboardImg1}
          alt="dashboard-graphics"
          className="object-contain rounded-[.75rem] w-[15rem] relative top-0 right-auto bottom-0 left-[-7.5rem] rotate-[4deg] shadow-[inset_0_0_0_1px_#3b3d3d1f,_0_7.34px_29.34px_7.34px_#00000008,_0_1.83px_14.67px_#0000000a]"
        />
        <motion.img
          {...animate}
          transition={{ ...transitions.default, delay: 0.8 }}
          variants={variants.fadeInRight}
          src={HeroFigure1}
          alt="customer_hero-figure-1"
          className="h-[6rem] relative top-0 right-auto bottom-[0%] left-[0%]"
        />
      </div>
      <div className="hidden lg:flex flex-col items-end absolute top-[46%] right-0 bottom-0 left-auto transform translate-y-[-50%] gap-12">
        <motion.img
          {...animate}
          transition={{ ...transitions.default, delay: 0.8 }}
          variants={{
            ...variants.fadeInLeft,
            hidden: { ...variants.fadeInLeft.hidden, rotate: 0 },
            show: { ...variants.fadeInLeft.show, rotate: -4 },
          }}
          src={DashboardImg2}
          alt="dashboard-graphics"
          className="object-contain rounded-[.75rem] w-[15rem] relative top-0 right-[-8rem] bottom-0 left-auto rotate-[-4deg] shadow-[inset_0_0_0_1px_#3b3d3d1f,_0_7.34px_29.34px_7.34px_#00000008,_0_1.83px_14.67px_#0000000a]"
        />
        <motion.img
          {...animate}
          transition={{ ...transitions.default, delay: 0.8 }}
          variants={variants.fadeInLeft}
          src={HeroFigure2}
          alt="customer_hero-figure-1"
          className="h-[6rem] relative top-0 right-0 bottom-0 left-auto"
        />
      </div>
      <motion.img {...animate} transition={{ ...transitions.default, delay: 0.8 }} variants={variants.fadeInUp} src={HeroImage} alt="dashboard-graphics" className="w-[19.5rem] max-w-full mt-12" />
    </div>
  );
}
