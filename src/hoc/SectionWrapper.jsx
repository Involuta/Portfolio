import { motion } from 'framer-motion';

const SectionWrapper = (Component, idName) =>
  function HOC() { // HOC stands for Higher-Order Component
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container px-2 py-5"
      >
        <span id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;