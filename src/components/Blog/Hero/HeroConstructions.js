import {
  InfoChipContainer,
  TextContainer,
  ChipImage,
  ImageContainer
} from './HeroElements'

export const InfoChip = ({ title, headline, author, src, color}) => {
  return(
    <InfoChipContainer>
      <TextContainer color={color}>
        <h3>{title}</h3>
        <h1>{headline}</h1>
        <h5>{author}</h5>
      </TextContainer>
      <ImageContainer>
        <ChipImage/>
      </ImageContainer>
    </InfoChipContainer>
  )
}