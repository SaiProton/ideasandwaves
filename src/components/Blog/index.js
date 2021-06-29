import Hero from './Hero'
import InfoSegment from './InfoSegment'

const Blog = ({ toggleContact }) => {
  return(
    <>
      <Hero toggleContact={toggleContact}/>
      <InfoSegment/>
      <InfoSegment/>
      <InfoSegment/>
    </>
  )
}

export default Blog