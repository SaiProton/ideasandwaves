import styled from "styled-components"

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 8rem 0 8rem 0;

  h2 {
    color: #17495B;
    margin: 0 5rem 0 5rem;
    font-size: 2rem;
  }

  @media screen and (max-width: 900px) {
    align-items: center;

    margin: 4rem 0;

    h2 {
      text-align: center;
      margin: 0;
    }
  }
`

export const ServicesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  margin: 2rem 0 2rem 0;
`

export const Service = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 300px;
  width: calc(100% / 3);
  min-width: 300px;

  background: #bcbdbd;

  border: 1px solid #ffffff;

  cursor: pointer;

  transition: 0.2s ease-in-out;

  h3 {
    color: #ffffff;
    font-size: clamp(1rem, 2vw, 2rem);
    text-align: center;
  }

  &:hover {
    background: #848484;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 900px) {
    flex: 1;
  }
`