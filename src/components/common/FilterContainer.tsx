import { motion } from "motion/react";
const FilterContainer = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  const transition = {
    duration: 1.0,
    delay: index * 0.3,
    ease: [0, 0.71, 0.2, 1.01],
  };
  return (
    <motion.div
      className="space-y-4"
      initial={{ translateY: 20, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default FilterContainer;
