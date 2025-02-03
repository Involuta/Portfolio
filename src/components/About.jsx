import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <div className='row'>
      <p className='col'>
        Ryan face
      </p>
      <h1 className='col'>
        Developer of things.
      </h1>
    </div>
  )
}

export default SectionWrapper(About, '')