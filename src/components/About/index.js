import Hero from '../Home/Hero'

import { JumboImage } from './AboutElements'
import { Content, Team } from './AboutConstructions'

import Toronto from '../../images/about/toronto.jpeg'

const About = ({ toggleContact }) => {
  return(
    <>
      <Hero
        toggleContact={toggleContact}
        header1={'A Creative Agency'}
        header2={'Dedicated to Design.'}
        content={<>Professional Studio for Business <br/> &#38; IT Design</>}
        button={false}/>

      <JumboImage src={Toronto}/>

      <Content
        header={'We are seriously talented'}
        content={'As a Toronto based Digital Design and Development agency we specialize in bring our clients dream\'s to reality. Ideas and Waves began as an attempt to help a family and friend\'s businesses develop a digital presence, but evolved to a business that aimed to help small businesses in the Greater Toronto Area with all things digital. While being in the business for 9 years, we have recently rebranded and adapted to better serve our clients during the pandemic and moving forward. Our team has a wide variety of expertise, from graphic design, to website design and development.'}
        />

      <Team/>
    </>
  )
}

export default About