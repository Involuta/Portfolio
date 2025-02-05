import { landscape_pic } from '../assets'
import { Navbar } from '../components'

const SingleProject = ({title, summary}) => {
  return (
    <div>
      <Navbar/>
      <div>
        <img 
          src={landscape_pic} 
          className='vw-100 vh-100 object-fit-cover'
        />
        <h1 className="position-absolute bottom-0 text-white p-4 bg-dark bg-opacity-50">
          {title}
        </h1>
      </div>
      <div className='m-5 px-lg-5'>
        <h1 className='mb-3'>
          Summary
        </h1>
        <p>
          {summary}
        </p>
      </div>
    </div>
  )
}

// No SectionWrapper so that the image can stretch across entire screen
export default SingleProject