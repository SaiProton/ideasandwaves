import {
  Nav,
  NavContainer,
  NavHeader,
  NavMenu,
} from './NavbarElements'

import {
  Menu,
  MenuItem,
} from './NavbarConstructions'

import { useState, useEffect } from 'react'

import IdeasWavesLogo from '../../images/ideaswaveslogo.svg'

const Navbar = ({ route, refreshRoute }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [shadowOpacity, setShadowOpacity] = useState("rgba(0, 0, 0, 0)")

  const shadowThreshold = 160;
  const maxShadow = 80;

  const menuItemClick = (path) => {
    refreshRoute(path)
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    window.addEventListener('scroll', (e) =>
     setShadowOpacity(`rgba(0, 0, 0, ${(Math.min(window.scrollY, shadowThreshold) / shadowThreshold) * maxShadow / 255})`),
     true)
  })

  return(
    <Nav shadow={shadowOpacity}>
      <NavContainer>
        <NavHeader src={IdeasWavesLogo} alt={'Logo'}/>
        <Menu onClick={() => setIsOpen(!isOpen)}/>
        <NavMenu isOpen={isOpen}>
          <MenuItem name={'Home'} path={'/'} route={route} onClick={() => menuItemClick('/')}/>
          <MenuItem name={'Services'} path={'/services'} route={route} onClick={() => menuItemClick('/services')}/>
          <MenuItem name={'Projects'} path={'/projects'} route={route} onClick={() => menuItemClick('/projects')}/>
          <MenuItem name={'Blog'} path={'/blog'} route={route} onClick={() => menuItemClick('/blog')}/> 
        </NavMenu>
      </NavContainer>
    </Nav>
  )
}

export default Navbar