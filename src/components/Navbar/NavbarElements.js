import styled from 'styled-components'
import logo from '../../imgs/Logo_Dark.svg'
import {Link as LinkR} from 'react-router-dom'
//import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
  background: #4B4755;
  height: 100px;
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
height: 100px;
z-index: 1;
width: 100%;
background-color: green;
padding: 0 24px;
max-width: 1250px;
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
  height: 50px;
`;
