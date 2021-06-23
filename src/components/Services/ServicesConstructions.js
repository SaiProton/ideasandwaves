import {
  ServiceContainer,
  ServiceContent,
  ServicesMain,
  ServiceMisc,
  ServiceImage,
  ServiceFooter,
  ServiceRequest
} from './ServicesElements'

import { BlueButton } from '../simpleComponents'

export const Service = ({ title, content, imgpath }) => {
  return (
    <ServiceContainer>
      <ServicesMain image={imgpath}>
        <ServiceContent>
          <h2>{title}</h2>
          <p>{content}</p>
          <a href='/'>Learn more</a>
        </ServiceContent>
        <ServiceMisc>
          <ServiceImage src={imgpath} />
        </ServiceMisc>
      </ServicesMain>
      <ServiceFooter>
        <p>Providing Quality Designs Since 2012</p>
        <ServiceRequest>
          <BlueButton>Request Service</BlueButton>
        </ServiceRequest>
      </ServiceFooter>
    </ServiceContainer>
  )
}