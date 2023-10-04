import React from 'react'
import { Header, ProjectsBody, ProjectsContainer, ProjectBasesBody, ProjectCardR, ProjectCardL } from './ProjectElements'

import dlr from '../../imgs/dlr.png'
import bnbT from '../../imgs/bnb.png'


const Projects = () => {
  return (
   <ProjectsContainer id="projects">
    <ProjectsBody>
      <Header>Projects</Header>
      <ProjectBasesBody>
          <ProjectCardL
            url = {dlr}
            title="Deep Learning Rental"
            description="A multi-page responsive web application that provides users with a user-friendly interface to access comprehensive company information, product listings, and seamless communication channels."
            bw1="&#8226; React.js"
            bw2="&#8226; Styled Components"
            bw3=""
            demoUrl="https://youtu.be/h9vOR1IgmDY"
          />
          <ProjectCardR
            url = {bnbT}
            title="BitsNBytes"
            description="A fullstack web application that provides users with a user-friendly interface to access comprehensive company information, product listings, and seamless communication channels."
            bw1="&#8226; React.js"
            bw2="&#8226; TailWind CSS"
            bw3="&#8226; AWS"
            demoUrl="https://www.youtube.com/watch?v=P4YvX50njV4"
          />
      </ProjectBasesBody>
    </ProjectsBody>
   </ProjectsContainer> 
  )
}

export default Projects