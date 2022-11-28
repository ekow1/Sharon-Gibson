import React from 'react'
import { PopupButton } from "react-calendly";
import { motion } from 'framer-motion';

const Calendly = () => {
  return (
    <motion.div className="App"

    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    
    
    >
    <PopupButton
      url="https://calendly.com/iamsharongibson"
      /*
       * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
       * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
       */
      rootElement={document.getElementById("root")}
      text="Book a free talk session with me"
    />
  </motion.div>
  )
}

export default Calendly