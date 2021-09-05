import styled from 'styled-components'

export const GridContainer = styled.div`
  height: 100vh;
  min-height: 750px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  margin: 10rem 0 10rem 0;

  @media screen and (max-width: 900px) {
    height: 200vh;
    margin: 0 0 10rem 0;
    justify-content: center;
  }
`

export const GridRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 32%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: 33%;
    justify-content: space-around;
  }
`

export const ProjectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #888888;
  width: 32%;
  height: 100%;

  border-radius: 10px;

  @media screen and (max-width: 900px) {
    width: 95%;
    height: 30%;
  }
`

export const ProjectOverlay = styled.div`
  font-size: clamp(1rem, 2vw, 2rem);
  font-weight: bold;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  width: 100%;
  height: 100%;
  background: #00000066;

  border-radius: 10px;

  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;

    transition: opacity 0.2s ease-in-out;
  }

  @media screen and (max-width: 900px) {
    text-align: center;
    opacity: 1;
  }
`