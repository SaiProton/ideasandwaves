import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";

import img from '../../images/wave.png'

export const FooterContainer = styled.footer`
  background-color: #131313;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FooterLinks = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
`

export const FooterLinkWrapper = styled.div`
  display: flex;
  
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  
  h2 {
    margin-bottom: 16px;
    color: #fff;
    font-size: clamp(1.2rem, 3vw, 1.5rem);
  }
  
  a {
    color: #fff;
    font-size: clamp(0.7rem, 3vw, 0.9rem);
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: 0.1s ease-in-out;
    
    &:hover {
      color: #d8d8d8;
      transition: 0.1s ease-in-out;
    }
  }
  
  @media screen and (max-width: 900px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  
  p {
    color: #808080;
  }
  
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`

export const FooterLogo = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  
  @media screen and (max-width: 900px) {
    margin-top: 1.5rem;
  }
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: color 0.1s ease-in-out;
  
  &:hover {
    color: ${props => props.hoverColor};
    transition: color 0.1s ease-in-out;
  }
`

const waveAnim = keyframes`
  0% {background-position-x: 0}
  100% {background-position-x: 1000px}
`

export const WaveSection = styled.section`
  position: relative;
  width: 100%;
  height: 100px;
  /* margin-top: -100px; */
  
  & :nth-child(1) {
    animation: ${waveAnim} 30s linear infinite;
  }
  
  & :nth-child(2) {
    animation: ${waveAnim} 15s reverse linear infinite;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 10px;
  }
  
  & :nth-child(3) {
    animation: ${waveAnim} 25s linear infinite;
    opacity: 0.2;
    animation-delay: -2s;
    bottom: 15px;
  }
  
  & :nth-child(4) {
    animation: ${waveAnim} 5s reverse linear infinite;
    opacity: 0.7;
    animation-delay: -5s;
    bottom: 20px;
  }
`

export const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(${img});
  filter: brightness(7.5%);
  background-size: 1000px 100px;
`