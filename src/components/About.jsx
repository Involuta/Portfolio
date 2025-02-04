import { profile_pic } from '../assets'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <div className='d-flex row justify-content-center border border-danger'>
      <div className='col-lg-6 border border-primary align-items-center'>
        <img
          src={profile_pic}
          alt='Image of my face'
          className='d-flex w-50 rounded-circle'
        />
      </div>
      <div className='col-lg-6'>
        <h1 className='d-flex'>
          Embarrassed.
        </h1>
      </div>
    </div>
  )
}

export default SectionWrapper(About, '')