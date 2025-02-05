import { landscape_pic } from '../assets'
import { Navbar } from '../components'

const SingleProject = () => {
  return (
    <div className='flex-column vw-100 d-flex justify-content-center border border-primary'>
      <Navbar/>
      <img src={landscape_pic} className=''/>
      <div className='m-5 px-lg-5'>
        <h1 className='mb-3'>
          NART: The Petfinder Drone and Web App
        </h1>
        <p>
          Hi! This right here is my project. I'm describing it now!
        </p>
      </div>
    </div>
  )
}

// No SectionWrapper so that the image can stretch across entire screen
export default SingleProject