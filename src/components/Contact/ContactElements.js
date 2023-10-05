import styled from "styled-components";
import pBack from "../../imgs/PurpleBackground.svg";

export const ContactContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${pBack});
  background-size: cover;
  padding: 100px 0;

  @media screen and (max-width:850px){
    padding: 50px 0;
  }
`;

export const ContactBody = styled.div`
  height: auto;
  width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;

  //background-color: white;
`;

export const Header = styled.h1`
  font-size: 45px;
  color: #4b4755;
  font-weight: 700;
  margin-bottom: 25px;

  @media screen and (max-width: 850px){
    font-size: 40px;
  }
`;

export const ContactMethodBody = styled.div`
  height: auto;
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;
  

  //background-color: pink;

  @media screen and (max-width:725px){
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ContactMethod = styled.div`
  height: auto;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 75px;

  //background-color: lightblue;
  @media screen and (max-width:850px){
    margin-bottom: 25px;
    width:100%;
  }
`;

const ContactMethodHeader = styled.h2`
  font-size: 28px;
  margin-left: 60px;
  margin-bottom: 15px;
  color: #4B4755;

  @media screen and (max-width:850px){
    font-size: 24px;
    margin-bottom: 5px;
  }
`;

const TextIconWrapper= styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  
  //background-color: green;

`

const Icon = styled.img`
  width: 48px;
  height: 48px;
  //background-color: red;
`;

const Text = styled.p`
  font-size: 18px;
  display: inline-block;
  color: #666;
  margin-left: 12px;
  word-wrap: break-word;

  //ackground-color: purple;
  @media screen and (max-width:850px){
    font-size: 15px;
  }
`;

export const InfoCard = ({ headerText, iconSrc, contentText }) => {
  return (
    <ContactMethod>
      <ContactMethodHeader>{headerText}</ContactMethodHeader>
      <TextIconWrapper>
      <Icon src={iconSrc} alt={headerText} />
      <Text>{contentText}</Text>
      </TextIconWrapper>
    </ContactMethod>
  );
};
