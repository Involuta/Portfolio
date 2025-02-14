import { about_me } from '../constants'
import { profile_pic } from '../assets'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <div className='w-100 row border-left border-right border-top'>
      <div className='col-lg-5 d-flex justify-content-center border-bottom bg-black bg-opacity-75'>
        <img
          src={profile_pic}
          alt='Image of my face'
          className='w-50 rounded-circle'
        />
      </div>
      <div className='col d-flex py-5 bg-black border-bottom bg-opacity-75'>
        <h1 className='text-lg-start text-center text-white'>
          {about_me[0].title}
        </h1>
      </div>
      <div className='py-lg-5 lead text-lg-start text-center text-white bg-black bg-opacity-75 border-bottom'>
        <p>
          {about_me[0].description}
        </p>
      </div>
    </div>
  )
}

export default SectionWrapper(About, '')