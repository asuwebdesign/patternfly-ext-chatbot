// ============================================================================
// Chatbot Main - Message - Content - List
// ============================================================================

import React from 'react'

// Import PatternFly components
import { List, ListItem, ListComponent, OrderType } from '@patternfly/react-core'

// Import styles
import './ListMessage.scss'

const ListMessage = ({ ordered, items }) => {
  return (
    <div className="pf-chatbot__message-list">
      <List component={ordered && ListComponent.ol} type={ordered && OrderType.number}>
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </div>
  )
}

export default ListMessage