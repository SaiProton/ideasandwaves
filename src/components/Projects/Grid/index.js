import {
  GridContainer,
  GridRow,
  ProjectBox,
  ProjectOverlay
} from './GridElements'

const Grid = () => {
  return(
    <GridContainer>
      <GridRow>
        <ProjectBox>
          <ProjectOverlay>Company Name</ProjectOverlay>
        </ProjectBox>
        <ProjectBox>
          <ProjectOverlay>Company Name</ProjectOverlay>
        </ProjectBox>
        <ProjectBox>
          <ProjectOverlay>Company Name</ProjectOverlay>
        </ProjectBox>
      </GridRow>
      <GridRow>
        <ProjectBox>
          <ProjectOverlay>Company Name</ProjectOverlay>
        </ProjectBox>
        <ProjectBox>
          <ProjectOverlay>Company Name</ProjectOverlay>
        </ProjectBox>
        <ProjectBox>
          <ProjectOverlay>Company Name</ProjectOverlay>
        </ProjectBox>
      </GridRow>
      <GridRow>
        <ProjectBox>
          <ProjectOverlay>Company Name</ProjectOverlay>
        </ProjectBox>
        <ProjectBox>
          <ProjectOverlay>Company Name</ProjectOverlay>
        </ProjectBox>
        <ProjectBox>
          <ProjectOverlay>Company Name</ProjectOverlay>
        </ProjectBox>
      </GridRow>
    </GridContainer>
  )
}

export default Grid