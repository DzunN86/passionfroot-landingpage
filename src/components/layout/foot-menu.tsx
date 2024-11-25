import { Icon } from "@/components/shared/icons";
import { footerMenu } from "@/constant";

export default function FootMenu() {
  return (
    <div className="grid grid-cols-2 gap-6 mb-8 lg:mb-[4.75rem]">
      {footerMenu.map((menu) => (
        <div key={menu.section} className="flex flex-col gap-6 w-full">
          <h2 className="font-heading text-xl leading-[155%]">{menu.section}</h2>
          <div className="flex flex-col gap-5">
            {menu.links.map((link) => (
              <div key={link.name} className="flex items-center leading-[1.2]">
                <a
                  href={link.url}
                  className="text-[#afaeac] text-base bg-[#b0afac] bg-clip-text leading-[100%] self-start transition-all duration-200 hover:bg-link-gradient"
                  style={{ WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text" }}
                >
                  {link.name}
                </a>
                {link.isNew && (
                  <div className="flex items-center gap-1 text-xs leading-[1]">
                    <div className="flex flex-col justify-center items-center w-[1.4rem] h-[1.4rem]">
                      <Icon.Notif className="animate-ping" />
                    </div>
                    <div>{link.name === "Careers" ? "Hiring" : "New"}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
