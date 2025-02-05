import { landscape_pic } from '../assets'
import { Navbar } from '../components'

const SingleProject = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <img 
          src={landscape_pic} 
          className='vw-100 vh-100 object-fit-cover'
        />
        <h1 className="position-absolute bottom-0 text-white p-4 bg-dark bg-opacity-50">
          NART: The Petfinder Drone
        </h1>
      </div>
      <div className='m-5 px-lg-5'>
        <h1 className='mb-3'>
          Summary
        </h1>
        <p>
          The user needs to upload their pics to the app. The app sends the pics to the drone's onboard object detection model. The model will send a notification back to the web app when a potential match for the pet is found.
        </p>
      </div>
    </div>
  )
}

// No SectionWrapper so that the image can stretch across entire screen
export default SingleProject