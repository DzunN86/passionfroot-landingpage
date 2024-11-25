import { transitions, variants } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface CustomerItemProps {
  name: string;
  avatar: string;
  about: string;
  theme: {
    gradientStart: string;
    gradientEnd: string;
    primary: string;
    secondary: string;
  };
}

export default function CustomerItem({ name, avatar, about, theme }: CustomerItemProps) {
  return (
    <motion.div
      transition={transitions.default}
      variants={variants.fadeIn}
      className={cn("flex flex-col justify-start items-start p-3 relative rounded-xl w-auto md:w-[12rem] gap-2 transition-all duration-200 ease-in-out-quint hover:-translate-y-3")}
      style={{
        background: `linear-gradient(${theme.gradientStart}, ${theme.gradientEnd})`,
      }}
    >
      <a href="" className="z-50 flex w-full absolute inset-0" />
      <div className="flex justify-start items-center w-full mb-2 relative gap-2">
        <img src={avatar} alt="creator" className="border-[1.67px] border-white w-10 h-10 rounded-full" />
        <h4 className="font-heading text-primary max-w-[5rem] text-base leading-[1.2]">{name}</h4>
        <div className="z-40 flex justify-center items-center w-4 h-4 absolute top-0 right-0 bottom-auto left-auto">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.7999 2.39999C8.35807 2.39999 7.9999 2.75817 7.9999 3.19999C7.9999 3.64182 8.35807 3.99999 8.7999 3.99999H10.8685L5.83422 9.03431C5.5218 9.34673 5.5218 9.85326 5.83422 10.1657C6.14664 10.4781 6.65317 10.4781 6.96559 10.1657L11.9999 5.13136V7.19999C11.9999 7.64182 12.3581 7.99999 12.7999 7.99999C13.2417 7.99999 13.5999 7.64182 13.5999 7.19999V3.19999C13.5999 2.75817 13.2417 2.39999 12.7999 2.39999H8.7999Z"
              fill={theme.primary}
              // fill-opacity="0.45"
            ></path>
            <path
              d="M3.9999 3.99999C3.11625 3.99999 2.3999 4.71634 2.3999 5.59999V12C2.3999 12.8836 3.11625 13.6 3.9999 13.6H10.3999C11.2836 13.6 11.9999 12.8836 11.9999 12V9.59999C11.9999 9.15817 11.6417 8.79999 11.1999 8.79999C10.7581 8.79999 10.3999 9.15817 10.3999 9.59999V12H3.9999V5.59999L6.3999 5.59999C6.84173 5.59999 7.1999 5.24182 7.1999 4.79999C7.1999 4.35817 6.84173 3.99999 6.3999 3.99999H3.9999Z"
              fill={theme.primary}
              // fill-opacity="0.45"
            ></path>
            <defs>
              <linearGradient id="paint0_linear_1877_27096" x1="7.9999" y1="2.39999" x2="7.9999" y2="13.6" gradientUnits="userSpaceOnUse">
                <stop stopColor={theme.primary}></stop>
                <stop offset="1" stopColor={theme.primary}></stop>
              </linearGradient>
              <linearGradient id="paint1_linear_1877_27096" x1="7.9999" y1="2.39999" x2="7.9999" y2="13.6" gradientUnits="userSpaceOnUse">
                <stop stopColor={theme.primary}></stop>
                <stop offset="1" stopColor={theme.primary}></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-full h-full py-3 px-2 rounded-[0.5rem] gap-2 bg-[#fff9]">
        <div className="flex justify-c items-center gap-[.3rem]">
          <div className="flex justify-center items-center w-[.625rem] h-[.625rem]">
            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath={theme.primary}>
                <path
                  d="M5.40007 2.91667C5.40007 2.47464 5.22447 2.05072 4.91191 1.73816C4.59935 1.42559 4.17543 1.25 3.7334 1.25H1.2334V7.5H4.15007C4.48159 7.5 4.79953 7.6317 5.03395 7.86612C5.26837 8.10054 5.40007 8.41848 5.40007 8.75M5.40007 2.91667V8.75M5.40007 2.91667C5.40007 2.47464 5.57566 2.05072 5.88822 1.73816C6.20078 1.42559 6.62471 1.25 7.06673 1.25H9.56673V7.5H6.65007C6.31855 7.5 6.0006 7.6317 5.76618 7.86612C5.53176 8.10054 5.40007 8.41848 5.40007 8.75M2.90007 3.33333H3.7334M2.90007 5H3.7334M7.06673 3.33333H7.90007M7.06673 5H7.90007"
                  stroke={theme.primary}
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
              <defs>
                <linearGradient id="paint0_linear_2013_54340" x1="5.40007" y1="1.25" x2="5.40007" y2="8.75" gradientUnits="userSpaceOnUse">
                  <stop stopColor={theme.secondary}></stop>
                  <stop offset="1" stopColor={theme.secondary}></stop>
                </linearGradient>
                <clipPath id="clip0_2013_54340">
                  <rect width="10" height="10" fill="white" transform="translate(0.399902)"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h4 className="text-xs font-semibold font-body" style={{ color: theme.primary }}>
            About
          </h4>
        </div>
        <p className="text-[.625rem] leading-[140%] font-body" style={{ color: theme.secondary }}>
          {about}
        </p>
      </div>
    </motion.div>
  );
}
