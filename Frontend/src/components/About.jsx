import { about_me } from '../constants'
import { profile_pic } from '../assets'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <div className='w-100 row'>
      <div className='col-lg-5 d-flex justify-content-center bg-black bg-opacity-50'>
        <img
          src={profile_pic}
          alt='Image of my face'
          className='w-50 rounded-circle'
        />
      </div>
      <div className='col d-flex py-5 bg-black bg-opacity-50'>
        <h1 className='text-lg-start text-center text-white'>
          {about_me[0].title}
        </h1>
      </div>
      <div className='py-lg-5 lead text-lg-start text-center text-white'>
        <p>
          {about_me[0].description}
        </p>
      </div>
    </div>
  )
}

export default SectionWrapper(About, '')