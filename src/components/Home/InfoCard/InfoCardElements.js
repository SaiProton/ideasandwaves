import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  height: 50vh;
  min-height: 350px;
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
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: #eee;
  padding-left: 2rem;
  height: 100%;
  width: 50%;

  h1 {
    width: 100%;
    text-transform: uppercase;
    font-size: 3rem;
    margin: 2rem;
  }

  p {
    width: 100%;
    line-height: 2rem;
    color: gray;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 0 2rem;
    border-style: none;
    text-align: center;
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