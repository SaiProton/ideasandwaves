import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './globalStyles'

import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar/>
      <Route exact path={'/'} component={Hero}/>
      <Route path={'/services'} component={Services}/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
