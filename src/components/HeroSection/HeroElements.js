import styled from "styled-components";
import pp from '../../imgs/ProfilePic.png'
import bar from '../../imgs/GoldBar.png'
import github from '../../imgs/icons/github.svg'
import linkedin from '../../imgs/icons/linkedin.svg'

export const HeroContainer = styled.div`
  height: 800px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 75px;
`
export const HeroBody = styled.div`
  height: auto;
  max-width: 1100px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  //background-color: pink;

  @media screen and (max-width:750px){
   flex-direction: column-reverse;
   height: auto;
  }
`

export const ProfilePic = styled.img.attrs({
  src: `${pp}`
})`
  height: 380px;  
  //background-color: orange;

  @media screen and (max-width: 1100px) and (min-width:850px){
   height: 350px;
  }

  @media screen and (max-width:850px){
   height: 320px;
  }
`;

export const LeftSection = styled.div`
  height: 65%;
  width: 100%;
  //background-color: lightyellow;
`

export const TextSection = styled.div`
  height: 75%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-top: 10px;
  //background-color: lightgreen;

  @media screen and (max-width:750px){
   justify-content: center;
  }
`

export const Bar = styled.img.attrs({
  src: `${bar}`
})`
  height: 275px;  
  margin-right:30px;
  //background-color: lightblue;
`;

export const TextDescription = styled.div`
  height: 90%;
  width: 75%;
  padding: 5px 40px 0px;
  //background-color: lavender;
`

export const Header = styled.h1`
  font-weight: 700;
  font-size: 38px;
  margin-bottom: 15px;
  color: #4B4755;

  @media screen and (max-width: 1100px) and (min-width:850px){
   font-size: 36px;
  }

  @media screen and (max-width:850px){
   font-size: 34px;
  }
`

export const Paragraph = styled.p`
  font-weight: 500;
  font-size: 19px;
  margin-bottom: 10px;
  color:#4B4755;

  @media screen and (max-width: 1100px) and (min-width:850px){
   font-size: 18px;
  }

  @media screen and (max-width:850px){
   font-size: 16px;
  }
 
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

  @media screen and (max-width:750px){
   padding-left: 0;
  }
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

export const ResumeButton = styled.a`
  height: 40px;
  width: 112px;
  border: none;
  border-radius: 20px;
  font-weight: 700;
  background-color: #A5C2AA;
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover{
    background-color: #88759E;
    }
`;