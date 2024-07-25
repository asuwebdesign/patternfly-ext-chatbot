// ============================================================================
// Chatbot Header - Toggle Options
// ============================================================================
import React from 'react'

// Import PatternFly components
import { Button, Icon, Dropdown, DropdownGroup, DropdownList, DropdownItem, Divider } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faExpand } from '@fortawesome/free-solid-svg-icons'
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'

// Import Chatbot components
import Tooltip from '@/components/Chatbot/components/Tooltip/Tooltip'
import RHUIIconEllipsisHorizontalFill from './Icon'

// Import styles
import './ToggleOptions.scss'

const ToggleOptions = ({ isMenuExpanded, setIsMenuExpanded, onModeChange, displayMode }) => {

  // Configure tooltips
  const buttonToggleOptionsRef = React.useRef()

  const [isOpen, setIsOpen] = React.useState(false)

  // Configure handlers
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const onSelect = (_event, value) => {
    console.log('selected', value)
    setIsOpen(false)
  }

  // Handle Overlay
  const handleOverlayMode = () => {
    onModeChange('')
    isMenuExpanded && setIsMenuExpanded(false)
  }

  // Handle Dock
  const handleDockMode = () => {
    onModeChange('pf-chatbot--docked')
    isMenuExpanded && setIsMenuExpanded(false)
  }

  // Handle Fullscreen
  const handleFullscreenMode = () => {
    onModeChange('pf-chatbot--fullscreen')
    !isMenuExpanded && setIsMenuExpanded(true)
  }

  return (
    <>
      <Dropdown
        className="pf-chatbot__options"
        isOpen={isOpen}
        onSelect={onSelect}
        onOpenChange={isOpen => setIsOpen(isOpen)}
        popperProps={{ position: 'right' }}
        shouldFocusToggleOnSelect
        toggle={buttonToggleOptionsRef => (
          <>
            <Button
              className="pf-chatbot__button pf-chatbot__button--toggle-options"
              variant="plain"
              aria-describedby="pf-chatbot__tooltip--toggle-options"
              ref={buttonToggleOptionsRef}
              onClick={handleClick}
            >
              <Icon size="lg">
                <RHUIIconEllipsisHorizontalFill />
              </Icon>
            </Button>
            <Tooltip className="pf-chatbot__tooltip" content="Options" position="bottom" triggerRef={buttonToggleOptionsRef} />
          </>
        )}
      >

        {displayMode !== 'pf-chatbot--embedded' && (
          <DropdownGroup label="Display mode">
            <DropdownList>
              <DropdownItem key="switchDisplayOverlay" onClick={handleOverlayMode}>
                <FontAwesomeIcon icon={faWindowRestore} />
                <span>Overlay</span>
              </DropdownItem>
              <DropdownItem key="switchDisplayDock" onClick={handleDockMode}>
                <FontAwesomeIcon icon={faArrowRightToBracket} />
                <span>Dock to window</span>
              </DropdownItem>
              <DropdownItem key="switchDisplayFullscreen" onClick={handleFullscreenMode}>
                <FontAwesomeIcon icon={faExpand} />
                <span>Fullscreen</span>
              </DropdownItem>
            </DropdownList>
          </DropdownGroup>
        )}

      </Dropdown>
    </>
  )
}

export default ToggleOptions