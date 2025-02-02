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
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    >
      <div
        className='relative w-full h-[230px]'
      >
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, '_blank')}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='github'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div
        className='mt-5'
      >
        <h3
          className='text-white font-bold text-[24px]'
        >
          {name}
        </h3>
        <p
          className='mt-2 text-secondary text-[14px]'
        >
          {description}
        </p>
      </div>

      <div
        className='mt-4 flex flex-wrap gap-2'
      >
        {tags.map((tag) => (
          <p
            key={tag.name}
            className={`text-[14px] ${tag.color}`}
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
        <p className={styles.sectionSubText}>
          My work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>

      <div
        className='w-full flex'
      >
        <motion.p
          variants={fadeIn('', '', .1, 1)}
          className='mt-3, text-secondary, text-[17px] max-w-3xl leading-[30px]'
        >
          This is a paragraph about how my projects showcase my skills and experience through real-world examples of my work.
        </motion.p>
      </div>

      <div
        className='mt-20 flex flex-wrap gap-7'
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
// import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
// import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => (
  <motion.div>
    <div className="card bg-dark text-white border-0 rounded-3 shadow-sm" style={{ width: '22rem' }}>
      <div className="position-relative">
        <img src={image} alt={name} className="card-img-top rounded-top-3" style={{ height: '230px', objectFit: 'cover' }} />
        <div className="position-absolute top-0 end-0 m-3">
          <div
            onClick={() => window.open(source_code_link, '_blank')}
            className="bg-black text-white d-flex justify-content-center align-items-center rounded-circle"
            style={{ width: '40px', height: '40px', cursor: 'pointer' }}
          >
            <img src={github} alt="github" style={{ width: '50%', height: '50%' }} />
          </div>
        </div>
      </div>

      <div className="card-body">
        <h5 className="fw-bold">{name}</h5>
        <p className="text-secondary">{description}</p>
      </div>

      <div className="card-footer bg-transparent border-0">
        <div className="d-flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag.name} className={`badge ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
)

const Projects = () => {
  return (
    <>
      <motion.div>
        <p className="text-muted">My work</p>
        <h2 className="fw-bold">Projects</h2>
      </motion.div>

      <div className="container">
        <motion.p className="mt-3 text-secondary fs-5">
          This is a paragraph about how my projects showcase my skills and experience through real-world examples of my work.
        </motion.p>
      </div>
    </>
  )
}

/*
<div className="row mt-5">
  {projects.map((project, index) => (
    <div key={`project-${index}`} className="col-lg-4 col-md-6 mb-4">
      <ProjectCard index={index} {...project} />
    </div>
  ))}
</div>
*/
export default Projects
