import React from 'react'
import { SideBarContainer, Icon,CloseIcon,SidebarWrapper,SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
        <SidebarLink to='hero' onClick={toggle} smooth={true} duration={500} spy={true} offset={-125}>Home</SidebarLink>
          <SidebarLink to='about' onClick={toggle} smooth={true} duration={500} spy={true} offset={-175}>About</SidebarLink>
          <SidebarLink to='projects' onClick={toggle} smooth={true} duration={500} spy={true} offset={-75}>Projects</SidebarLink>
          <SidebarLink to='contact' onClick={toggle} smooth={true} duration={500} spy={true} offset={-155}>Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SideBarContainer>
  )
}

export default Sidebar