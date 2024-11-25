import { Icon } from "@/components/shared/icons";
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavMenuType } from "@/types";
import { ChevronDown } from "lucide-react";

interface NavMenuItemProps {
  data: NavMenuType;
  sectionHeadline?: boolean;
  type?: "default" | "mobile";
}

export default function NavMenuItem({ data, sectionHeadline = false, type = "default" }: NavMenuItemProps) {
  if (type === "mobile") {
    return (
      <div className="group" key={data.label}>
        <div className="text-[.95rem] flex pt-3 items-center text-primary p-[.5rem .75rem]">
          <a href="">{data.label}</a>
          <ChevronDown className="relative ml-2 h-4 w-4 transition duration-200 group-hover:rotate-180" aria-hidden="true" />
        </div>
        <div className="max-h-0 group-hover:max-h-[1000px] overflow-hidden transition-all duration-300 ease-in-out">
          <nav className={cn("w-[723.453px]")}>
            <div className="overflow-hidden flex flex-col items-stretch w-full p-[.375rem] rounded-xl bg-white gap-2 shadow-[0_16px_16px_-8px_#191a1a05,0_8px_8px_-4px_#191a1a05,0_4px_4px_-2px_#191a1a05,0_2px_2px_-1px_#191a1a08,0_1px_1px_-.5px_#191a1a08,0_0_0_1px_#191a1a08]">
              <div className="flex flex-col items-stretch justify-between gap-2 w-full">
                {data.subMenu.map((subMenu, index) => (
                  <div className="flex flex-col gap-1" key={index}>
                    {subMenu.section && (
                      <div className="flex items-center text-[.75rem] text-[#858480] ps-2 font-medium uppercase gap-3">
                        <div>{subMenu.section}</div>
                        {sectionHeadline && (
                          <div className="bg-primary opacity-[.15] w-full h-[.0625rem] flex-1" />
                        )}
                      </div>
                    )}
                    {subMenu.links.map((link, idx) => {
                      const IconComponent = Icon[link.icon as keyof typeof Icon];
                      return (
                        <a
                          key={idx}
                          href={link.url}
                          className="group/menu relative overflow-hidden flex items-start w-full border-[0.5px] border-[#3b3d3d00] rounded-[8px] py-3 px-2 gap-2 hover:border-[#3b3d3d08] nav-item"
                        >
                          <div className="flex flex-col justify-center items-center mt-[4px] relative w-4 h-4 flex-none z-[3]">
                            <IconComponent />
                          </div>
                          <div className="flex flex-col gap-[.2rem] relative">
                            <div className="font-heading text-base leading-[1.4] z-[3]">{link.name}</div>
                            {link.description && <div className="text-[.875rem] leading-[140%] z-[3]">{link.description}</div>}
                          </div>
                          {link.description && (
                            <div className="z-[5] flex flex-col justify-center items-center w-4 h-4 my-auto ml-8 relative flex-none opacity-0 group-hover/menu:opacity-100 transition-opacity duration-200 ease-in-out">
                              <Icon.arrow />
                            </div>
                          )}
                        </a>
                      );
                    })}
                  </div>
                ))}
              </div>
              {data.image && (
                <div
                  className={cn(
                    "object-cover w-full max-w-full min-h-full max-h-[20rem] aspect-auto overflow-hidden rounded-[8px] -order-1",
                    data.label === "For Brands" ? "bg-cta-gradient" : "bg-purple-gradient"
                  )}
                >
                  <img src={data.image} alt="navigation-art" className="object-cover w-full h-full max-h-[20rem] max-w-full min-h-full aspect-auto bg-center" width="296" />
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    );
  }
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{data.label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <nav className={cn("w-fit", data.image ? "w-[48rem]" : "w-[22.8rem]")}>
          <div className="overflow-hidden flex items-stretch w-full p-[.375rem] rounded-xl bg-white gap-2 shadow-[0_16px_16px_-8px_#191a1a05,0_8px_8px_-4px_#191a1a05,0_4px_4px_-2px_#191a1a05,0_2px_2px_-1px_#191a1a08,0_1px_1px_-.5px_#191a1a08,0_0_0_1px_#191a1a08]">
            <div className="flex flex-col items-stretch justify-between gap-2 w-full">
              {data.subMenu.map((subMenu, index) => (
                <div className="flex flex-col gap-1" key={index}>
                  {subMenu.section && (
                    <div className="flex items-center text-[.75rem] text-[#858480] ps-2 font-medium uppercase gap-3">
                      <div>{subMenu.section}</div>
                      {sectionHeadline && <div className="bg-primary opacity-[.15] w-full h-[.0625rem] flex-1" />}
                    </div>
                  )}
                  {subMenu.links.map((link, idx) => {
                    const IconComponent = Icon[link.icon as keyof typeof Icon];
                    return (
                      <a
                        key={idx}
                        href={link.url}
                        className="group relative overflow-hidden flex items-start w-full border-[0.5px] border-[#3b3d3d00] rounded-[8px] py-3 px-2 gap-2 hover:border-[#3b3d3d08] nav-item"
                      >
                        <div className="flex flex-col justify-center items-center mt-[4px] relative w-4 h-4 flex-none z-[3]">
                          <IconComponent />
                        </div>
                        <div className="flex flex-col gap-[.2rem] relative">
                          <div className="font-heading text-base leading-[1.4] z-[3]">{link.name}</div>
                          {link.description && <div className="text-[.875rem] leading-[140%] z-[3]">{link.description}</div>}
                        </div>
                        {link.description && (
                          <div className="z-[5] flex flex-col justify-center items-center w-4 h-4 my-auto ml-8 relative flex-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                            <Icon.arrow />
                          </div>
                        )}
                      </a>
                    );
                  })}
                </div>
              ))}
            </div>
            {data.image && (
              <div
                className={cn(
                  "bg-cta-gradient object-cover w-full max-w-[20rem] min-h-full aspect-auto overflow-hidden rounded-[8px]",
                  data.label === "For Brands" ? "bg-cta-gradient" : "bg-purple-gradient"
                )}
              >
                <img src={data.image} alt="navigation-art" className="object-cover w-full h-full max-w-full min-h-full aspect-auto" width="296" />
              </div>
            )}
          </div>
        </nav>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
