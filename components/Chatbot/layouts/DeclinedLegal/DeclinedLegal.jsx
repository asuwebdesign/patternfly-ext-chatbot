// ============================================================================
// Chatbot Layout - Declined Legal
// ============================================================================

import React from 'react'

// Import PatternFly components
import { Button, Text, TextVariants } from '@patternfly/react-core'

// Import Chatbot components
import Header from '@/components/Chatbot/components/Header/Header'
import Main from '@/components/Chatbot/components/Main/Main'
import Footer from '@/components/Chatbot/components/Footer/Footer'
import Illustration from './Illustration'

// Import styles
import './DeclinedLegal.scss'

const DeclinedLegal = ({ config }) => {

  const { title, content, primaryButton, secondaryButton, tertiaryButton } = config.declinedLegal

  return (
    <>
      <Header>
        <div className="pf-chatbot__illustration">
          <Illustration />
        </div>
        <Text component={TextVariants.h1}>{title}</Text>
      </Header>
      <Main>
        <Text component={TextVariants.p}>{content}</Text>
      </Main>
      <Footer>
        <Button>{primaryButton.label}</Button>
        {secondaryButton.show && <Button variant="tertiary" component="a" href={secondaryButton.url} target="_blank">{secondaryButton.label}</Button>}
        {tertiaryButton.show && <Button variant="tertiary" component="a" href={tertiaryButton.url} target="_blank">{tertiaryButton.label}</Button>}
      </Footer>
    </>
  )
}

export default DeclinedLegal