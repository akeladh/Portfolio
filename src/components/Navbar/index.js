import React from 'react'
import { Nav, NavbarContainer,NavLogo, Img } from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <Img/>
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar