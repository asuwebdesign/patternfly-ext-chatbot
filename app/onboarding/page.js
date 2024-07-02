"use client"

import React, { useState, useEffect } from 'react'

import Testing from '@/components/testing'

// Import PatternFly components
import { Button, Tooltip, Text, TextVariants } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faBars } from '@fortawesome/free-solid-svg-icons'

// Import styles
import '@patternfly/react-core/dist/styles/base.css'


const App = () => {

  // Configure tooltips
  const tooltipRef = React.useRef()

  // Configure layout options

  return (
    <div className="app">

      <Testing />

      {/* BEGIN Chatbot Toggle */}
      <Button className="pf-chatbot__button pf-chatbot__button--toggle-chatbot" variant="plain" aria-describedby="pf-chatbot__tooltip--toggle-chatbot" ref={tooltipRef}>
        Chat
      </Button>
      <Tooltip id="pf-chatbot__tooltip--toggle-chatbot" className="pf-chatbot__tooltip" content="Chatbot" position="top" triggerRef={tooltipRef} />
      {/* END Chatbot Toggle */}


      {/* BEGIN PatternFly Chatbot */}
      <div className="pf-chatbot pf-chatbot--layout--onboarding">

        {/* BEGIN Chatbot header */}
        <div className="pf-chatbot__header">
          Graphic
          <Button variant="link">Skip</Button>
        </div>
        {/* END Chatbot header */}

        {/* BEGIN Chatbot main */}
        <div className="pf-chatbot__main">
          <Text component={TextVariants.h1}>{`Redefine work in the age of AI`}</Text>
          <Text component={TextVariants.p}>{`Experience personalized assistance and seamless problem-solving, simplifying your journey with Red Hat every step of the way.`}</Text>
        </div>
        {/* END Chatbot main */}

        {/* BEGIN Chatbot footer */}
        <div className="pf-chatbot__footer">
          <Button>Previous</Button>
          <div>dots</div>
          <Button>Next</Button>
        </div>
        {/* END Chatbot footer */}

      </div>
      {/* END PatternFly Chatbot */}

    </div>
  )
}

export default App