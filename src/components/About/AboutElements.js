import styled from "styled-components";
import gBack from '../../imgs/GreenbackGround.png'

export const AboutContainer = styled.div`
height: 750px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${gBack});
  background-size: cover;
`
export const AboutBody = styled.div`
  height: 600px;
  width: 1100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  //background-color: pink;
`
