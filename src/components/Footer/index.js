import {
  FooterContainer,
  FooterLinks,
  FooterLinkWrapper,
  FooterLinkItems,
  SocialMedia,
  SocialMediaWrap,
  FooterLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements'

import {FaFacebook, FaLinkedin, FaTwitter} from "react-icons/all";

const Footer = () => {
  return(
    <FooterContainer>
      <FooterLinks>
        <FooterLinkWrapper>
          <FooterLinkItems>
            <h2>About Us</h2>
            <a href={'/'}>How it works</a>
            <a href={'/'}>Testimonials</a>
            <a href={'/'}>Careers</a>
          </FooterLinkItems>
          <FooterLinkItems>
            <h2>Contact</h2>
            <a href={'/'}>1-519-860-1374</a>
            <a href={'mailto:support@ideaswaves.com'}>Email Us</a>
          </FooterLinkItems>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
          <FooterLinkItems>
            <h2>Info</h2>
            <a href={'/'}>Portfolio</a>
            <a href={'/'}>Referrals</a>
            <a href={'/'}>Terms of Service</a>
          </FooterLinkItems>
        </FooterLinkWrapper>
      </FooterLinks>
      <SocialMedia>
        <SocialMediaWrap>
          <FooterLogo to={'/'}>IDEAS & WAVES</FooterLogo>
          <p>&copy; Ideas & Waves Inc. 2021</p>
          <SocialIcons>
            <SocialIconLink href={'/'}>
              <FaFacebook/>
            </SocialIconLink>
            <SocialIconLink href={'/'}>
              <FaTwitter/>
            </SocialIconLink>
            <SocialIconLink href={'/'}>
              <FaLinkedin/>
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer