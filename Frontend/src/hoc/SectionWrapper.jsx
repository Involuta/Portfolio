import { motion } from 'framer-motion';
import { Navbar } from '../components'

const SectionWrapper = (Component, idName) =>
  function HOC() { // HOC stands for Higher-Order Component
    return (
      <div> 
        <Navbar/>
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="d-flex px-5 py-5 m-5"
        >
          <span id={idName}>
            &nbsp;
          </span>
          <Component />
        </motion.section>
      </div>
    );
  };

export default SectionWrapper;