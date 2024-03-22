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
        <Divider key="separator" />
        <DropdownItem value={4} key="separated action">
          Separated Action
        </DropdownItem>
        <DropdownItem value={5} key="separated link" to="#default-link6" onClick={ev => ev.preventDefault()}>
          Separated Link
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  )
}
