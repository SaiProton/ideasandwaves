import Hero from './Hero'

import { ServicesData } from '../Services/ServicesData'

const LearnMore = ({ toggle }) => {
  const key = window.location.href.split('/').slice(-1)[0]
  console.log(key in ServicesData)

  // TODO: if false, redirect to 404 page

  return(
    <Hero data={ServicesData[key].more} toggle={toggle}/>
  )
}

export default LearnMore