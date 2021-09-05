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
  FaLinkedin,
} from 'react-icons/all'

export const MenuItem = ({ name, isOpen, path, route, onClick }) => {
  return(
    <MenuItemContainer path={path} isOpen={isOpen} route={route}>
      <MenuItemLink to={path} route={route} isOpen={isOpen} onClick={onClick}>{name}</MenuItemLink>
    </MenuItemContainer>
  )
}

export const Menu = ({ onClick, isOpen }) => {
  return(
    <MenuToggle onClick={onClick}>
      <MenuBar isOpen={isOpen}/>
      <MenuBar isOpen={isOpen}/>
      <MenuBar isOpen={isOpen}/>
    </MenuToggle>
  )
}

export const MenuSocialMedia = ({ isOpen }) => {
  return(
    <SocialContainer isOpen={isOpen}>
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