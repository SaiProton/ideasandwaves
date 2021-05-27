import {
  ProjectsContainer,
  HeaderContainer,
  ItemsContainer,
  ProjectItem
} from './ProjectsElements'


const Projects = () => {
  return(
    <ProjectsContainer>
      <HeaderContainer>
        <h1>Our Projects</h1>
      </HeaderContainer>
      <ItemsContainer>
        <ProjectItem>Coming Soon!</ProjectItem>
        <ProjectItem>Coming Soon!</ProjectItem>
        <ProjectItem>Coming Soon!</ProjectItem>
      </ItemsContainer>
    </ProjectsContainer>
  )
}

export default Projects