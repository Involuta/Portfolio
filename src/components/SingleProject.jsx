import { landscape_pic } from '../assets'
import { Navbar } from '../components'

const SingleProject = ({title, summary, my_role, image}) => {
  return (
    <div>
      <Navbar/>
      <div>
        <h1 className='text-center fw-bold py-5 mt-5 align-items-center'>
          {title}
        </h1>
      </div>
      <div>
        <img 
          src={image} 
          className='vw-100 vh-75 border border-bottom object-fit-scale'
        />
      </div>
      <div className='ml-3 my-5 px-lg-5'>
        <h2 className='mb-3'>
          Summary
        </h2>
        <p>
          {summary}
        </p>
        <h2 className='mb-3'>
          My Role
        </h2>
        <p>
          {my_role}
        </p>
      </div>
    </div>
  )
}

// No SectionWrapper so that the image can stretch across entire screen
export default SingleProject