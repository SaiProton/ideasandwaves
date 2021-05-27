import {
  CardContainer,
  CardTextContainer,
  CardImage
} from './InfoCardElements'

const InfoCard = ({ header, text, img }) => {
  return(
    <CardContainer>
      <CardTextContainer>
        <h1>{ header }</h1>
        <p>{ text }</p>
      </CardTextContainer>
      <CardImage src={img}/>
    </CardContainer>
  )
}

export default InfoCard