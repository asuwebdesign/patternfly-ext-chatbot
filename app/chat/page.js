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
  const tooltipToggleChatbotRef = React.useRef()
  const tooltipToggleMenu = React.useRef()
  const tooltipToggleOptionsRef = React.useRef()

  // Configure layout options

  return (
    <div className="app">

      <Testing />

      {/* BEGIN Chatbot Toggle */}
      <Button className="pf-chatbot__button pf-chatbot__button--toggle-chatbot" variant="plain" aria-describedby="pf-chatbot__tooltip--toggle-chatbot" ref={tooltipToggleChatbotRef}>
        Chat
      </Button>
      <Tooltip id="pf-chatbot__tooltip--toggle-chatbot" className="pf-chatbot__tooltip" content="Chatbot" position="top" triggerRef={tooltipToggleChatbotRef} />
      {/* END Chatbot Toggle */}


      {/* BEGIN PatternFly Chatbot */}
      <div className="pf-chatbot">

        {/* BEGIN Chatbot header */}
        <div className="pf-chatbot__header">

          {/* Chatbot title */}
          <div className="pf-chatbot__title">
            <Text component={TextVariants.h1}>Red Hat</Text>
          </div>          
          
          {/* Chatbot toggle menu */}
          <Button className="pf-chatbot__button pf-chatbot__button--toggle-menu" variant="plain" aria-describedby="pf-chatbot__tooltip--toggle-menu" ref={tooltipToggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
          <Tooltip id="pf-chatbot__tooltip--toggle-menu" className="pf-chatbot__tooltip" content="Menu" position="bottom" triggerRef={tooltipToggleMenu} />
          
          {/* Chatbot toggle options */}          
          <Button className="pf-chatbot__button pf-chatbot__button--toggle-options" variant="plain" aria-describedby="pf-chatbot__tooltip--toggle-options" ref={tooltipToggleOptionsRef}>
            <FontAwesomeIcon icon={faEllipsis} />
          </Button>
          <Tooltip className="pf-chatbot__tooltip" content="Options" position="bottom" triggerRef={tooltipToggleOptionsRef} />
          
          {/* Menu panel */}
          
          {/* Options dropdown */}
        
        </div>
        {/* END Chatbot header */}

        {/* BEGIN Chatbot main */}
        <div className="pf-chatbot__main">
          Main
        </div>
        {/* END Chatbot main */}

        {/* BEGIN Chatbot footer */}
        <div className="pf-chatbot__footer">
          <div>Message bar</div>
          <div>Footnote</div>
        </div>
        {/* END Chatbot footer */}

      </div>
      {/* END PatternFly Chatbot */}

    </div>
  )
}

export default App