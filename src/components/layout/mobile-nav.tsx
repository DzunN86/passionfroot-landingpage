import NavMenuItem from "@/components/layout/nav-menu-item";
import Divider from "@/components/shared/divider";
import HamburgerMenu from "@/components/shared/hamburger-menu";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { loginMenu, navigationMenu } from "@/constant/menu";
import { animate, transitions, variants } from "@/lib/animations";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      {...animate}
      transition={{ ...transitions.slow, delay: 0.8 }}
      variants={variants.slideDown}
      className="transition-[top] duration-200 ease-in-out z-[9999] fixed top-5 left-0 right-0 overflow-visible font-body w-ful h-auto mx-auto my-4 px-8 md:px-12 mb-4 items-center flex lg:hidden"
    >
      <div className="container mx-auto max-w-7xl w-full relative">
        <motion.div
          className="px-2 relative z-10 bg-white mx-auto rounded-xl shadow-menu"
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            open: { borderRadius: "12px 12px 0 0" },
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-between items-center gap-2">
            <a href="#" className="float-left text-[#333] relative">
              <div className="text-primary flex flex-col justify-center items-center w-[8.3125rem] h-8 transition-transform duration-200 hover:scale-[.98]">
                <Logo />
              </div>
            </a>
            <div className="flex items-center gap-4 ms-4">
              <div className="float-right cursor-pointer text-2xl relative">
                <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </div>
          </div>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.1 }}
              className="px-[.625rem] bg-white mx-auto rounded-b-xl shadow-menu flex flex-col gap-4 pb-2"
            >
              <div className="flex flex-col items-start gap-1">
                {navigationMenu.map((menu) => (
                  <NavMenuItem type="mobile" key={menu.label} data={menu} />
                ))}
              </div>
              <Divider />
              <a href="#" className="text-primary py-2 text-[.95rem] leading-[1.3] transition-colors hover:bg-[#f7f5ee]">
                About
              </a>
              <a href="#" className="text-primary py-2 text-[.95rem] leading-[1.3] transition-colors hover:bg-[#f7f5ee]">
                Careers
              </a>
              <NavMenuItem type="mobile" data={loginMenu} />
              <Divider />
              <Button size="sm" hasArrow>
                Get access
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
