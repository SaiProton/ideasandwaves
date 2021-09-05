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
  background-color: ${props => props.isOpen ? '#35BBEE' : '#ffffff'};
  box-shadow: 0 1px 4px ${props => props.isOpen ? 'rgba(0, 0, 0, 0)' : (props.shadow)};
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

  a#logo {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
  }
`

export const NavHeader = styled.img`
  height: clamp(40%, 7vw, 60%);
  cursor: pointer;
`

export const MenuToggle = styled.div`
  display: block;
  cursor: pointer;
  
  @media screen and (max-width: 900px) {
    display: block;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0 2rem;
  
  ${props => props.isOpen && css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    margin: 0;
    left: 0;
    padding: 0;

    background: #35BBEE;
    /* box-shadow: 0 1px 4px #00000066; */

    width: 100%;
    height: calc(100vh - 80px);
    min-height: 500px;

    position: absolute;

    top: 80px;

    z-index: 999;
  `}

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    margin: 0;
    left: 0;
    padding: 0;

    background: #35BBEE;
    /* box-shadow: 0 1px 4px #00000066; */

    width: 100%;
    height: calc(100vh - 80px);
    min-height: 500px;
    
    position: absolute;

    top: ${props => props.isOpen ? '80px' : '-1000px'};
    opacity: ${props => props.isOpen ? '1' : '0'};

    transition: 0.5s ease-in-out;
    z-index: 999;
  }
`

export const MenuItemContainer = styled.div`
  height: 80px;
  transition: 0.2s ease-in-out;
  margin: 1rem 0;

  &:nth-child(3) {
    display: none;
  }

  &:nth-child(4) {
    display: none;
  }

  ${props => props.isOpen && css`
    width: 100%;

    &:nth-child(3) {
      display: block;
    }

    &:nth-child(4) {
      display: block;
    }
  `}

  @media screen and (max-width: 900px) {
    width: 100%;

    &:nth-child(3) {
      display: block;
    }

    &:nth-child(4) {
      display: block;
    }
  }
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
    color: black;
  `}

  ${props => props.isOpen && css`
    width: 100%;
    justify-content: flex-start;
    color: #00000088;
    font-size: 3rem;
    padding-left: 20rem;

    ${props => props.to === props.route && css`
      color: black;
    `}
  `}
  
  &:hover {
    transition: color 0.1s ease-in-out;
    color: black;
  }
  
  @media screen and (max-width: 900px) {
    width: 100%;
    justify-content: flex-start;
    color: #00000088;
    font-size: 1.5rem;
    padding-left: 2rem;

    ${props => props.to === props.route && css`
      color: black;
    `}
  }
`

export const MenuBar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
  background: #1E6B88;

  border-radius: 100px;

  ${props => props.isOpen && css`
    background: #ffffff;
  `}

  /* &:last-child {
    width: 50%;
    margin-left: 50%;
  } */
`

export const SocialContainer = styled.div`
  display: none;

  ${props => props.isOpen && css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding-right: 2rem;
    height: 80px;
  `}

  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 100%;

    padding-right: 2rem;
    
    height: 80px;
  }
`

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 25%;

  @media screen and (max-width: 900px) {
    justify-content: space-between;
    width: 50%;
  }
`

export const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 2.5rem;

  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
  }
`
