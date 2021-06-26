import styled from 'styled-components'

export const HeroContainer = styled.div`
  height: calc(100vh - 80px);
  min-height: 750px;

  @media screen and (max-width: 900px) {
    height: calc(200vh - 80px);
  }
`

export const CarouselContainer = styled.div`
  display: flex;
  height: 70%;
  background: #888888;
  padding: 2rem;

  h1 {
    color: #ffffff;
  }

  @media screen and (max-width: 900px) {
    justify-content: center;
    align-items: center;
    height: 50%;
  }
`

export const CompanyContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 20%;

  h1 {
    color: #1E6B88;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;

    height: 30%;
  }
`