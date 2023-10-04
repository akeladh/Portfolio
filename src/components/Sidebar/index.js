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
          <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='projects' onClick={toggle}>Projects</SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SideBarContainer>
  )
}

export default Sidebar