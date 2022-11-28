import React from 'react'
import { Routes ,Route , useLocation} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Portfolio from './Portfolio'
import { AnimatePresence } from 'framer-motion'
import Footer from './Footer'
import Header from './Header'

const AnimatedRoutes = () => {
    const location = useLocation()
  return (
    <div>

        <AnimatePresence exitBeforeEnter >
        <Header />
        <Routes location ={location} key={location.pathname}>
              

              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />    

    </Routes>
    <Footer />
        </AnimatePresence>




    </div>
  )
}

export default AnimatedRoutes