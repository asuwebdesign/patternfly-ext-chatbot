// ============================================================================
// Chatbot Main - Message - Content - List
// ============================================================================

import React from 'react'

// Import PatternFly components
import { List, ListItem } from '@patternfly/react-core'

// Import styles
import './ListMessage.scss'

const ListMessage = () => {

  // Support: ul, ol

  return (
    <div className="pf-chatbot__message-list">
      <List>
        <ListItem>First</ListItem>
        <ListItem>Second</ListItem>
        <ListItem>Third</ListItem>
      </List>
    </div>
  )
}

export default ListMessage