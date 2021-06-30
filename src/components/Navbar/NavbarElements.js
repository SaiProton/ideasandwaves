import styled, {css} from "styled-components"
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px ${props => (props.shadow)};
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 25px;
`

export const NavHeader = styled.img`
  height: clamp(40%, 7vw, 60%);
  cursor: pointer;
`

export const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  
  @media screen and (max-width: 900px) {
    display: block;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  
  @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: auto;
    margin: 0;
    left: 0;
    padding: 0;
    background: lightblue;
    box-shadow: 0 1px 4px #00000066;
    width: 100%;
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? '80px' : '-1000px')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transition: 0.5s ease-in-out;
    z-index: 999;
  }
`

export const MenuItemContainer = styled.div`
  height: 80px;
  transition: 0.2s ease-in-out;
  margin: 1rem 0;
  
  ${props => props.path === props.route && css`
    background: #667db6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  `}
`

export const MenuItemLink = styled(Link)`
  color: #1E6B88;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  text-decoration: none;
  height: 100%;
  transition: color 0.2s ease-in-out;
  
  ${props => props.to === props.route && css`
    color: white;
  `}
  
  &:hover {
    transition: color 0.1s ease-in-out;
    color: ${props => props.to === props.route && 'aquamarine' || 'black'};;
  }
  
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

export const MenuBar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
  background: black;
`

