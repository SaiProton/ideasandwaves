import {
  MenuItemContainer,
  MenuItemLink, 
  MenuBar, 
  MenuToggle,
  SocialContainer,
  SocialWrapper,
  SocialIcon
} from "./NavbarElements";

import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin
} from 'react-icons/all'

export const MenuItem = ({ name, path, route, onClick }) => {
  return(
    <MenuItemContainer path={path} route={route}>
      <MenuItemLink to={path} route={route} onClick={onClick}>{name}</MenuItemLink>
    </MenuItemContainer>
  )
}

export const Menu = ({ onClick }) => {
  return(
    <MenuToggle onClick={onClick}>
      <MenuBar/>
      <MenuBar/>
      <MenuBar/>
    </MenuToggle>
  )
}

export const MenuSocialMedia = () => {
  return(
    <SocialContainer>
      <SocialWrapper>
        <SocialIcon href={'https://twitter.com/IdeasandWaves'}>
          <FaTwitter/>
        </SocialIcon>

        <SocialIcon href={'/'}>
          <FaInstagram/>
        </SocialIcon>

        <SocialIcon href={'https://www.facebook.com/ideasandwaves'}>
          <FaFacebook/>
        </SocialIcon>

        <SocialIcon href={'http://www.linkedin.com/company/ideas-and-waves/'}>
          <FaLinkedin/>
        </SocialIcon>
      </SocialWrapper>
    </SocialContainer>
  )
}