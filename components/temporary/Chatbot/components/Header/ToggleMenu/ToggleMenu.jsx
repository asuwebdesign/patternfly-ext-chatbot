// ============================================================================
// Chatbot Header - Toggle Menu
// ============================================================================

import React from 'react'

// Import PatternFly components
import { Button } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// Import Chatbot components
import Tooltip from '@/components/Chatbot/components/Tooltip/Tooltip'

// Import styles
import './ToggleMenu.scss'

const ToggleMenu = () => {

  // Configure tooltips
  const tooltipToggleMenu = React.useRef()

  // Configure handlers
  const handleMenu = () => {
    console.log('Toggle menu')
  }

  return (
    <>
      <Button
        className="pf-chatbot__button pf-chatbot__button--toggle-menu"
        variant="plain"
        aria-describedby="pf-chatbot__tooltip--toggle-menu"
        ref={tooltipToggleMenu}
        onClick={handleMenu}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Tooltip
        id="pf-chatbot__tooltip--toggle-menu"
        content="Menu"
        position="bottom"
        triggerRef={tooltipToggleMenu} />
    </>
  )
}

export default ToggleMenu