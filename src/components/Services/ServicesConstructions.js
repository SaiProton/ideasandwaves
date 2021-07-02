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
import { Link } from 'react-router-dom'

export const Service = ({ title, content, imgpath, moreUrl }) => {
  return (
    <ServiceContainer>
      <ServicesMain image={imgpath}>
        <ServiceContent>
          <h2>{title}</h2>
          <p>{content}</p>
          <Link to={`/services/${moreUrl}`}>Learn more</Link>
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