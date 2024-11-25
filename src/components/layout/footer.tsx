import FootMenu from "@/components/layout/foot-menu";
import CtaBox from "@/components/sections/cta-box";
import { Icon } from "@/components/shared/icons";
import Logo from "@/components/shared/logo";
import { socialMedia } from "@/constant/menu";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="text-white bg-black-gradient font-body">
      <div className="px-5 lg:px-10">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col gap-12 lg:gap-6 justify-between pt-12 lg:pt-16 pb-4 lg:pb-14">
            <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
              <div className="w-full flex flex-col gap-4 lg:gap-6 flex-1">
                <a href="" className="text-white mb-8 lg:mb-16 self-center sm:self-start">
                  <Logo size="lg" className="w-[17.5625rem] h-[3rem] flex flex-col justify-center items-center" />
                </a>
                <FootMenu />
                <div className="flex gap-3 justify-center sm:justify-start">
                  {socialMedia.map((social) => {
                    const IconComponent = Icon[social.icon as keyof typeof Icon];
                    return (
                      <motion.a whileHover="hover" href={social.url} key={social.name} className="w-8 h-8 flex justify-center items-center relative transition-transform duration-300">
                        <motion.div
                          initial={{ scale: 1, color: "#afaeac" }}
                          variants={{ hover: { scale: 1.2, color: "#FF9966" } }}
                          transition={{ duration: 0.3 }}
                          className={`flex flex-col justify-center items-center w-[1.125rem] h-4`}
                        >
                          <IconComponent className="w-full h-full" />
                        </motion.div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
              <CtaBox />
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-16 text-[#afaeac] text-[.875rem] leading-[140%] text-center md:text-start">
              <div className="flex flex-col flex-1 w-full gap-6">
                <p>Passionfroot helps marketers to scale their go to market with content partnerships and creators to run and manage their brand partnerships in one place.</p>
              </div>
              <div className="flex flex-col md:gap-1 flex-1 w-full justify-end items-center md:items-end">
                <div>© 2024 Passionfroot GmbH. All rights reserved.</div>
                <div className="flex flex-1 justify-center md:justify-end items-start w-1/2 gap-8">
                  <a href="#" className="hover:underline">
                    Impressum
                  </a>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
