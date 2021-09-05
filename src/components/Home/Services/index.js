import {
  ServicesContainer,
  ServicesWrapper,
  Service
} from './ServicesElements'

import { ServicesData } from "./ServicesData"

const Services = () => {
  return(
    <ServicesContainer>
      <h2>Our Services</h2>
      <ServicesWrapper>
        { Object.keys(ServicesData).map(key => {
          return(
            <Service key={key} href={ServicesData[key].href}>
              <h3>{ServicesData[key].title}</h3>
            </Service>
          )
        })}
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services