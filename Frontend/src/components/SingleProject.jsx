import { Navbar } from '../components'
import { simple_green_bg } from '../assets'

const SingleProject = ({title, full_summary, my_role, image}) => {
  return (
    <div
    className="bg-secondary"
    style={{
      backgroundImage: `url(${simple_green_bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      minHeight: "100vh", // ensures it fills screen but expands if needed
    }}
    >
      <Navbar/>
      <div>
        <h2 className='display-2 text-white text-center pt-5 pb-3 mt-5 align-items-center'>
          {title}
        </h2>
      </div>
      <div>
        <img 
          src={image} 
          className='vw-100 vh-75 border border-bottom object-fit-scale'
        />
      </div>
      <div className='mx-3 my-5 px-lg-5'>
        <h2 className='mb-3 text-white'>
          Summary
        </h2>
        <p className='lead text-white'>
          {full_summary}
        </p>
        <h2 className='mb-3 text-white'>
          My Role + Skills Used
        </h2>
        <p className='mb-5 pb-5 lead text-white'>
          {my_role}
        </p>
      </div>
    </div>
  )
}

// No SectionWrapper so that the image can stretch across entire screen
export default SingleProject