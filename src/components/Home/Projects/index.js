import {
  ProjectsContainer,
  HeaderContainer,
  ItemsContainer,
  ProjectItem
} from './ProjectsElements'

import Project1 from '../../../images/projects/project1.png'
import Project2 from '../../../images/projects/project2.jpeg'


const Projects = () => {
  return(
    <ProjectsContainer>
      <HeaderContainer>
        <h1>Our Projects</h1>
      </HeaderContainer>
      <ItemsContainer>
        <ProjectItem img={Project1}/>
        <ProjectItem img={Project2}/>
        <ProjectItem/>
      </ItemsContainer>
    </ProjectsContainer>
  )
}

export default Projects