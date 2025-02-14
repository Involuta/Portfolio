import { motion } from 'framer-motion';
import { Navbar } from '../components'
import { heroBG, simple_green_bg, triangle_green_bg } from "../assets";

const SectionWrapper = (Component, idName) =>
  function HOC() { // HOC stands for Higher-Order Component
    return (
      <div
        style={{
          backgroundImage: `url(${simple_green_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Full height
      }}> 
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