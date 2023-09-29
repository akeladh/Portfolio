import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import {Link as LinkS} from 'react-scroll'

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #88759E;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: white;
`

export const Icon = styled.div`
  position: absolute;
  top: 2.75rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  background-color: transparent;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;

  @media screen  and (max-width: 480px){
    grid-template-rows: repeat(4, 60px);
  }
`

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: white;
  cursor: pointer;
  
  &:hover{
    background-color: #4B4755;
    transition: 0.2s ease-in-out;
  }
`