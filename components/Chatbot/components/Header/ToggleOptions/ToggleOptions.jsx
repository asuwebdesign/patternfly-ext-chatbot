// ============================================================================
// Chatbot Header - Toggle Options
// ============================================================================
import React from 'react'

// Import PatternFly components
import { Button, Icon, Dropdown, DropdownList, DropdownItem, Divider } from '@patternfly/react-core'

// Import Chatbot components
import Tooltip from '@/components/Chatbot/components/Tooltip/Tooltip'
import RHUIIconEllipsisHorizontalFill from './Icon'

// Import styles
import './ToggleOptions.scss'

const ToggleOptions = () => {

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

  return (
    <>
      <Dropdown
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
        <DropdownList>
          {/* Configurable by consumer */}
          <DropdownItem value={0} key="action">
            Action
          </DropdownItem>
          <DropdownItem value={1} key="link" to="#default-link2" onClick={ev => ev.preventDefault()}>
            Link
          </DropdownItem>
          <DropdownItem value={2} isDisabled key="disabled action">
            Disabled Action
          </DropdownItem>
          <DropdownItem value={3} isDisabled key="disabled link" to="#default-link4">
            Disabled Link
          </DropdownItem>
          <Divider component="li" key="separator" />
          <DropdownItem value={4} key="separated action">
            Separated Action
          </DropdownItem>
          <DropdownItem value={5} key="separated link" to="#default-link6" onClick={ev => ev.preventDefault()}>
            Separated Link
          </DropdownItem>
          {/* Configurable by consumer */}
        </DropdownList>
      </Dropdown>
    </>
  )
}

export default ToggleOptions