import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
// import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
// import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, project_page_link, title, summary, tags, image, source_code_link }) => (
  <div className="card bg-primary text-white border-0 rounded-3 shadow-sm mb-5">
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
      <p className="text-white">{summary}</p>
        <a className='text-white' href={`${project_page_link}`}>
          Go to project page
        </a>
    </div>
  </div>
)

const Projects = () => {
  return (
    <div>
      <div>
        <p className="text-white">Ryan Bascos</p>
        <h1 className="fw-bold text-white">Projects</h1>
      </div>

      <div>
        <motion.p className="mt-3 lead text-white fs-5">
          My projects showcase my software skills, experience, and interests.
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
