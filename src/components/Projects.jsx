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

const ProjectCard = ({ index, project_page_link, title, summary, tags, image, source_code_link }) => (
  <div className="card bg-dark text-white border-0 rounded-3 shadow-sm mb-5">
    <div>
      <img src={image} alt={title} className="card-img-top rounded-top-3" style={{ height: '230px', objectFit: 'cover' }} />
      <div className="m-3 align-items-center">
      </div>
    </div>

    <div className="card-body">
      <h5 className="fw-bold">{title}</h5>
      <div>
        <h6 className='flex-row'>
          {tags.map(tag => `#${tag.name}`).join(', ')}
        </h6>
      </div>
      <p className="text-secondary">{summary}</p>
      <a className='' href={`${project_page_link}`}>
        Go to project page
      </a>
    </div>
  </div>
)

const Projects = () => {
  return (
    <div>
      <div>
        <p className="text-muted">Ryan Bascos</p>
        <h1 className="fw-bold">Projects</h1>
      </div>

      <div>
        <motion.p className="mt-3 text-secondary fs-5">
          This is a sentence about how my projects showcase my skills and experience through real-world examples of my work.
        </motion.p>
      </div>

      <div className="d-flex row justify-content-center">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="col-lg-4">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Projects, '')
