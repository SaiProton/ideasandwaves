import {
  ServicesHeader
} from './ServicesElements'

import { Service } from './ServicesConstructions'
import { ServicesData } from './ServicesData'

const Services = () => {
  return (
    <>
      <ServicesHeader>Our Services</ServicesHeader>
      {
        Object.keys(ServicesData).map((key, index) => {
          return(
            <Service
              key={index}
              title={ServicesData[key].card.header}
              content={ServicesData[key].card.desc}
              imgpath={ServicesData[key].card.img}
              moreUrl={key}/>
          )
        })
      }
    </>
  )
}

export default Services