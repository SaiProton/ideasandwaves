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
        <Menu onClick={toggle}/>
        <NavMenu isOpen={isOpen}>
          <MenuItem name={'Home'}/>
          <MenuItem name={'Services'}/>
          <MenuItem name={'Market'}/>
        </NavMenu>
      </NavContainer>
    </Nav>
  )
}

export default Navbar