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
  align-items: center;
  width: 100%;
  height: 25%;
  
  h1 {
    text-transform: uppercase;
    margin-left: 5rem;
    color: #17495B;
  }

  @media screen and (max-width: 900px) {
    height: 15%;
    justify-content: center;
    text-align: center;

    h1 {
      margin: 0;
    }
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 75%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: 85%;
  }
`

export const ProjectItem = styled.div`
  height: 100%;
  width: 100%;

  border: 1px solid white;

  background-color: #bcbdbd;
  background: url(${props => props.img});

  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
    border-radius: 0;

    border-width: 1px 0;
    border-style: solid;
    border-color: white;

    background-position: center;
  }
`