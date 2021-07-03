import styled from 'styled-components'

export const HeroContainer = styled.div`
  height: calc(100vh - 80px);
  min-height: 520px;
  /* background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.3)
  ); */
`

export const ContentContainer = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeroImageContainer = styled.div`
  height: 100%;
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const HeroImage = styled.img`
  height: 100%;
`

export const HeroContent = styled.div`
  height: 90%;
  max-height: 100%;
  width: 100%;
  padding: 0 calc((100vw - 1300px) / 2);
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    height: 80%;
  }
`

export const HeroVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  filter: blur(5px);
  z-index: -1;
`

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 0 0 2rem;
  width: 650px;
  color: #fff;
  line-height: 1;
  font-weight: bold;
  text-align: left;
  
  @media screen and (max-width: 900px) {
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    padding: 0;
  }
  
  h1 {
    font-size: clamp(1.2rem, 4vw, 2.5rem);
    margin-bottom: 1rem;
    box-shadow: 0 5px #35BAED;
    letter-spacing: 2px;
    padding: 0 0 10px 0;
    text-transform: uppercase;
    line-height: clamp(2rem, 5vw, 3rem);
    
    @media screen and (max-width: 900px) {
      padding: 0;
    }
  }
  
  p {
    font-size: clamp(0.8rem, 2.5vw, 1.5rem);
    line-height: clamp(1.5rem, 2.5vw, 2rem);
    margin-bottom: 1rem;
    color: #17495B;
  }
  
  button {
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: 100px;

    font-weight: bold;
    color: #35BAED;
    border: solid 3px #35BAED;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background: none;
    
    //background: #74ebd5;  /* fallback for old browsers */
    //background: -webkit-linear-gradient(to right, #ACB6E5, #74ebd5);  /* Chrome 10-25, Safari 5.1-6 */
    //background: linear-gradient(to right, #ACB6E5, #74ebd5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    transition: 0.2s ease-out;
    
    &:hover {
      color: #ffffff;
      background: #35BAED;
      transition: 0.2s ease-out;
      cursor: pointer;
    }
  }
`