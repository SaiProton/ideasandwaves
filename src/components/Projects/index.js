import Grid from './Grid'
import Hero from './Hero'

const Projects = ({ toggleContact }) => {
  return(
    <>
      <Hero toggleContact={toggleContact}/>
      <Grid/>
    </>
  )
}

export default Projects