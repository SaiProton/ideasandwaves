import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  min-height: 700px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: calc(200vh - 80px);
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: calc(100% / 3);

  padding: 2rem;

  border-right: 2px solid #bcbdbd;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 50%;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  img {
    width: 30%;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: clamp(2rem, 2vw, 3rem);
    line-height: clamp(3rem, 2vw, 3.7rem);
  }

  h1:nth-child(1) {
    color: #35BBEE;
  }

  h1:nth-child(2) {
    color: #1E6B88;
  }

  h2 {
    line-height: clamp(2rem, 2vw, 3rem);
    color: #17495B;
  }

  h3 {
    color: #17495B;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 900px) {
    h1 {
      text-align: center;
    }

    h2 {
      text-align: center;
      margin: 1rem 0;
    }

    h3 {
      text-align: center;
    }
  }
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    width: 50%;
    margin: 1rem 0 1rem 0;
  }

  @media screen and (max-width: 900px) {
    button {
      align-self: center;
    }
  }
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 2rem 0;
`

export const SocialIconLink = styled.a`
  font-size: 2rem;
  color: #000000;

  transition: color 0.2s ease-in-out;
  
  &:hover {
    color: ${props => props.hoverColor};
    transition: color 0.2s ease-in-out;
  }
`

export const RightContainer = styled.div`
  height: 100%;
  width: calc(200% / 3);

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 50%;
  }
`

export const InfoChipContainer = styled.div`
  display: flex;
  align-items: center;
  height: calc(100% / 3);
  padding-left: 4rem;

  @media screen and (max-width: 900px) {
    padding-left: 1rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50%;

  h1 {
    font-size: clamp(1rem, 2vw, 2rem);
  }

  h3 {
    color: ${props => props.color};
    font-weight: normal;
  }

  h5 {
    color: #636363;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 50%;
`

export const ChipImage = styled.div`
  background: #bcbdbd;
  
  height: 80%;
  width: 100%;
`