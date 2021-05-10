import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './globalStyles'

import Navbar from './components/Navbar'
import Hero from "./components/Hero";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar/>
      <Hero/>
    </BrowserRouter>
  )
}

export default App
