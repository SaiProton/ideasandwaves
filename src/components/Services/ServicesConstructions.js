import {Bubble, BubbleContainer} from './ServicesElements'

export const Bubbles = () => {
  return(
    <BubbleContainer>
      {[...Array(10)].map((x, i) => {
        return <Bubble key={i}/>
      })}
    </BubbleContainer>
  )
}