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
              <FooterLinks to="about">About</FooterLinks>
            </FooterItem>
            <FooterItem>
              <FooterLinks to="projects">Projects</FooterLinks>
            </FooterItem>
            <FooterItem>
              <FooterLinks to="contact">Contact</FooterLinks>
            </FooterItem>
          </FooterMenu>
      </FooterContainer>
    </FooterBar>
  )
}

export default Footer