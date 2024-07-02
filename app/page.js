"use client"

import { useState, useEffect } from 'react'

// Import PatternFly components
import { Button, Tooltip, Text, TextVariants } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faBars } from '@fortawesome/free-solid-svg-icons'

// Import styles
import '@patternfly/react-core/dist/styles/base.css'


const App = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false)
  
  useEffect(() => {
    const htmlElement = document.documentElement
    if (isDarkTheme) {
      htmlElement.classList.add('pf-v6-theme-dark')
    } else {
      htmlElement.classList.remove('pf-v6-theme-dark')
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <div className="app">

      <button onClick={toggleTheme}>Toggle theme</button>

      {/* BEGIN Chatbot Toggle */}
      <Button className="pf-chatbot__button pf-chatbot__button--toggle-chatbot" variant="plain" aria-describedby="pf-chatbot__tooltip--toggle-chatbot">
        Chat
      </Button>
      <Tooltip id="pf-chatbot__tooltip--toggle-chatbot" className="pf-chatbot__tooltip" content="Chatbot" position="bottom" />
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
          <Tooltip className="pf-chatbot__tooltip" content="Menu" position="bottom">
            <Button className="pf-chatbot__button pf-chatbot__button--toggle-menu" variant="plain" aria-label="Menu">
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </Tooltip>
          
          {/* Chatbot toggle options */}
          <Tooltip className="pf-chatbot__tooltip" content="Options" position="bottom">
            <Button className="pf-chatbot__button pf-chatbot__button--toggle-options" variant="plain" aria-label="Options">
              <FontAwesomeIcon icon={faEllipsis} />
            </Button>
          </Tooltip>
          
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