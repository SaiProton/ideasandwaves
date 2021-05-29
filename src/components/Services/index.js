import { 
  ServicesContainer,
  Content,
  Heading,
  Items,
  ItemContainer,
  ItemImage,
  ItemContent
} from './ServicesElements'

import { Bubbles } from './ServicesConstructions'
import Monitor from '../../images/monitor.png'

const Services = () => {
  return (
    <ServicesContainer>
      <Content>
        <Heading>
          <h1>Our <span style={{color: "#35BAED"}}>Services</span></h1>
          <p>All our services — ready to be served!</p>
        </Heading>
        <Items>
          <ItemContainer>
            <ItemImage src={Monitor}/>
            <ItemContent>
              <h1>Web Design</h1>
              <p>We will build a site to your liking!</p>
            </ItemContent>
          </ItemContainer>
        </Items>
      </Content>
      <Bubbles/>
    </ServicesContainer>
  )
}

export default Services