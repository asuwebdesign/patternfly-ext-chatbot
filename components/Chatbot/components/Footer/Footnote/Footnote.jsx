// ============================================================================
// Chatbot Footer - Footnote
// ============================================================================

import React from 'react'

// Import Patternfly components
import { Button, Text, TextVariants } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

// Import Chatbot components
import Popover from '../../Popover/Popover'

// Import styles
import './Footnote.scss'

const Footnote = ({ config }) => {

  const { label, popover } = config

  // Configure popover content
  const popoverBodyContent = (
    <>
      {popover.image.show && <img src={popover.image.src} alt={popover.image.alt} />}
      <Text component={TextVariants.h3}>{popover.title}</Text>
      <Text component={TextVariants.p}>{popover.desc}</Text>
    </>
  )

  const popoverFooterContent = (
    <>
      <Button variant="secondary">Got it</Button>
      {popover.link.show && <Button variant="link" component="a" href={popover.link.url} target="_blank" icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />} iconPosition="end">{popover.link.label}</Button>}
    </>
  )

  return (
    <div className="pf-chatbot__footnote">
      {popover.show && (
        <Popover
          className="pf-chatbot__popover--footnote"
          aria-label="More information"
          bodyContent={popoverBodyContent}
          footerContent={popoverFooterContent}
          minWidth={432}
          maxWidth={432}
          distance={16}
        >
          <Button variant="plain">{label} <FontAwesomeIcon icon={faCircleInfo} /></Button>
        </Popover>
      )}
      {!popover.show && (
        <Text component={TextVariants.small}>{label}</Text>
      )}
    </div>
  )
}

export default Footnote