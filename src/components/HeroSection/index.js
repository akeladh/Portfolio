import React from 'react'
import { HeroContainer, HeroBody, ProfilePic, LeftSection, TextSection, TextButtons, Bar, TextDescription, Header, Paragraph, GithubIcon, LinkedInIcon, ResumeButton } from './HeroElements'
import resume from './resume.pdf'

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
          <GithubIcon/>
          <LinkedInIcon/>
          <ResumeButton href={resume}> Resume</ResumeButton>
          </TextButtons>
          
      </LeftSection>
        <ProfilePic/>
      </HeroBody>
    </HeroContainer>
  )
}

export default HeroSection