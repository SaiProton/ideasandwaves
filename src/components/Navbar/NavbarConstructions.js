import {MenuItemContainer, MenuItemLink, MenuBar, MenuToggle} from "./NavbarElements";

export const MenuItem = ({ name, path, route, onClick }) => {
  return(
    <MenuItemContainer path={path} route={route}>
      <MenuItemLink to={path} route={route} onClick={onClick}>{name}</MenuItemLink>
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