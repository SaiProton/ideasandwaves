import styled from "styled-components";

export const JumboImage = styled.div`
  background-image: url(${props => props.src});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 75vh;
  margin: 15vh 0;

  min-height: 500px;

  @media screen and (max-width: 900px) {
    background-position-x: 25%;
    background-position-y: center;
  }
`

export const ContentContainer = styled.div`
  margin: 5rem 5rem;

  h1 {
    color: #1E6B88;
  }

  p {
    margin: 1rem 0 0 1rem;
  }

  @media screen and (max-width: 900px) {
    margin: 0 1rem;
    text-align: center;

    p {
      margin: 0;
    }
  }
`

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 5rem 0;
`

export const TeamHeader = styled.div`
  h3 {
    color: #1E6B88;
    text-align: center
  }

  h1 {
    color: #17495B;
    letter-spacing: 0.5em;
    text-indent: 0.5em;
    text-align: center;
  }
`

export const TeamImages = styled.div`
  display: flex;
  justify-content: space-evenly;

  flex-wrap: wrap;
  
  margin: 5rem 0;

  width: 100%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    
    margin: 2rem 0;
  }
`

export const TeamImage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  padding: 1rem;
  margin-bottom: 2rem;

  flex-basis: 30vw;

  width: 30vw;
  height: 30vw;

  font-size: 2rem;

  color: #ffffff;
  font-weight: bold;

  background: #bcbdbd;
  background-blend-mode: multiply;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 900px) {
    flex-basis: 75vw;
    width: 75vw;

    margin: 1rem 0;
  }
`
