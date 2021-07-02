import {
  BannerContainer,
  ContentContainer,
  ContentSection,
  ContentFooter,
} from './HeroElements'

import { Link } from 'react-router-dom'
import { BlueButton } from '../../simpleComponents'

const Hero = ({ data, toggle }) => {
  return(
    <>
      <BannerContainer img={data.img}>
        {data.title}
      </BannerContainer>
      <ContentContainer>
        <ContentSection>
          <h2>{data.header1}</h2>
          <p>{data.paragraph1}</p>
          <hr/>
          <p>{data.paragraph2}</p>
          <BlueButton onClick={toggle}>Contact Us</BlueButton>
        </ContentSection>
        <ContentSection>
          <h2>{data.header2}</h2>
          <p>{data.paragraph3}</p>
        </ContentSection>
        <ContentFooter>
          <p>Still got questions? Check out our <Link to={'/blog'}>Blog</Link></p>
        </ContentFooter>
      </ContentContainer>
    </>
  )
}

export default Hero