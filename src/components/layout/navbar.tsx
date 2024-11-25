import NavMenuItem from "@/components/layout/nav-menu-item";
import Divider from "@/components/shared/divider";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { loginMenu, navigationMenu } from "@/constant/menu";
import { animate, transitions, variants } from "@/lib/animations";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.div
      {...animate}
      transition={{...transitions.slow, delay: 0.8}}
      variants={variants.slideDown}
      className="transition-[top] duration-200 ease-in-out z-[9999] fixed top-4 left-0 right-0 overflow-visible font-body w-ful h-auto mx-auto px-4 hidden lg:flex items-center"
    >
      <div className="container mx-auto max-w-7xl w-full">
        <div className="flex justify-between items-center mx-auto gap-[16px]">
          <nav className="z-[99999] flex flex-wrap justify-center xl:justify-between w-full relative float-right gap-2 lg:gap-0 shadow-[0px_0px_0px_0px_rgba(25,25,25,0.0)]">
            <div className="ps-[.625rem] bg-white flex items-center rounded-xl p-[.375rem] gap-2 shadow-[0_16px_16px_-8px_#191a1a05,0_8px_8px_-4px_#191a1a05,0_4px_4px_-2px_#191a1a05,0_2px_2px_-1px_#191a1a08,0_1px_1px_-.5px_#191a1a08,0_0_0_1px_#191a1a08]">
              <a href="#" className="float-left text-[#333] relative">
                <div className="text-primary flex flex-col justify-center items-center w-[8.3125rem] h-8 transition-transform duration-200 hover:scale-[.98]">
                  <Logo />
                </div>
              </a>
              <Divider placement="vertical" />
              <NavigationMenu>
                <NavigationMenuList>
                  {navigationMenu.map((menu) => (
                    <NavMenuItem sectionHeadline key={menu.label} data={menu} />
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="bg-white flex items-center rounded-xl p-[.375rem] gap-2 shadow-[0_16px_16px_-8px_#191a1a05,0_8px_8px_-4px_#191a1a05,0_4px_4px_-2px_#191a1a05,0_2px_2px_-1px_#191a1a08,0_1px_1px_-.5px_#191a1a08,0_0_0_1px_#191a1a08]">
              <div className="flex items-center">
                <a href="#" className="text-primary py-2 px-3 text-[.95rem] leading-[1.3] transition-colors hover:bg-[#f7f5ee]">
                  About
                </a>
                <a href="#" className="text-primary py-2 px-3 text-[.95rem] leading-[1.3] transition-colors hover:bg-[#f7f5ee]">
                  Careers
                </a>
              </div>
              <Divider placement="vertical" />
              <NavigationMenu>
                <NavigationMenuList>
                  <NavMenuItem data={loginMenu} />
                </NavigationMenuList>
              </NavigationMenu>
              <Button size="sm" hasArrow>
                Get access
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </motion.div>
  );
}
