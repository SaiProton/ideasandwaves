import styled from 'styled-components'

export const SegmentContainer = styled.div`
  display: flex;
  height: calc(150vh - 80px);
`

export const LeftContainer = styled.div`
  height: 100%;
  width: calc(100% / 3);
  border-right: 2px solid #bcbdbd;
`

export const RightContainer = styled.div`
  height: 100%;
  width: calc(200% / 3);
`

export const PictureColorBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;

  left: 16.5vw;
  background: ${props => props.color + '22'};
  width: 33vw;
  height: 25vw;
`

export const SegmentPicture = styled.img`
  background: #bcbdbd;
  margin-left: calc(-25% - 2px);
  width: 75%;
  height: 75%;
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
    font-size: 1.5rem;
    color: #A8A8A8;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3rem;
  height: 25vh;
  min-height: 200px;
  width: 50%;
`

export const ItemPicture = styled.img`
  height: 75%;
  width: calc(0.75 * 25vh);
  margin-right: 3rem;
  border-radius: 1000px;

  background: #bcbdbd;
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
    font-size: 2rem;
  }

  h6 {
    color: #7E7E7E;
    font-size: 1rem;
  }
`

export const MoreLink = styled.p`
  margin-left: 3rem;
  font-weight: bold;
  color: #7e7e7e;

  cursor: pointer;

  transition: color 0.1s ease-in-out;

  &:hover {
    color: #5c5c5c;
    transition: color 0.1s ease-in-out;
  }
`