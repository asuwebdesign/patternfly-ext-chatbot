// ============================================================================
// Chatbot Header - Options
// ============================================================================
import React from 'react'

// Import PatternFly components
import { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core'

// Import styles
import './Options.scss'

const Options = () => {
  return (
    <Menu>
      <MenuContent>
        <MenuList>
          <MenuItem itemID={0}>Item</MenuItem>
          <MenuItem itemID={1}>Item</MenuItem>
          <MenuItem itemID={2}>Item</MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  )
}

export default Options