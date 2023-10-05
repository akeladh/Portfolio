import styled from "styled-components";
import logo from "../../imgs/logo/Logo_Dark.png";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const FooterBar = styled.footer`
  background: #88759e;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 768px) {
    transition: 0.5s all ease;
    height: 100px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1250px;
  //background-color: green;
`;

export const FooterLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Img = styled.img.attrs({
  src: `${logo}`,
})`
  height: 80px;

  @media screen and (max-width: 768px) {
    transition: 0.5s all ease;
    height: 60px;
  }
`;

export const FooterMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

export const FooterItem = styled.li`
  height: 50px;
  margin-right: 5px;
  //background-color: purple;
`;

export const FooterLinks = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    transition: color 0.1s ease-in-out;
    color: #4b4755;
  }
`;
