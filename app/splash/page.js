"use client"

import React, { useState, useEffect } from 'react'

import Testing from '@/components/testing'

// Import PatternFly components
import { Button, Tooltip, Spinner } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faBars } from '@fortawesome/free-solid-svg-icons'

// Import styles
import '@patternfly/react-core/dist/styles/base.css'


const App = () => {

  // Configure tooltips
  const tooltipRef = React.useRef()

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
      <div className="pf-chatbot pf-chatbot--layout--splash">

        {/* BEGIN Chatbot main */}
        <div className="pf-chatbot__main">

          {/* Brand */}
          <div className="pf-chatbot__brand">Logo</div>

          {/* Spinner */}
          <div className="pf-chatbot__loading"><Spinner aria-label="Connecting to the service" /></div>

        </div>
        {/* END Chatbot main */}

      </div>
      {/* END PatternFly Chatbot */}

    </div>
  )
}

export default App