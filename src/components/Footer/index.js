import {
  FooterContainer,
  FooterLinks,
  FooterLinkWrapper,
  SocialMedia,
  SocialMediaWrap,
  FooterLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements'

import {FooterSection} from "./FooterConstructions";

import {FaFacebook, FaLinkedin, FaTwitter} from "react-icons/all";

import { FooterData } from "./FooterData";

const Footer = () => {
  return(
    <FooterContainer>
      <FooterLinks>
        <FooterLinkWrapper>
          <FooterSection data={FooterData.about}/>
          <FooterSection data={FooterData.info}/>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
          <FooterSection data={FooterData.contact}/>
        </FooterLinkWrapper>
      </FooterLinks>
      <SocialMedia>
        <SocialMediaWrap>
          <FooterLogo to={'/'}>IDEAS & WAVES</FooterLogo>
          <p>&copy; Ideas & Waves Inc. 2021</p>
          <SocialIcons>
            <SocialIconLink
              href={'https://www.facebook.com/ideasandwaves'}
              hoverColor={'#4267B2'}
              ariaLabel={'Facebook'}>
              <FaFacebook/>
            </SocialIconLink>
            <SocialIconLink
              href={'https://twitter.com/IdeasandWaves'}
              hoverColor={'#1DA1F2'}
              ariaLabel={'Twitter'}>
              <FaTwitter/>
            </SocialIconLink>
            <SocialIconLink
              href={'http://www.linkedin.com/company/ideas-and-waves/'}
              hoverColor={'#0E76A8'}
              ariaLabel={'LinkedIn'}>
              <FaLinkedin/>
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer