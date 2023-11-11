import styled from "styled-components";
import gBack from "../../imgs/GreenbackGround.svg";
import aboutPic from "../../imgs/aboutPic.png";

export const AboutContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${gBack});
  background-size: cover;
`;

export const AboutBodyWraper = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 0;
  //background-color: lightslategray;

  @media screen and (max-width: 750px) {
    padding: 50px 0;
  }
`;

export const AboutBody = styled.div`
  height: 500px;
  width: 940px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 0px;
  //background-color: lightpink;

  @media screen and (max-width: 940px) {
    width: 100%;
    height: auto;
    padding: 20px 0;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export const TextBanner = styled.div`
  height: 15%;
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  //background-color: lightcoral;
`;

export const Banner = styled.h1`
  color: #bd8134;
  margin-bottom: 16px;
  font-size: 25px;
  white-space: nowrap;
`;

export const Div = styled.div`
  height: 6px;
  margin-bottom: 14px;
  margin-left: 10px;
  width: 70%;
  background-color: #bd8134;
  border-radius: 10px;
`;

export const Picture = styled.img.attrs({
  src: `${aboutPic}`,
})`
  height: 75%;
  margin-left: 30px;
  padding-right: 10px;

  //background-color: lightyellow;

  @media screen and (max-width: 750px) {
    height: 250px;
  }
`;

export const RightSection = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  //background-color: lightgreen;
`;

export const TextSection = styled.div`
  height: 75%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  //background-color: lightblue;
`;

export const TextDescription = styled.div`
  height: 100%;
  width: 80%;

  //background-color: lavender;
`;

export const Header = styled.h1`
  font-weight: 700;
  font-size: 30px;
  color: #4b4755;

  @media screen and (max-width:750px){
   font-size: 28px;
  }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5em;
  margin-top: 16px;
  color: #4b4755;

  @media screen and (max-width:750px){
   font-size: 16px;
  }
`;

export const TechStackSection = styled.div`
  height: auto;
  width: 100%;
  padding: 0px 60px ;
 
  //background-color: yellow;
`;
export const IconWrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  //background-color: aliceblue;
`;

export const Icon = styled.img`
  height: 60px;
  margin: 5px 10px;
`;
