import { motion } from 'framer-motion';

const SectionWrapper = (Component, idName) =>
  function HOC() { // HOC stands for Higher-Order Component
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container py-5"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;