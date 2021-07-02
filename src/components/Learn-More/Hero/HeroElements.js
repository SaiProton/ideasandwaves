import styled from "styled-components";

export const BannerContainer = styled.div`
  background-image: url(${props => props.img});
  background-color: #00000055;
  background-blend-mode: multiply;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  height: 25vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`

export const ContentContainer = styled.div`
  margin: 0 4rem;

  h2 {
    text-align: center;
    color: #1E6B88;
  }

  p {
    font-size: 1.1rem;
    margin: 2rem 0;
  }

  hr {
    width: 10%;
    border: 2px solid #35BBEE;
    border-radius: 20px;
  }

  @media screen and (max-width: 900px) {
    margin: 1rem;
    text-align: center;

    hr {
      width: 60%;
    }
  }
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 4rem 0;
`

export const ContentFooter = styled.div`
  p {
    color: #17495B;
    font-size: 0.9rem;
    font-weight: bold;
  }

  @media screen and (max-width: 900px) {
    text-align: center;
    width: 100%:
  }
`