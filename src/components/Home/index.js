import Hero from "./Hero"
import InfoCard from "./InfoCard"
import Services from './Services'

import Who from '../../images/home/who.svg'
import What from '../../images/home/what.svg'

import Projects from "./Projects"

const Home = ({ refreshRoute, toggleContact }) => {
  return(
    <>
      <Hero 
        refreshRoute={refreshRoute} 
        toggleContact={toggleContact}
        header1={'Creative Solutions'}
        header2={'to Complex Problems'}
        content={<>Web Design, Marketing &#38; Branding <br /> Digital Agency</>}
        button={true}/>

      <Services/>

      <InfoCard 
        header="WHO" 
        text="We are Ideas and Waves. An ambitious Digital Design and Marketing Agency that empower businesses in Toronto and beyond by building their digital footprint. Based in Toronto we specialize in web design, branding and marketing, and digital design. With our help, small businesses are able to have a viable and affordable ally in the digital design and development space."
        tagline='Tagline'
        img={Who}
        />
        
      <InfoCard 
        header="WHAT" 
        text="We are digitally, technically, and creatively skilled with experience in bringing other brands to life. Our team here at Ideas and Waves is dedicated to developing and enhancing a brand's online presence through the creation of a professional website, social media marketing, brand creation and all other design needs. Our services are a one stop shop for any business, new or old that is ready to begin, resume, or expand themselves online."
        tagline='Digital Solutions'
        img={What}
        />

      <Projects/>
    </>
  )
}

export default Home