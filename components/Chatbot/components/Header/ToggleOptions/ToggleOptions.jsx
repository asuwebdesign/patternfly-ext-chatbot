// ============================================================================
// Chatbot Header - Toggle Options
// ============================================================================

import React from 'react'

// Import PatternFly components
import { Button, Icon } from '@patternfly/react-core'

// Import Chatbot components
import Tooltip from '@/components/Chatbot/components/Tooltip/Tooltip'
import RHUIIconEllipsisHorizontalFill from './Icon'

// Import styles
import './ToggleOptions.scss'

const ToggleOptions = () => {

  // Configure tooltips
  const tooltipToggleOptionsRef = React.useRef()

  // Configure handlers
  const handleOptions = () => {
    console.log('Toggle options')
  }

  return (
    <>
      <Button
        className="pf-chatbot__button pf-chatbot__button--toggle-options"
        variant="plain"
        aria-describedby="pf-chatbot__tooltip--toggle-options"
        ref={tooltipToggleOptionsRef}
        onClick={handleOptions}
      >
        <Icon size="lg">
          <RHUIIconEllipsisHorizontalFill />
        </Icon>
      </Button>
      <Tooltip className="pf-chatbot__tooltip" content="Options" position="bottom" triggerRef={tooltipToggleOptionsRef} />
    </>
  )
}

export default ToggleOptions