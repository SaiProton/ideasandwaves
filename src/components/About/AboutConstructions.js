import {
  ContentContainer,
  TeamContainer,
  TeamHeader,
  TeamImages,
  TeamImage,
} from './AboutElements'

import Fayez from '../../images/about/fayez.jpeg'

export const Content = ({ header, content }) => {
  return(
    <ContentContainer>
      <h1>{header}</h1>
      <p>{content}</p>
    </ContentContainer>
  )
}

export const Team = () => {
  return(
    <TeamContainer>
      <TeamHeader>
        <h3>Meet The</h3>
        <h1>TEAM</h1>
      </TeamHeader>
      <TeamImages>
        <TeamImage></TeamImage>
        <TeamImage src={Fayez}>Fayez</TeamImage>
        <TeamImage></TeamImage>
        <TeamImage></TeamImage>
        <TeamImage></TeamImage>
      </TeamImages>
    </TeamContainer>
  )
}