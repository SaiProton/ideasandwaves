import styled from 'styled-components'

export const BlueButton = styled.button`
  border-radius: 100px;
  padding: 0.4rem 1rem;

  font-weight: bold;
  border: none;
  outline: none;
  color: #ffffff;
    
  background: #35BAED;
    
  transition: 0.1s ease-out;
    
  &:hover {
    color: #ffffff;
    background: #2a8eb6;
    transition: 0.1s ease-out;
    cursor: pointer;
  }
`

export const SubHeroContent = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 25px;

  @media screen and (max-width: 900px) {
    height: 20%;
    flex-direction: column-reverse;
  }
`

export const HeroFooter = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  color: #828282;
  font-size: clamp(0.75rem, 2vw, 1rem);

  @media screen and (max-width: 900px) {
    margin-top: 10px;
    text-align: center;
  }
`

export const HeroContacts = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
`