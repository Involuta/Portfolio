import { profile_pic } from '../assets'
import { SectionWrapper } from '../hoc'

const SingleProject = () => {
  return (
    <div className='vw-100'>
      <img src={profile_pic}/>
    </div>
  )
}

export default SectionWrapper(SingleProject, '')