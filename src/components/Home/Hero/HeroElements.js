import styled from 'styled-components'

export const HeroContainer = styled.div`
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.3)
  );
`

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  width: 100%;
  padding: 0 calc((100vw - 1300px) / 2);
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
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  text-align: left;
  
  @media screen and (max-width: 900px) {
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
  }
  
  h1 {
    font-size: clamp(2rem, 6vw, 4rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px #35BAED;
    letter-spacing: 3px;
    
    @media screen and (max-width: 900px) {
      box-shadow: 0 5px #35BAED;
    }
  }
  
  p {
    font-size: clamp(1.5rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
  }
  
  button {
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    outline: none;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: #74ebd5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ACB6E5, #74ebd5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ACB6E5, #74ebd5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    color: #000;
    transition: 0.2s ease-out;
    
    &:hover {
      color: darkcyan;
      transition: 0.2s ease-out;
      cursor: pointer;
    }
  }
`