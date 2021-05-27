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

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return(
    <Nav>
      <NavContainer>
        <NavHeader src={IdeasWavesLogo} alt={'Logo'}/>
        <Menu onClick={toggle}/>
        <NavMenu isOpen={isOpen}>
          <MenuItem name={'Home'} path={'/'} route={route} onClick={() => { refreshRoute('/'); toggle() }}/>
          <MenuItem name={'Services'} path={'/services'} route={route} onClick={() => { refreshRoute('/services'); toggle() }}/>
          <MenuItem name={'Market'} path={'/market'} route={route} onClick={() => { refreshRoute('/market'); toggle() }}/>
        </NavMenu>
      </NavContainer>
    </Nav>
  )
}

export default Navbar