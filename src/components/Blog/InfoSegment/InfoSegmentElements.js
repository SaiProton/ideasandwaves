import styled from 'styled-components'

export const SegmentContainer = styled.div`
  display: flex;
  height: fit-content;

  @media screen and (max-width: 900px) {
    margin: 2rem 0;
    flex-direction: column;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  width: calc(100% / 3);
  border-right: 2px solid #bcbdbd;

  @media screen and (max-width: 900px) {
    height: 100px;
    width: 100%;
    justify-content: center;
    border: none;
    /* display: none */
  }
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: calc(200% / 3);

  @media screen and (max-width: 900px) {
    width: 100%;
    align-items: center;
  }
`

export const PictureColorBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;

  left: 16.5vw;
  background: ${props => props.color + '22'};
  width: 33vw;
  height: 25vw;

  @media screen and (max-width: 900px) {
    left: calc(15% / 2);
    width: 85%;
    height: 200px;
    align-items: flex-start;
    justify-content: center;

    background: linear-gradient(
      to bottom,
      ${props => props.color + '55'},
      #ffffff
    );
    
    z-index: -10;
  }
`

export const SegmentPicture = styled.img`
  margin-left: -25%;
  width: 75%;
  height: 75%;

  @media screen and (max-width: 900px) {
    margin: -20px 0 0 0;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 3rem;
  width: 50%;
  height: 25vw;

  h1 {
    font-size: 4rem;
    color: ${props => props.color}
  }

  h5 {
    font-size: clamp(1rem, 2vw, 1.5rem);
    color: #A8A8A8;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 50%;
    margin: 0;
    padding: 0 1rem;

    text-align: center;

    h1 {
      font-size: 3rem;
      height: 100px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3rem;
  height: 25vh;
  min-height: 200px;

  @media screen and (max-width: 900px) {
    margin: 0;
    width: 100%;
    justify-content: center;
    flex-direction: row-reverse;
  }
`

export const ItemPicture = styled.img`
  height: 75%;
  width: calc(0.75 * max(200px, 25vh));
  margin-right: clamp(1rem, 2vw, 3rem);
  margin-left: 0;
  border-radius: 1000px;

  background: #bcbdbd;

  @media screen and (max-width: 900px) {
    height: 50%;
    width: calc(0.50 * max(200px, 25vh));
    margin-left: clamp(1rem, 2vw, 3rem);
    margin-right: 0;
  }
`

export const ItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 50%;

  h5 {
    color: ${props => props.color};
    font-size: 1.2rem;
  }

  h4 {
    font-size: clamp(1rem, 2vw, 2rem);
  }

  h6 {
    color: #7E7E7E;
    font-size: clamp(0.8rem, 2vw, 1rem);
  }
`

export const MoreLink = styled.p`
  margin: 2rem 0 2rem 3rem;
  font-weight: bold;
  color: #7e7e7e;
  width: fit-content;
  user-select: none;

  cursor: pointer;

  transition: color 0.1s ease-in-out;

  &:hover {
    color: #5c5c5c;
    transition: color 0.1s ease-in-out;
  }

  @media screen and (max-width: 900px) {
    margin: 0;
  }
`