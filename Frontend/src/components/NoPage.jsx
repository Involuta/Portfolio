import { SectionWrapper } from '../hoc'

const NoPage = () => {
  return (
    <h1>
      Error: page not found
    </h1>
  )
}

export default SectionWrapper(NoPage, '')