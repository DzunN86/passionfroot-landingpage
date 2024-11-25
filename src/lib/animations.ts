export const animate = {
  initial: "hidden",
  animate: "show",
};

export const whileInView = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: false, amount: 0.3 },
}

export const transitions = {
  default: {
    duration: 0.5,
    ease: "easeInOut",
  },
  slow: {
    duration: 1,
    ease: "easeInOut",
  },
  staggerChildren: {
    duration: 0.5,
    ease: "easeInOut",
    delayChildren: 0.2,
    staggerChildren: 0.2,
  },
};

export const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transitionEnd: { y: 0, x: 0 },
    },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: 10 },
    show: { opacity: 1, x: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  },
  staggerChildren: {
    show: {
      transition: transitions.staggerChildren,
    },
  },
};
