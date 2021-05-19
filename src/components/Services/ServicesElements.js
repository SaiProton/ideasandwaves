import styled, {keyframes} from 'styled-components'

export const ServicesContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #373B44;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #4286f4, #373B44);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #4286f4, #373B44); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export const BubbleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  top: 80px;
  left: 0;
  
  & :nth-child(3){
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

