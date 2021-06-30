import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  height: 50vh;
  min-height: 480px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    height: 100vh;
    min-height: 750px;
    flex-direction: column;
  }
`

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  text-align: left;
  padding-left: 2rem;
  height: 100%;
  width: 50%;

  h1 {
    width: 100%;
    text-transform: uppercase;
    font-size: 2rem;
    margin-left: 5rem;
    color: #17495B;
  }

  h2 {
    margin: 1rem 0 1rem 0;
    width: 100%;
    margin-left: 10rem;
    color: #1E6B88;
  }

  p {
    width: 75%;
    line-height: 2rem;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 2rem 0;
    border-style: none;
    text-align: center;
    justify-content: center;

    h1 {
      margin: 0;
    }

    h2 {
      margin: 1rem 0;
    }

    p {
      width: 90%;
    }
  }
`

export const CardImage = styled.div`
  display: flex;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  ), url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 50%;

  @media screen and (max-width: 900px) {
    width: 100%;

    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    ), url(${props => props.src});

    background-repeat: no-repeat;
    background-size: cover;
  }
`