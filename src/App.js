import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './globalStyles'

import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import Services from "./components/Services";
import Home from './components/Home';

import { useState } from 'react'

const App = () => {
  const [route, setRoute] = useState('/' + window.location.href.split('/')[3])

  const refreshRoute = (path) => {
    setRoute(path)
  }

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar route={route} refreshRoute={refreshRoute}/>
      <Route exact path={'/'}>
        <Home refreshRoute={refreshRoute}/>
      </Route>
      <Route path={'/services'} component={Services}/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
