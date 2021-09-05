import { 
  SubHeroContent,
  HeroFooter, 
  HeroContacts, 
  BlueButton 
} from "./simpleComponents"

export const SubHero = ({ toggleContact }) => {
  return(
    <SubHeroContent>
      <HeroFooter>
        <p>Providing Quality Designs Since 2012</p>
      </HeroFooter>
      <HeroContacts>
        <BlueButton onClick={toggleContact}>Contact Us</BlueButton>
      </HeroContacts>
    </SubHeroContent>
  )
}