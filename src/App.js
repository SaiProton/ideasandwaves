import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './globalStyles'

import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Route path={'/'}>
        <Navbar/>
        <Hero/>
      </Route>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
