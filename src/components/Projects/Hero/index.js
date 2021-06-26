import {
  HeroContainer,
  CarouselContainer,
  CompanyContainer,
} from './HeroElements'

import { SubHero } from "../../simpleConstructions"

const Hero = ({ toggleContact }) => {
  return (
    <HeroContainer>
      <CarouselContainer>
        <h1>Our Projects</h1>
      </CarouselContainer>
      {/* TODO: Replace with image logos of companies once acquired */}
      <CompanyContainer>
        <h1>Company 1</h1>
        <h1>Company 2</h1>
        <h1>Company 3</h1>
        <h1>Company 4</h1>
      </CompanyContainer>
      <SubHero toggleContact={toggleContact}/>
    </HeroContainer>
  )
}

export default Hero