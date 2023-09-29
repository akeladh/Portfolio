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
`;

export const ContactMethodBody = styled.div`
  height: auto;
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  //background-color: pink;
`;

const ContactMethod = styled.div`
  height: auto;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  //background-color: lightblue;
`;

const ContactMethodHeader = styled.h2`
  font-size: 28px;
  margin-left: 60px;
  margin-bottom: 15px;
  color: #4B4755;
`;

const TextIconWrapper= styled.div`
  display: flex;
  align-items: center;
  
  //background-color: green;

`

const Icon = styled.img`
  width: 48px;
  height: 48px;
  //background-color: red;
`;

const Text = styled.p`
  font-size: 18px;
  color: #666;
  display: inline-block;
  margin-left: 12px;
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
