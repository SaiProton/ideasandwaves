import {
  CardContainer,
  CardTextContainer,
  CardImage
} from './InfoCardElements'

const InfoCard = ({ header, text, tagline, img }) => {
  return(
    <CardContainer>
      <CardTextContainer>
        <h1>{ header }</h1>
        <h2>{ tagline }</h2>
        <p>{ text }</p>
      </CardTextContainer>
      <CardImage src={img}/>
    </CardContainer>
  )
}

export default InfoCard