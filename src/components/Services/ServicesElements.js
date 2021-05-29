import styled, {keyframes} from 'styled-components'

export const ServicesContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 600px;
`

export const BubbleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 580px;
  z-index: -1;
  overflow: hidden;
  top: 80px;
  left: 0;

  background: #373B44;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #4286f4, #373B44);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #4286f4, #373B44); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
  & :nth-child(3) {
    width:50px;
    height:50px;
    left:35%;
    animation-duration:7s;
    animation-delay:2s;
  }
  
  & :nth-child(4){
    width:80px;
    height:80px;
    left:50%;
    animation-duration:11s;
    animation-delay:0s;
  }
  
  & :nth-child(5){
    width:35px;
    height:35px;
    left:55%;
    animation-duration:6s;
    animation-delay:1s;
  }
  
  & :nth-child(6){
    width:45px;
    height:45px;
    left:65%;
    animation-duration:8s;
    animation-delay:3s;
  }
  
  & :nth-child(7){
    width:90px;
    height:90px;
    left:70%;
    animation-duration:12s;
    animation-delay:2s;
  }
  
  & :nth-child(8){
    width:25px;
    height:25px;
    left:80%;
    animation-duration:6s;
    animation-delay:2s;
  }
  
  & :nth-child(9){
    width:15px;
    height:15px;
    left:70%;
    animation-duration:5s;
    animation-delay:1s;
  }
  
  & :nth-child(10){
    width:90px;
    height:90px;
    left:25%;
    animation-duration:10s;
    animation-delay:4s;
  }
`

const bubbleRise = keyframes`
  0% {
    bottom: -100px;
    transform: translateX(0);
  }
  
  50% {
    transform: translate(100px);
  }
  
  100% {
    bottom: 1080px;
    transform: translateX(-200px);
  }
`

export const Bubble = styled.div`
  position: absolute;
  bottom: -100px;
  width: 40px;
  height: 40px;
  background: #000000;
  border-radius: 50%;
  opacity: 0.5;
  animation: ${bubbleRise} 10s infinite ease-in;
`

export const Content = styled.div`
  display: flex;

  padding: 3rem 0 3rem 3rem;

  width: 100%;
  height: 100%;

  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );

  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 3rem 2rem;
    align-items: center;

    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 5rem;
  text-transform: uppercase;

  h1 {
    color: white;
    text-align: left;
    font-size: clamp(1rem, 8vw, 3rem);
    box-shadow: 0 5px #35BAED;
  }

  p {
    color: gray;
    font-weight: bold;
    margin: 2vw 0;
    text-align: left;
    font-size: clamp(0.6rem, 2vw, 1.5rem);
    line-height: clamp(1rem, 2vw, 2rem);
  }

  @media screen and (max-width: 900px) {
    height: 20%;
    padding: 0;
    align-items: center;

    h1 {
      text-align: center;
    }

    p {
      text-align: center;
    }
  }
`

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;

  width: 100%;

  @media screen and (max-width: 900px) {
    height: 60%;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;

  border-radius: 1000px 0 0 1000px;
  width: 100%;
  height: clamp(100px, 15vw, 150px);
  background: linear-gradient(
    to right,
    #75c1ad,
    #35BAED
  );

  @media screen and (max-width: 900px) {
    border-radius: 1000px;
  }
`

export const ItemImage = styled.div`
  aspect-ratio: 1;
  height: 100%;
  background: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1000px;

  box-shadow: 5px 0 #00000011;
`

export const ItemContent = styled.div`
  margin-left: clamp(1rem, 5vw, 2rem);
  margin-right: 1rem;

  h1 {
    font-size: clamp(1.2rem, 4vw, 3rem);
  }

  p {
    font-size: clamp(0.7rem, 2vw, 1.5rem);
  }
`