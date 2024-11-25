import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center group relative justify-center overflow-hidden gap-2 whitespace-nowrap rounded-[8px] text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary-gradient text-primary-foreground after:content-[''] after:absolute after:bg-primary after:inset-0 after:z-[7] after:transition-opacity after:duration-200 after:ease-in-out after:opacity-0 hover:after:opacity-100",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary-gradient shadow-secondary-button text-secondary-foreground hover:bg-secondary/80 after:content-[''] after:absolute after:bg-secondary after:inset-0 after:z-[7] after:transition-opacity after:duration-200 after:ease-in-out after:opacity-0 hover:after:opacity-100",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-[35.75px] text-[.95rem] rounded-[8px] px-3",
        lg: "h-12 text-[1.125rem] rounded-[8px] px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  hasArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, hasArrow = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
      <div className="z-[12] leading-[1.3]">{props.children}</div>
      {hasArrow && (
        <div className="z-[12] flex flex-col items-center justify-center w-4 h-4 h-">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 16 16">
            <path
              fill="currentColor"
              d="M2.349 7.23c.717-.012 1.365-.05 2.009.062.067.011.146-.026.218-.048a1.95 1.95 0 0 1 1.067-.029c.312.08.631.011.948.035.488.036.973-.096 1.458-.071.395.02.795.014 1.187.075.2.031.388.042.591-.01.221-.054.44.078.67.078.253 0 .501.064.743.136.272.08.34.326.142.526-.301.305-.696.439-1.104.498-.338.05-.683.078-1.023.096-.36.019-.723.143-1.088.022a.4.4 0 0 0-.204-.008c-.425.117-.867.038-1.295.122a1.2 1.2 0 0 1-.411-.004 1.14 1.14 0 0 0-.543.034c-.227.075-.452-.02-.68-.016-.23.005-.458.013-.676.068-.343.088-.685.039-1.019.003-.301-.031-.592-.005-.89.003-.28.008-.574.032-.85-.017-.314-.056-.45-.343-.566-.604-.102-.235.042-.408.2-.577.233-.249.501-.382.847-.359.112.008.227-.013.27-.015z"
              className="group-hover:opacity-0 transition-all duration-200 ease-in-out"
            ></path>
            <path
              fill="currentColor"
              d="M11.18 13.087a.647.647 0 0 1-.637-.766c.044-.273.144-.529.321-.75.137-.171.275-.343.387-.53.391-.652.82-1.276 1.334-1.839a.5.5 0 0 0 .103-.177c.133-.38.399-.668.658-.96.158-.177.172-.309-.008-.466a2.2 2.2 0 0 1-.558-.735c-.093-.203-.291-.32-.436-.482-.2-.225-.33-.5-.471-.76-.196-.36-.48-.646-.71-.974a4.7 4.7 0 0 1-.567-1.062 1 1 0 0 1-.063-.268c-.016-.171.088-.278.222-.36.126-.08.24-.046.351.037.22.164.455.304.626.535.219.294.552.489.742.813.5.285.74.797 1.08 1.223.2.25.446.466.68.685.19.177.345.37.414.625.04.147.128.266.21.393.197.3.185.608-.008.908-.285.444-.52.92-.843 1.34-.335.435-.557.95-.947 1.348-.237.242-.363.553-.51.853-.201.414-.44.807-.78 1.127a.8.8 0 0 1-.588.243z"
              className="group-hover:translate-x-[-5px] transition-all duration-200 ease-in-out"
            ></path>
          </svg>
        </div>
      )}
    </Comp>
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
