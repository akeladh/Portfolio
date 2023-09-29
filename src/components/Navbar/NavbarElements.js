import styled from 'styled-components'
import logo from '../../imgs/Logo_Dark.svg'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {BsFillSunFill} from 'react-icons/bs';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
  background: #4B4755;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index: 10;

  @media screen and (max-width: 1100px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 100px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1250px;
//background-color: green;
`

export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
`

export const Img = styled.img.attrs({
  src: `${logo}`
})`
  height: 60px;
`;

export const MobileIcon = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 35px;
    cursor: pointer;
    color: white;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavItem = styled.li`
  height: 50px;
    margin-right:5px;
    //background-color: purple;
`

export const NavLinks = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-radius: 3px;
  &.active{
        border-bottom: 7px solid #e2e2e2;
    }
    &:hover{
        transition: all 0.1s ease-in-out;
        border-bottom: 7px solid rgba(219,203,237);
    }
`

export const YellowSunIcon = styled(BsFillSunFill)`
  color: #FFD597;
  height: 35px;
  margin-left: 10px;
  width: auto;
`