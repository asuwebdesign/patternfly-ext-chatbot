// ============================================================================
// Chatbot Main - Message - Actions - Feedback Form
// ============================================================================
import React, { useState } from 'react'

// Import PatternFly components
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Form, TextArea, Content, ContentVariants, LabelGroup, Label } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

// Import Chatbot components
import Illustration from './Illustration'

// Import styles
import './FeedbackForm.scss'

const FeedbackForm = () => {

  // Configure visibility
  const [isVisible, setIsVisible] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Configure form
  const [value, setValue] = React.useState()

  // Configure handlers
  const handleDismiss = () => {
    setIsVisible(false)
  }

  return (
    <Card className={`pf-chatbot__feedback-form ${isSubmitted ? 'pf-chatbot__feedback-form--submitted' : ''} ${!isVisible ? 'pf-chatbot__feedback-form--hidden' : ''}`}>

      {!isSubmitted && (
        <>
          <CardHeader>
            <CardTitle>Why did you choose this rating?</CardTitle>
            <Button variant="plain">
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          </CardHeader>
          <CardBody>
            <Form>

              {/* Supplied by consumer */}
              <LabelGroup>
                <Label>Label 1</Label>
                <Label>Label 2</Label>
                <Label>Label 3</Label>
              </LabelGroup>
              <TextArea value={value} onChange={(_event, value) => setValue(value)} aria-label="text area example" />
              <Button type="submit">Submit</Button>
              {/* Supplied by consumer */}

            </Form>
          </CardBody>
        </>
      )}

      {isSubmitted && (
        <>
          <CardBody>
            <div className="pf-chatbot__illustration">
              <Illustration />
            </div>
            <Content component={ContentVariants.h3}>Thank you</Content>
            <Content component={ContentVariants.p}>You have successfully sent your feedback!</Content>
            <Content component={ContentVariants.p}>Thank you for responding.</Content>
          </CardBody>
        </>
      )}

    </Card>
  )
}

export default FeedbackForm