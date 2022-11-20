import React from 'react'

import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Portfolio from './Portfolio'

const Routing = () => {
  return (
    <div>

<Router>
          
       <Header />
       

          <Routes >
              

              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
           
            

              

          </Routes>

         

        </Router>


    </div>
  )
}

export default Routing