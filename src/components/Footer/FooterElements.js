import styled from "styled-components";
import {Link} from "react-router-dom";

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
  }
  
  a {
    color: #fff;
    font-size: 0.9rem;
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: 0.3s ease-in-out;
  }
  
  a:hover {
    color: #e9e9e9;
    transition: 0.3s ease-in-out;
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
`