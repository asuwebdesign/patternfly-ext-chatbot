// ============================================================================
// Chatbot Footer - Footnote
// ============================================================================

import React from 'react'

// Import Patternfly components
import { Button, Content, ContentVariants } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

// Import Chatbot components
import Popover from '../../Popover/Popover'

// Import styles
import './Footnote.scss'

const Footnote = ({ config }) => {

  // Configure default values
  const { label, popover } = config

  // Popover visibility state
  const [isVisible, setIsVisible] = React.useState(false)

  // Define popover body content
  const popoverBodyContent = (
    <>
      {popover.image.show && <img src={popover.image.src} alt={popover.image.alt} />}
      <Content component={ContentVariants.h3}>{popover.title}</Content>
      <Content component={ContentVariants.p}>{popover.desc}</Content>
    </>
  )

  // Define popover footer content
  const popoverFooterContent = (
    <>
      <Button variant="secondary" onClick={() => setIsVisible(false)}>Got it</Button>
      {popover.link.show && <Button variant="link" component="a" href={popover.link.url} target="_blank" icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />} iconPosition="end">{popover.link.label}</Button>}
    </>
  )

  return (
    <div className="pf-chatbot__footnote">
      {popover.show && (
        <Popover
          className="pf-chatbot__popover--footnote"
          aria-label="More information"
          isVisible={isVisible}
          shouldOpen={(_event, _fn) => setIsVisible(true)}
          shouldClose={(_event, _fn) => setIsVisible(false)}
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
        <Content component={ContentVariants.small}>{label}</Content>
      )}
    </div>
  )
}

export default Footnote