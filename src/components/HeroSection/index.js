import React from 'react'
import { HeroContainer, HeroBody, ProfilePic, LeftSection, TextSection, TextButtons, Bar, TextDescription, Header, Paragraph, GithubIcon, LinkedInIcon, ResumeButton } from './HeroElements'


const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBody> 
      <LeftSection>
        <TextSection>
          <Bar/>
          <TextDescription>
              <Header>Full-Stack Software Engineer </Header>
              <Paragraph>Hello my name is Akela D. </Paragraph>
              <Paragraph>Energetic recent graduate with a keen interest in full-stack development</Paragraph>
              <Paragraph>Based in Bay Area, California 🌱</Paragraph>
            </TextDescription>
          </TextSection>
        <TextButtons>
          <a href="https://github.com/akeladh" target="_blank" rel="noopener noreferrer">
          <GithubIcon/> </a>
          <a href="https://www.linkedin.com/in/akeladoho" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon/>
          </a>
          <ResumeButton href="https://github.com/akeladh/Portfolio/blob/4e62924792e59d55d403d79b762a6c983de8556d/src/Akela_Do-Ho_%20FS_Resume.pdf" target="_blank"> Resume</ResumeButton>
          </TextButtons>
          
      </LeftSection>
        <ProfilePic/>
      </HeroBody>
    </HeroContainer>
  )
}

export default HeroSection