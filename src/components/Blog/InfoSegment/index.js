import {
  SegmentContainer,
  LeftContainer,
  RightContainer,
  SegmentPicture,
  PictureColorBox,
  HeaderContainer,
  ItemContainer,
  ItemPicture,
  ItemHeader,
  MoreLink
} from './InfoSegmentElements'

import { FaChevronDown } from 'react-icons/fa'


const InfoSegment = ({data}) => {
  return(
    <SegmentContainer>
      <LeftContainer>
        <PictureColorBox color={data.color}>
          <SegmentPicture/>
        </PictureColorBox>
      </LeftContainer>
      <RightContainer>

        <HeaderContainer color={data.color}>
          <h1>{data.header}</h1>
          <h5>{data.desc}</h5>
        </HeaderContainer>

        {data.items.map((item, index) => {
          return(
            <ItemContainer key={index}>
              <ItemPicture/>
              <ItemHeader color={data.color}>
                <h5>{data.header}</h5>
                <h4>{item.headline}</h4>
                <h6>{item.author}</h6>
              </ItemHeader>
            </ItemContainer>
          )
        })}

        <MoreLink>
          <FaChevronDown/>
          &nbsp;&nbsp;
          Show More
        </MoreLink>

      </RightContainer>
    </SegmentContainer>
  )
}

export default InfoSegment