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
  const [route, setRoute] = useState('/' + window.location.href.split('/')[3])

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const refreshRoute = (path) => {
    setRoute(path)
  }

  return(
    <Nav>
      <NavContainer>
        <NavHeader src={IdeasWavesLogo} alt={'Logo'}/>
        <Menu onClick={toggle}/>
        <NavMenu isOpen={isOpen}>
          <MenuItem name={'Home'} path={'/'} route={route} onClick={() => refreshRoute('/')}/>
          <MenuItem name={'Services'} path={'/services'} route={route} onClick={() => refreshRoute('/services')}/>
          <MenuItem name={'Market'} path={'/market'} route={route} onClick={() => refreshRoute('/market')}/>
        </NavMenu>
      </NavContainer>
    </Nav>
  )
}

export default Navbar