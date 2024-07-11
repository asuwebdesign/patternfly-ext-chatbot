// ============================================================================
// Chatbot Layout - Privacy Statement
// ============================================================================

import React from 'react'

// Import PatternFly components
import { Button, Text, TextVariants } from '@patternfly/react-core'

// Import Chatbot components
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import Illustration from './Illustration'

// Import styles
import './PrivacyStatement.scss'

const PrivacyStatement = ({ privacyStatementTitle, privacyStatementAgreement }) => {

  const title = privacyStatementTitle ? privacyStatementTitle : 'Privacy statement'
  const content = privacyStatementAgreement ? privacyStatementAgreement : 'No agreement has been provided'

  return (
    <>
      <Header>
        <div className="pf-chatbot__illustration">
          <Illustration />
        </div>
        <Text component={TextVariants.h1}>{title}</Text>
      </Header>
      <Main>{content}</Main>
      <Footer>
        <Button variant="tertiary">Decline</Button>
        <Button>Accept</Button>
      </Footer>
    </>
  )
}

export default PrivacyStatement