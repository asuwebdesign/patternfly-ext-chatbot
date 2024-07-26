// ============================================================================
// Chatbot Layout - Chat - Welcome
// ============================================================================
import React from 'react'

// Import styles
import './Welcome.scss'
import { Content, ContentVariants, Card, CardHeader, CardTitle, CardBody, CardFooter } from '@patternfly/react-core'

const Welcome = () => {

  const id1 = 'clickable-card-input-1'
  const id2 = 'clickable-card-input-2'
  const id3 = 'clickable-card-input-3'

  return (
    <div className="pf-chatbot--layout--welcome">
      <Content component={ContentVariants.h1}>
        <span className="pf-chatbot__hello">Hello, Ran</span>
        <br />
        <span className="pf-chatbot__question">How can I help you today?</span>
      </Content>

      <div className="pf-chatbot__prompt-suggestions">
        <Card className="pf-chatbot__prompt-suggestion" isClickable>
          <CardHeader
            selectableActions={{
              // eslint-disable-next-line no-console
              onClickAction: () => console.log(`${id1} clicked`),
              selectableActionId: id1,
              selectableActionAriaLabelledby: 'clickable-card-example-1',
              name: 'clickable-card-example'
            }}
          >
            <CardTitle>Topic 1</CardTitle>
          </CardHeader>
          <CardBody>Prompt message for topic 1.</CardBody>
        </Card>
        <Card className="pf-chatbot__prompt-suggestion" isClickable>
          <CardHeader
            selectableActions={{
              // eslint-disable-next-line no-console
              onClickAction: () => console.log(`${id2} clicked`),
              selectableActionId: id2,
              selectableActionAriaLabelledby: 'clickable-card-example-2',
              name: 'clickable-card-example'
            }}
          >
            <CardTitle>Topic 2</CardTitle>
          </CardHeader>
          <CardBody>Prompt message for topic 2.</CardBody>
        </Card>
        <Card className="pf-chatbot__prompt-suggestion" isClickable>
          <CardHeader
            selectableActions={{
              // eslint-disable-next-line no-console
              onClickAction: () => console.log(`${id3} clicked`),
              selectableActionId: id3,
              selectableActionAriaLabelledby: 'clickable-card-example-3',
              name: 'clickable-card-example'
            }}
          >
            <CardTitle>Topic 3</CardTitle>
          </CardHeader>
          <CardBody>Prompt message for topic 3.</CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Welcome