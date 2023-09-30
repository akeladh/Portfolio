import React from 'react'
import { Header, ProjectsBody, ProjectsContainer, ProjectBasesBody, ProjectCardR, ProjectCardL } from './ProjectElements'

import dlr from '../../imgs/dlrTest.png'
import bnbT from '../../imgs/bnb.png'

const Projects = () => {
  return (
   <ProjectsContainer>
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
          />
          <ProjectCardR
            url = {bnbT}
            title="Deep Learning Rental"
            description="A multi-page responsive web application that provides users with a user-friendly interface to access comprehensive company information, product listings, and seamless communication channels."
            bw1="&#8226; React.js"
            bw2="&#8226; Styled Components"
            bw3=""
          />
      </ProjectBasesBody>
    </ProjectsBody>
   </ProjectsContainer> 
  )
}

export default Projects