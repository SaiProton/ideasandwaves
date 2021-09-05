import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

import {
  ItemContainer,
  ItemPicture,
  ItemHeader,
  MoreLink
} from './InfoSegmentElements'

export const Item = ({ data, item }) => {
  return (
    <ItemContainer>
      <ItemPicture />
      <ItemHeader color={data.color}>
        <h5>{data.header}</h5>
        <h4>{item.headline}</h4>
        <h6>{item.author}</h6>
      </ItemHeader>
    </ItemContainer>
  )
}

export const More = ({ more, toggle }) => {
  return(
    <MoreLink onClick={toggle}>
      {
        more
        ? <> <FaChevronUp/>&nbsp;&nbsp;Show Less </>
        : <> <FaChevronDown/>&nbsp;&nbsp;Show More </>
      }
    </MoreLink>
  )
}