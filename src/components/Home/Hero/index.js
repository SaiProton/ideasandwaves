import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroVideo,
  ContentContainer,
  HeroImageContainer,
  HeroImage,
  SubHeroContent,
  HeroFooter,
  HeroContacts,
  ContactButton
} from './HeroElements'

import { useHistory } from 'react-router-dom'

import { FaAngleDoubleRight } from "react-icons/fa"
import AmpersandLogo from '../../../images/ampersand.svg'
import BackgroundVideo from '../../../videos/WaterCaustics.mp4'

const Hero = ({ refreshRoute }) => {
  const history = useHistory()

  const handleOnClick = () => {
    history.push('/services')
    refreshRoute('/services')
  }

  return (
    <HeroContainer>
      {/* <HeroVideo autoPlay={true} muted={true} loop={true}>
        <source src={BackgroundVideo} type={'video/mp4'} />
      </HeroVideo> */}
      <HeroContent>
        <ContentContainer>
          <HeroImageContainer>
            <HeroImage src={AmpersandLogo} />
          </HeroImageContainer>
          <HeroItems>
            <h1>
              <span style={{ color: "#35BAED" }}>Creative Solutions</span>
              <br />
              <span style={{ color: "#1E6B88" }}>to Complex Problems.</span>
            </h1>
            <p>Web Design, Marketing &#38; Branding <br /> Digital Agency</p>
            <button onClick={handleOnClick}>Our Work&nbsp; <FaAngleDoubleRight /></button>
          </HeroItems>
        </ContentContainer>
      </HeroContent>
      <SubHeroContent>
        <HeroFooter>
          <p>Providing Quality Designs Since 2012</p>
        </HeroFooter>
        <HeroContacts>
          <ContactButton>Contact Us</ContactButton>
        </HeroContacts>
      </SubHeroContent>
    </HeroContainer>
  )
}

export default Hero