import styled from 'styled-components'

export const ServicesHeader = styled.h1`
  margin: 2rem;
  color: #1E6B88;

  @media screen and (max-width: 900px) {
    text-align: center;
  }
`

export const ServiceContainer = styled.div`
  padding: 2rem;
  border-style: solid;
  border-width: 1px 0 1px 0;
  border-color: #eee;

  display: flex;
  flex-direction: column;
`

export const ServicesMain = styled.div`
  display: flex;
  align-items: center;
  height: 40vh;
  min-height: 300px;

  @media screen and (max-width: 900px) {
    min-height: 450px;

    background-image: url(${props => props.image});
    background-color: #ffffffbb;
    background-blend-mode: overlay;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
`

export const ServiceContent = styled.div`
  width: 50%;

  h2 {
    color:#35BBEE;
    font-size: clamp(1.2rem, 2vw, 1.5rem);
  }

  p {
    font-weight: bold;
    color: #1E6B88;
    margin: 1rem 0 1rem 1rem;
    line-height: clamp(1.2rem, 2vw, 2rem);
  }

  a {
    display: block;
    font-weight: bold;
    color: #828282;
    margin-left: 1rem;
  }

  @media screen and (max-width: 900px) {
    width: 100%;

    h2 {
      text-align: center;
    }

    p {
      margin: 1rem 0 0 0;
      text-align: center;
    }

    a {
      margin: 1rem 0 0 0;
      text-align: center;
    }
  }
`

export const ServiceMisc = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const ServiceImage = styled.img`
  height: 100%;
`

export const ServiceFooter = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  padding: 1rem 0 0 0;

  p {
    display: flex;
    align-items: center;
    text-align: left;
    width: 50%;
    color: #828282;
    font-size: 0.75rem;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;

    p {
      text-align: center;
      margin: 1rem;
    }
  }
`

export const ServiceRequest = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  @media screen and (max-width: 900px) {
    width: 100%;
    button {
      width: 75%;
      font-size: 1.2rem;
    }
  }
`
