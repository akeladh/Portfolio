import React from 'react'
import { FooterBar, FooterContainer, FooterLogo, FooterMenu, Img, FooterItem, FooterLinks } from './FooterElements'

const Footer = () => {
  return (
    <FooterBar>
      <FooterContainer>
        <FooterLogo>
          <Img/>
          </FooterLogo>
          <FooterMenu>
          <FooterItem>
              <FooterLinks to="about"  smooth={true} duration={500} spy={true} offset={-175}>About</FooterLinks>
            </FooterItem>
            <FooterItem>
              <FooterLinks to="projects"  smooth={true} duration={500} spy={true} offset={-75}>Projects</FooterLinks>
            </FooterItem>
            <FooterItem>
              <FooterLinks to="contact"  smooth={true} duration={500} spy={true} offset={-150}>Contact</FooterLinks>
            </FooterItem>
          </FooterMenu>
      </FooterContainer>
    </FooterBar>
  )
}

export default Footer