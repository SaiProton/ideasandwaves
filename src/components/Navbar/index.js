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

const Navbar = ({ route, refreshRoute }) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItemClick = (path) => {
    refreshRoute(path)
    setIsOpen(!isOpen)
  }

  return(
    <Nav>
      <NavContainer>
        <NavHeader src={IdeasWavesLogo} alt={'Logo'}/>
        <Menu onClick={() => setIsOpen(!isOpen)}/>
        <NavMenu isOpen={isOpen}>
          <MenuItem name={'Home'} path={'/'} route={route} onClick={() => menuItemClick('/')}/>
          <MenuItem name={'Services'} path={'/services'} route={route} onClick={() => menuItemClick('/services')}/>
          <MenuItem name={'Market'} path={'/market'} route={route} onClick={() => menuItemClick('/market')}/>
        </NavMenu>
      </NavContainer>
    </Nav>
  )
}

export default Navbar