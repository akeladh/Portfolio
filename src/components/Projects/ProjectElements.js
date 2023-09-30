import styled from "styled-components";
import link from '../../imgs/icons/link_alt.svg'

export const ProjectsContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  padding: 65px 0 50px 0;

  //background-color: lavender;
`;

export const ProjectsBody = styled.div`
  height: auto;
  width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;

  background-color: white;
`;

export const Header = styled.h1`
  font-size: 45px;
  color: #4b4755;
  font-weight: 700;
  //margin-bottom: 45px;
`;

export const ProjectBasesBody = styled.div`
  height: auto;
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  //background-color: pink;
`;

const CardWrapper = styled.div`
  height: auto;
  max-width: 100%;
  display: flex;
  align-items: center;
  margin-top: 45px;
  margin-bottom: 100px;

  //background-color: lightcoral;
`;

const ImgSide = styled.img`
  height: 300px;
  width: auto;
  border: 5px;
  border-color: rgba(75,71,85, 0.1);
  border-style: solid;
  border-radius: 30px;
  cursor: pointer;
  //background-color: orange;
`;

const InfoSide = styled.div`
  height: auto; //change to auto
  padding-left: 35px;
  width: 50%;
  //background-color: yellow;
`;

const InfoSideTop = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  //background-color: lightgreen;
`;

const ProjectTitle = styled.h2`
  font-size: 25px;
  font-weight: 700;
  color: #4b4755;
  margin-bottom: 10px;
`;
const ProjectDescript = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5em;
  color: #4b4755;
`;

const InfoSideBottom = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: row;

  //background-color: lightblue;
`;

const BuiltWithSect = styled.div`
  height: 100%;
  width: 50%;
  //background-color: aquamarine;
  padding-left: 20px;
`;

const BuiltwithHeader = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 5px;
  color: #4b4755;
`

const BuiltWithText = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
  padding-left: 10px;
  color: #4b4755;
`;


const LiveDemo = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  //background-color: violet;
`;

const LinkIcon = styled.img.attrs({
  src: `${link}`
})`
  height: 30px;
`;

const DemoLabel = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
  margin-top: 5px;
  padding-left: 10px;
  color: #4b4755;
`;

export const ProjectCardL = ({url,title, description, bw1, bw2, bw3}) => {
  return (
    <CardWrapper>
      <ImgSide src= {url}/>
      <InfoSide>
        <InfoSideTop>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescript>{description}</ProjectDescript>
        </InfoSideTop>
        <InfoSideBottom>
          <BuiltWithSect>
            <BuiltwithHeader>Built with:</BuiltwithHeader>
          <BuiltWithText>{bw1}</BuiltWithText>
          <BuiltWithText>{bw2}</BuiltWithText>
          <BuiltWithText>{bw3}</BuiltWithText>
            </BuiltWithSect>
          <LiveDemo>
            <LinkIcon/>
            <DemoLabel>Demo</DemoLabel>
          </LiveDemo>
        </InfoSideBottom>
      </InfoSide>
    </CardWrapper>
  );
};

export const ProjectCardR = ({url,title, description, bw1, bw2, bw3}) => {
  return (
    <CardWrapper>
      <InfoSide>
        <InfoSideTop>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescript>{description}</ProjectDescript>
        </InfoSideTop>
        <InfoSideBottom>
          <BuiltWithSect>
            <BuiltwithHeader>Built with:</BuiltwithHeader>
          <BuiltWithText>{bw1}</BuiltWithText>
          <BuiltWithText>{bw2}</BuiltWithText>
          <BuiltWithText>{bw3}</BuiltWithText>
            </BuiltWithSect>
          <LiveDemo>
            <LinkIcon/>
            <DemoLabel>Demo</DemoLabel>
          </LiveDemo>
        </InfoSideBottom>
      </InfoSide>
      <ImgSide src={url} />
    </CardWrapper>
  );
};
