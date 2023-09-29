import styled from "styled-components";
import pp from '../../imgs/ProfilePic.png'
import bar from '../../imgs/GoldBar.png'
import github from '../../imgs/github.svg'
import linkedin from '../../imgs/linkedin.svg'

export const HeroContainer = styled.div`
  height: 800px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: #A5C2AA;
`
export const HeroBody = styled.div`
  height: 600px;
  width: 1100px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const ProfilePic = styled.img.attrs({
  src: `${pp}`
})`
  height: 70%;  
`;

export const LeftSection = styled.div`
  height: 65%;
  width: 100%;
  //background-color: lavender;
`

export const TextSection = styled.div`
  height: 75%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-top: 10px;
  //background-color: lightseagreen;
`

export const Bar = styled.img.attrs({
  src: `${bar}`
})`
  height: 100%;  
  margin-right:30px;
`;

export const TextDescription = styled.div`
  height: 90%;
  width: 75%;
  padding: 5px 40px 0px;
  //background-color: lightcoral;
`

export const Header = styled.h1`
  font-weight: 700;
  font-size: 38px;
  margin-bottom: 15px;
  color:#4B4755;
`

export const Paragraph = styled.p`
  font-weight: 500;
  font-size: 19px;
  margin-bottom: 10px;
  color:#4B4755;
`

export const TextButtons = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-left: 40px;
  //background-color: lightpink;
`


export const GithubIcon = styled.img.attrs({
  src: `${github}`
})`
  height: 42px;
  cursor: pointer;
`
export const LinkedInIcon = styled.img.attrs({
  src: `${linkedin}`
})`
height: 42px;
margin: 0 45px;
cursor: pointer;
`

export const ResumeButton = styled.button`
  height: 40px;
  width: 112px;
  border:none;
  border-radius: 20px;
  font-weight: 700;
  background-color: #A5C2AA;
  color:white;
  font-size: 16px;
  cursor: pointer;
`