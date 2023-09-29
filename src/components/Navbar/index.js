import React from 'react'
import { Nav, NavbarContainer,NavLogo, Img, MobileIcon,NavMenu,NavItem, NavLinks, YellowSunIcon } from './NavbarElements'



const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <Img/>
          </NavLogo>
          <MobileIcon onClick={toggle}/>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
            <YellowSunIcon/>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar