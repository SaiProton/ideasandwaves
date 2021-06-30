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
  margin-left: 10rem;
  width: 100%;
  height: 25%;
  
  h1 {
    text-transform: uppercase;
    color: #17495B;
  }

  @media screen and (max-width: 900px) {
    height: 15%;
    margin: 0;
    justify-content: center;
    text-align: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: calc(100vw / 4);

  color: #ffffff;
  font-weight: bold;
  font-size: 1.5rem;

  border-radius: 5px;

  background-color: #bcbdbd;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #848484;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
    border-radius: 0;

    border-width: 1px 0;
    border-style: solid;
    border-color: white;
  }
`