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

const Footnote = () => {

  // Optional. Upgrade to text. Upgrade to popover.

  // Footnote popover
  // - image
  // - heading
  // - desc
  // - got it button (dismiss)
  // - ext link text
  // - ext link url

  const popoverBodyContent = (
    <>
      <img src="https://cdn.dribbble.com/userupload/10651749/file/original-8a07b8e39d9e8bf002358c66fce1223e.gif" alt="Description of image" />
      <Text component={TextVariants.h3}>Verify accuracy</Text>
      <Text component={TextVariants.p}>{`While Lightspeed strives for accuracy, there's always a possibility of errors. It's a good practice to verify critical information from reliable sources, especially if it's crucial for decision-making or actions.`}</Text>
    </>
  )

  const popoverFooterContent = (
    <>
      <Button variant="secondary">Got it</Button>
      <Button variant="link" icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />} iconPosition="end">Learn more</Button>
    </>
  )

  return (
    <div className="pf-chatbot__footnote">
      <Popover
        className="pf-chatbot__popover--footnote"
        aria-label="More information"
        // headerContent={popoverHeaderContent}
        bodyContent={popoverBodyContent}
        footerContent={popoverFooterContent}
        minWidth={432}
        maxWidth={432}
        distance={16}
      >
        <Button variant="plain">Lightspeed uses AI. Check for mistakes. <FontAwesomeIcon icon={faCircleInfo} /></Button>
      </Popover>
    </div>
  )
}

export default Footnote