import { motion } from "motion/react";
interface HamburgerMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function HamburgerMenu({ isOpen, setIsOpen }: HamburgerMenuProps) {
  return (
    <motion.button
    className="flex flex-col justify-center items-center w-12 h-12 me-[-.5rem]"
    onClick={() => setIsOpen(!isOpen)}
    initial="closed"
    animate={isOpen ? "open" : "closed"}
  >
    {/* First bar */}
    <motion.div
      className="bg-black w-6 h-[2px]"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { rotate: 45, y: 8, transition: { duration: 0.3 } },
        closed: { rotate: 0, y: 0, transition: { duration: 0.3 } },
      }}
    ></motion.div>

    {/* Second bar */}
    <motion.div
      className="bg-black w-6 h-[2px] my-[6px]"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { opacity: 0, transition: { duration: 0.3 } },
        closed: { opacity: 1, transition: { duration: 0.3 } },
      }}
    ></motion.div>

    {/* Third bar */}
    <motion.div
      className="bg-black w-6 h-[2px]"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { rotate: -45, y: -8, transition: { duration: 0.3 } },
        closed: { rotate: 0, y: 0, transition: { duration: 0.3 } },
      }}
    ></motion.div>
  </motion.button>
  )
}
