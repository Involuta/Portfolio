import { profile_pic } from '../assets'
import { Navbar } from '../components'

const SingleProject = () => {
  return (
    <div className='vw-100 d-flex justify-content-center border border-primary'>
      <Navbar/>
      <img src={profile_pic} className=''/>
    </div>
  )
}

// No SectionWrapper so that the image can stretch across entire screen
export default SingleProject