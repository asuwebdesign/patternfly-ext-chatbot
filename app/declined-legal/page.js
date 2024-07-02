"use client"

import React, { useState, useEffect } from 'react'

import Testing from '@/components/testing'

// Import PatternFly components
import { Button, Tooltip, Text, TextVariants } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faBars } from '@fortawesome/free-solid-svg-icons'

// Import assets
// import Illustration from '@/public/assets/illustration--declined-legal.svg'

// Import styles
import '@patternfly/react-core/dist/styles/base.css'


const App = () => {

  // Configure tooltips
  const tooltipRef = React.useRef()

  // Configure layout options
  const title = <Text component={TextVariants.h1}>Acceptance required</Text>
  const content = <>
    <Text component={TextVariants.p}>{`We're sorry, but to use our app, you need to accept our Terms of Use and Privacy Statement. We understand that these agreements are important to you. These agreements are essential for providing you with our services and ensuring your data is protected.`}</Text>
    <Text component={TextVariants.p}>{`Please take a moment to review them again. You can also learn more about our agreements or contact customer support if you have any questions.`}</Text>
  </>

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
      <div className="pf-chatbot pf-chatbot--layout--declined-legal">

        {/* BEGIN Chatbot header */}
        <div className="pf-chatbot__header">
          <div>Graphic</div>
          <div>{title}</div>
        </div>
        {/* END Chatbot header */}

        {/* BEGIN Chatbot main */}
        <div className="pf-chatbot__main">
          {content}
        </div>
        {/* END Chatbot main */}

        {/* BEGIN Chatbot footer */}
        <div className="pf-chatbot__footer">
          <Button>Review agreements</Button>
          <Button variant="tertiary">Learn more</Button>
          <Button variant="tertiary">Contact customer support</Button>
        </div>
        {/* END Chatbot footer */}

      </div>
      {/* END PatternFly Chatbot */}

    </div>
  )
}

export default App