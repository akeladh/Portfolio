import styled from "styled-components";
import gBack from '../../imgs/GreenbackGround.png'
import aboutPic from '../../imgs/aboutPic.png'


export const AboutContainer = styled.div`
height: 850px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${gBack});
  background-size: cover;
`

export const AboutBodyWraper = styled.div`
  height: auto;
  width: 940px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: purple;
`

export const AboutBody = styled.div`
  height: 500px;
  width: 940px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 0px;
  //background-color: pink;
`
export const TextBanner = styled.div`
  height: 15%;
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  //background-color: lightpink;
`

export const Banner = styled.h1`
color: #BD8134;
margin-bottom: 16px;
font-size: 25px;
`

export const Div = styled.div`
height: 6px;
margin-bottom: 14px;
margin-left: 10px;
width: 70%;
background-color:#BD8134;
border-radius: 10px;
`

export const Picture = styled.img.attrs({
  src: `${aboutPic}`
})`
  height: 75%;  
  margin-left:30px;
  padding-right: 10px;
`;

export const RightSection = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  //background-color: lavender;
`

export const TextSection = styled.div`
  height: 75%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  //background-color: lightseagreen;
`

export const TextDescription = styled.div`
  height: 100%;
  width: 80%;
//background-color: lightcoral;
`

export const Header = styled.h1`
  font-weight: 700;
  font-size: 30px;
  color:#4B4755;
`

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5em;
  margin-top: 16px;
  color:#4B4755;
`



export const TechStackSection = styled.div`
  height: auto;
  width:100%;
  padding-left: 60px;
   //background-color: yellow;
`
export const IconWrapper = styled.div`
height: 60px;
width: 100%;
display: flex;
justify-content: space-between;
//background-color: aliceblue;
`

export const Icon = styled.img`
  height: 60px;
`;
