import {
  Nav,
  NavContainer,
  NavHeader,
  MenuToggle,
  NavMenu,
  MenuItemContainer,
  MenuItem,
  MenuIcon
} from './NavbarComponents'

import { useState } from 'react'

import IdeasWavesLogo from '../../images/logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return(
    <Nav>
      <NavContainer>
        <NavHeader src={IdeasWavesLogo} alt={'Logo'}/>
        <MenuToggle onClick={toggle}>
          <MenuIcon/>
        </MenuToggle>
        <NavMenu isOpen={isOpen}>
          <MenuItemContainer>
            <MenuItem>Home</MenuItem>
          </MenuItemContainer>
          <MenuItemContainer>
            <MenuItem>Services</MenuItem>
          </MenuItemContainer>
          <MenuItemContainer>
            <MenuItem>Market</MenuItem>
          </MenuItemContainer>
        </NavMenu>
      </NavContainer>
    </Nav>
  )
}

export default Navbar