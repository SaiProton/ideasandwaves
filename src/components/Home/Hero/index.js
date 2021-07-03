import {
  HeroContainer,
  HeroContent,
  HeroItems,
  ContentContainer,
  HeroImageContainer,
  HeroImage,
} from './HeroElements'

import { SubHero } from '../../simpleConstructions'

import { useHistory } from 'react-router-dom'
import { FaAngleDoubleRight } from "react-icons/fa"
import AmpersandLogo from '../../../images/ampersand.svg'

const Hero = ({ refreshRoute, toggleContact, header1, header2, content, button }) => {
  const history = useHistory()

  const handleOnClick = () => {
    history.push('/services')
    refreshRoute('/services')
  }

  return (
    <HeroContainer>
      <HeroContent>
        <ContentContainer>
          <HeroImageContainer>
            <HeroImage src={AmpersandLogo} />
          </HeroImageContainer>
          <HeroItems>
            <h1>
              <span style={{ color: "#35BAED" }}>{header1}</span>
              <br />
              <span style={{ color: "#1E6B88" }}>{header2}</span>
            </h1>
            <p>{content}</p>
            {button && <button onClick={handleOnClick}>Our Work&nbsp; <FaAngleDoubleRight /></button>}
          </HeroItems>
        </ContentContainer>
      </HeroContent>
      <SubHero toggleContact={toggleContact}/>
    </HeroContainer>
  )
}

export default Hero