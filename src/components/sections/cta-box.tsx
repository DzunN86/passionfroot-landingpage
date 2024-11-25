import { Icon } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";

export default function CtaBox() {
  return (
    <div className="flex flex-1 flex-col justify-start items-stretch lg:items-end w-full gap-6 -order-1 lg:order-1">
      <div className="text-primary rounded-[8px] max-w-full lg:max-w-[35rem] flex flex-col gap-6 bg-cta-gradient p-8">
        <h2 className="font-heading text-center lg:text-start tracking-[-0.6px] text-[1.8rem] md:text-[2.5rem] leading-[115%]">Let’s grow your creator business</h2>
        <div className="flex flex-col items-start gap-2 mb-8 lg:mb-[4.75rem]">
          <div className="flex justify-start items-start gap-2 p-2 leading-[1.3] text-base md:text-xl font-medium">
            <div className="flex flex-col justify-center items-center w-6 h-6">
              <Icon.cheked />
            </div>
            <div>Vetted Ad Network</div>
          </div>
          <div className="flex justify-start items-start gap-2 p-2 leading-[1.3] text-base md:text-xl font-medium">
            <div className="flex flex-col justify-center items-center w-6 h-6">
              <Icon.cheked />
            </div>
            <div>Save 75% of your time managing your own deals</div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] md:grid-cols-[1.5fr_1fr] lg:grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-2 justify-start self-center items-center w-full">
          <Button size="lg" hasArrow>
            Get access
          </Button>
          <Button size="lg" variant="secondary">
            Book a call
          </Button>
        </div>
      </div>
    </div>
  );
}
