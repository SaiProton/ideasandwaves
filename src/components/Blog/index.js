import Hero from './Hero'
import InfoSegment from './InfoSegment'
import { InfoData } from './InfoSegment/InfoData'

const Blog = ({ toggleContact }) => {
  return(
    <>
      <Hero toggleContact={toggleContact}/>

      { Object.keys(InfoData).map(key => {
        return <InfoSegment data={InfoData[key]}/>
      })}
      
    </>
  )
}

export default Blog