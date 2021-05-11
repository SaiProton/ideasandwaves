import {MenuItemContainer, MenuItemLink, MenuBar, MenuToggle} from "./NavbarElements";

export const MenuItem = ({ name }) => {
  return(
    <MenuItemContainer>
      <MenuItemLink to={'/'}>{name}</MenuItemLink>
    </MenuItemContainer>
  )
}

export const Menu = ({ onClick }) => {
  return(
    <MenuToggle onClick={onClick}>
      <MenuBar/>
      <MenuBar/>
      <MenuBar/>
    </MenuToggle>
  )
}