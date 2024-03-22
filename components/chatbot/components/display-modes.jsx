import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownList, Divider, MenuToggle } from '@patternfly/react-core'
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon'

export const DropdownWithKebab = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onToggleClick = () => {
    setIsOpen(!isOpen)
  }

  const onSelect = (_event, value) => {
    console.log('selected', value)
    setIsOpen(false)
  }

  return (
    <Dropdown
      isOpen={isOpen}
      onSelect={onSelect}
      onOpenChange={isOpen => setIsOpen(isOpen)}
      toggle={toggleRef => (
        <MenuToggle
          ref={toggleRef}
          aria-label="kebab dropdown toggle"
          variant="plain"
          onClick={onToggleClick}
          isExpanded={isOpen}
        >
          <EllipsisVIcon />
        </MenuToggle>
      )}
      shouldFocusToggleOnSelect
    >
      <DropdownList>
        <DropdownItem value={0} key="chatbot-display-overlay">
          Overlay
        </DropdownItem>
        <DropdownItem value={1} key="chatbot-display-dock">
          Dock
        </DropdownItem>
        <DropdownItem value={2} key="chatbot-display-fullscreen">
          Fullscreen
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  )
}
