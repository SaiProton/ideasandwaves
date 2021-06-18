import Hero from "./Hero"
import InfoCard from "./InfoCard"

import WindmillBG from '../../images/windmills.png'
import TechBG from '../../images/techbg.png'
import Projects from "./Projects"

const Home = ({ refreshRoute, toggleContact }) => {
  return(
    <>
      <Hero refreshRoute={refreshRoute} toggleContact={toggleContact}/>
      <InfoCard 
        header="Who we are" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        img={WindmillBG}
        />
        
      <InfoCard 
        header="What we do" 
        text="Morbi placerat libero et ante lobortis, nec pretium leo imperdiet. Cras eu nibh rhoncus mauris sagittis finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus non mattis arcu, in sollicitudin massa. Cras tincidunt nunc sodales, cursus tortor et, accumsan magna. Vestibulum id lobortis nunc, ac gravida libero. Duis varius nunc dapibus efficitur pellentesque. Vestibulum et sapien non sem porta auctor. Vivamus condimentum turpis vel tempus condimentum. Phasellus consequat lacus sit amet urna fringilla, eget fermentum libero tincidunt."
        img={TechBG}
        />

      <Projects/>
    </>
  )
}

export default Home