import { profile_pic } from '../assets'
import { SectionWrapper } from '../hoc'
import 'bootstrap/dist/css/bootstrap.min.css'

const About = () => {
  return (
    <div className='w-100 flex-grow-1 row'>
      <div className='col-lg-6 d-flex justify-content-center'>
        <img
          src={profile_pic}
          alt='Image of my face'
          className='w-50 rounded-circle'
        />
      </div>
      <div className='col-lg-6 d-flex py-5'>
        <h1 className='w-100 text-lg-start text-center'>
          Hi, I'm Ryan. I'm passionate about Web Dev, AI, and Game Dev.
        </h1>
      </div>
    </div>
  )
}

export default SectionWrapper(About, '')