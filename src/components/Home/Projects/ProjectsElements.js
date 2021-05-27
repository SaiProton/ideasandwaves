import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75vh;
  min-height: 575px;
  background: white;

  @media screen and (max-width: 900px) {
    height: 100vh;
    min-height: 700px;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;

  @media screen and (max-width: 900px) {
    height: 15%;
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: 85%;
  }
`

export const ProjectItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: gray;

  background-color: lightgray;
  border: 1px dashed white;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
  }
`