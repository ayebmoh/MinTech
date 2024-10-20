import { motion } from "framer-motion";

export const slideAndFloat = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 1.5,
      ease: "easeOut",
    },
  },
  floating: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 1.5,
    },
  },
};

export const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

export const fadeIn = (
  direction = "",
  type = "spring",
  delay = 0,
  duration = 0.5
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const slideIn = () => ({
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.8,
      ease: "easeOut",
    },
  },
});

export const floating = {
  hidden: {
    opacity: 1,
    y: 0,
  },
  show: {
    opacity: 1,
    y: [0, -10, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const ExampleComponent = () => (
  <motion.div initial="hidden" animate="show" variants={navVariants}>
    <h1>Welcome to the Hero Section</h1>
  </motion.div>
);

export default ExampleComponent;
