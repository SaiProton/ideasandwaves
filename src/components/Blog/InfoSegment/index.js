import {
  SegmentContainer,
  LeftContainer,
  RightContainer,
  SegmentPicture,
  PictureColorBox,
  HeaderContainer,
} from './InfoSegmentElements'

import { useState } from 'react'
import { Item, More } from './InfoConstructions'

const InfoSegment = ({id, data}) => {
  const [more, setMore] = useState(false)

  const toggleMore = () => {
    setMore(!more)
  }

  return(
    <SegmentContainer id={id}>
      <LeftContainer>
        <PictureColorBox color={data.color}>
          <SegmentPicture src={data.image}/>
        </PictureColorBox>
      </LeftContainer>
      <RightContainer>

        <HeaderContainer color={data.color}>
          <h1>{data.header}</h1>
          <h5>{data.desc}</h5>
        </HeaderContainer>

        {
          data.items.slice(0, more ? data.items.length : 3).map((item, index) => {
            return <Item key={index} data={data} item={item} more={more}/>
          })
        }

        {
          data.items.length > 2 && <More more={more} toggle={toggleMore}/>
        }

      </RightContainer>
    </SegmentContainer>
  )
}

export default InfoSegment