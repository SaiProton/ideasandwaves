import {
  Nav,
  NavContainer,
  NavHeader,
  NavMenu,
  MenuContainer
} from './NavbarElements'

import {
  Menu,
  MenuItem,
  MenuSocialMedia
} from './NavbarConstructions'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import IdeasWavesLogo from '../../images/logo.jpg'
import IdeasWavesLogoMenu from '../../images/logo-menu.svg'

const Navbar = ({ route, refreshRoute }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [shadowOpacity, setShadowOpacity] = useState("rgba(0, 0, 0, 0)")

  const shadowThreshold = 160;
  const maxShadow = 80;

  const menuItemClick = (path) => {
    refreshRoute(path)
    setIsOpen(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', (e) =>
     setShadowOpacity(`rgba(0, 0, 0, ${(Math.min(window.scrollY, shadowThreshold) / shadowThreshold) * maxShadow / 255})`),
     true)
  })

  return(
    <Nav isOpen={isOpen} shadow={shadowOpacity}>
      <NavContainer>
        <Link to={'/'} id={'logo'} onClick={() => menuItemClick('/')}>
          <NavHeader src={isOpen ? IdeasWavesLogoMenu : IdeasWavesLogo} alt={'Logo'}/>
        </Link> 
        <MenuContainer>
          <NavMenu isOpen={isOpen}>
            <MenuItem name={'Services'} isOpen={isOpen} path={'/services'} route={route} onClick={() => menuItemClick('/services')}/>
            {/* <MenuItem name={'Projects'} isOpen={isOpen} path={'/projects'} route={route} onClick={() => menuItemClick('/projects')}/> */}
            <MenuItem name={'Blog'} isOpen={isOpen} path={'/blog'} route={route} onClick={() => menuItemClick('/blog')}/> 
            <MenuItem name={'About'} isOpen={isOpen} path={'/about'} route={route} onClick={() => menuItemClick('/about')}/>
            <MenuSocialMedia isOpen={isOpen}/>
          </NavMenu>
          <Menu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}/>
        </MenuContainer> 
      </NavContainer>
    </Nav>
  )
}

export default Navbar