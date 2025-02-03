/*
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => ( // Don't forget; use () when you want to return the React component inside the () without using the return statement. Use {} if you want to use the return statement to return the React component.
  <motion.div
    variants={fadeIn('up', 'spring', index*.5, .75)}
  >
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      class='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    >
      <div
        class='relative w-full h-[230px]'
      >
        <img
          src={image}
          alt={name}
          class='w-full h-full object-cover rounded-2xl'
        />
        <div class='absolute inset-0 justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, '_blank')}
            class='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='github'
              class='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div
        class='mt-5'
      >
        <h3
          class='text-white font-bold text-[24px]'
        >
          {name}
        </h3>
        <p
          class='mt-2 text-secondary text-[14px]'
        >
          {description}
        </p>
      </div>

      <div
        class='mt-4 flex flex-wrap gap-2'
      >
        {tags.map((tag) => (
          <p
            key={tag.name}
            class={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>

    </Tilt>
  </motion.div>
)

const Projects = () => {
  return (
    // Why is this just a React fragment and not a specific component? We need a plain React fragment to be used in SectionWrapper
    <>
      <motion.div
        variants={textVariant()}
      >
        <p class={styles.sectionSubText}>
          My work
        </p>
        <h2 class={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>

      <div
        class='w-full flex'
      >
        <motion.p
          variants={fadeIn('', '', .1, 1)}
          class='mt-3, text-secondary, text-[17px] max-w-3xl leading-[30px]'
        >
          This is a paragraph about how my projects showcase my skills and experience through real-world examples of my work.
        </motion.p>
      </div>

      <div
        class='mt-20 flex flex-wrap gap-7'
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

//export default SectionWrapper(Works, '')
export default Projects
*/

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
// import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
// import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => (
  <div class="card bg-dark text-white border-0 rounded-3 shadow-sm">
    <div>
      <img src={image} alt={name} class="card-img-top rounded-top-3" style={{ height: '230px', objectFit: 'cover' }} />
      <div class="top-0 end-0 m-3">
        <div
          onClick={() => window.open(source_code_link, '_blank')}
          class="bg-black text-white d-flex justify-content-center align-items-center rounded-circle"
          style={{ width: '40px', height: '40px', cursor: 'pointer' }}
        >
          <img
              src={github}
              alt='github'
              class='w-100 h-100'
          />
        </div>
      </div>
    </div>

    <div class="card-body">
      <h5 class="fw-bold">{name}</h5>
      <p class="text-secondary">{description}</p>
    </div>

    <div class="card-footer bg-transparent border-0">
      <div class="d-flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag.name} class={`badge ${tag.color}`}>
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  </div>
)

const Projects = () => {
  return (
    <div class="container-fluid">
      <div>
        <p class="text-muted">My work</p>
        <h2 class="fw-bold">Projects</h2>
      </div>

      <div>
        <motion.p class="mt-3 text-secondary fs-5">
          This is a sentence about how my projects showcase my skills and experience through real-world examples of my work.
        </motion.p>
      </div>

      <div class="d-flex row justify-content-center border border-danger">
        {projects.map((project, index) => (
          <div key={`project-${index}`} class="col-md-4">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
