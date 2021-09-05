import {
  HeroContainer,
  LeftContainer,
  HeaderContainer,
  RightContainer,
  HeaderContent,
  ContactContainer,
  SocialMedia,
  SocialIconLink
} from './HeroElements'

import { InfoChip } from './HeroConstructions'
import { BlueButton } from '../../simpleComponents'

import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/all'

import AmpersandLogo from '../../../images/ampersand.svg'

const Hero = ({ toggleContact }) => {
  return(
    <HeroContainer>
      <LeftContainer>
        <HeaderContainer>
          <img src={AmpersandLogo} alt={'logo'}/>
          <HeaderContent>
            <h1>Blog. News.</h1>
            <h1>Insights. FAQs.</h1>
            <h2>Come and Get to Know Us</h2>
            <h3>Providing Quality Designs since 2012</h3>
            <ContactContainer>
              <BlueButton onClick={toggleContact}>Contact Us</BlueButton>
              <SocialMedia>
                <SocialIconLink
                  href={'https://twitter.com/IdeasandWaves'}
                  hoverColor={'#1DA1F2'}
                  ariaLabel={'Twitter'}>
                  <FaTwitter/>
                </SocialIconLink>
                <SocialIconLink
                  href={'/'}
                  hoverColor={'#C13584'}
                  ariaLabel={'Instagram'}>
                  <FaInstagram/>
                </SocialIconLink>
                <SocialIconLink
                  href={'https://www.facebook.com/ideasandwaves'}
                  hoverColor={'#4267B2'}
                  ariaLabel={'Facebook'}>
                  <FaFacebook/>
                </SocialIconLink>
                <SocialIconLink
                  href={'http://www.linkedin.com/company/ideas-and-waves/'}
                  hoverColor={'#0E76A8'}
                  ariaLabel={'LinkedIn'}>
                  <FaLinkedin/>
                </SocialIconLink>
              </SocialMedia>
            </ContactContainer>
          </HeaderContent>
        </HeaderContainer>
      </LeftContainer>
      <RightContainer>
        <InfoChip
          title={'NEWS'}
          headline={'Headline'}
          author={'Author'}
          src={''}
          color={'#2F1E88'}/>
        <InfoChip
          title={'FAQ'}
          headline={'Headline'}
          author={'Author'}
          src={''}
          color={'#2FAB2F'}/>
        <InfoChip
          title={'OUR WORK'}
          headline={'Headline'}
          author={'Author'}
          src={''}
          color='#D96060'/>
      </RightContainer>
    </HeroContainer>
  )
}

export default Hero