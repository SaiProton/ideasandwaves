import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroVideo,
} from './HeroComponents'

import { FaAngleDoubleRight } from "react-icons/fa";
import BackgroundVideo from '../../videos/WaterCaustics.mp4'

const Hero = () => {
  return(
    <HeroContainer>
      <HeroVideo autoPlay={true} muted={true} loop={true}>
        <source src={BackgroundVideo} type={'video/mp4'} />
      </HeroVideo>
      <HeroContent>
        <HeroItems>
          <h1>Your <span style={{color: "#35BAED"}}>Ideas</span> come to life.</h1>
          <p>Come see for yourself:</p>
          <button>Our Services&nbsp; <FaAngleDoubleRight/></button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero