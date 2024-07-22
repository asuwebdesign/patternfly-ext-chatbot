// ============================================================================
// Chatbot Header - Toggle Menu
// ============================================================================

import React from 'react'

// Import PatternFly components
import {
  Button,
  Icon,
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  DrawerPanelDescription
} from '@patternfly/react-core'

// Import Chatbot components
import Tooltip from '@/components/Chatbot/components/Tooltip/Tooltip'
import RHUIIconMenuBars from './Icon'

// Import styles
import './ToggleMenu.scss'

const ToggleMenu = ({ isExpanded, setIsExpanded }) => {

  // Configure tooltips
  const tooltipToggleMenu = React.useRef()

  // Configure handlers
  const handleMenu = () => {
    console.log('Toggle menu')
    setIsExpanded(!isExpanded)
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
        <Icon size="lg">
          <RHUIIconMenuBars />
        </Icon>
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