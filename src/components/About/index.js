import React from "react";
import {
  AboutBody,
  AboutContainer,
  Picture,
  RightSection,
  TextDescription,
  TextSection,
  Header,
  Paragraph, TextBanner, Banner, Div, TechStackSection, AboutBodyWraper, IconWrapper, Icon
} from "./AboutElements";

import js from '../../imgs/icons/jsIcon.png'
import html from '../../imgs/icons/HTML5.png'
import css from '../../imgs/icons/cssIcon.png'
import react from '../../imgs/icons/ReactIcon.png'
import node from '../../imgs/icons/Nodejs.png'
import sc from '../../imgs/icons/styledComponentsIcon.png'
import tw from '../../imgs/icons/tailwindIcon.png'
import aws from '../../imgs/icons/AWS.png'

const AboutSection = () => {
  return (
    <AboutContainer>
      <AboutBodyWraper>
        <AboutBody>
        <Picture />
        <RightSection>
          <TextBanner>
            <Banner>About Me</Banner>
            <Div/>
          </TextBanner>
          <TextSection>
            <TextDescription>
              <Header>
                Passionate Full Stack Developer 
                </Header>
                <Header>
                Based in Bay Area, California
              </Header>
              <Paragraph>
                I am a recent software engineering graduate with a keen interest
                in full-stack development, committed to building robust,
                user-centric web applications. Excited to collaborate with
                dynamic teams and apply my skills to solve real-world
                challenges.
              </Paragraph>
            </TextDescription>
          </TextSection>
        </RightSection>
        </AboutBody>
        <TechStackSection>
          <Banner>Tech Stack: </Banner>
          <IconWrapper>
          <Icon src={js} alt="JavaScript Icon" />
          <Icon src={html} alt="HTML Icon" />
          <Icon src={css} alt="CSS Icon" />
          <Icon src={react} alt="React Icon" />
          <Icon src={node} alt="NodeJS Icon" />
          <Icon src={sc} alt="Styled Components Icon" />
          <Icon src={tw} alt="TailWind Icon" />
          <Icon src={aws} alt="AWS Icon" />
          </IconWrapper>
        </TechStackSection>
      </AboutBodyWraper>
    </AboutContainer>
  );
};

export default AboutSection;
