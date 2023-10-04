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
              <NavLinks to="about" smooth={true} duration={500} spy={true} offset={-175}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" smooth={true} duration={500} spy={true} offset={-75}>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" smooth={true} duration={500} spy={true} offset={-150}>Contact</NavLinks>
            </NavItem>
            <YellowSunIcon/>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar