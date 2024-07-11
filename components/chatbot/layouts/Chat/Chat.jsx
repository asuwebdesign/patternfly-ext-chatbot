// ============================================================================
// Chatbot Layout - Chat
// ============================================================================

import React from 'react'

// Import PatternFly components
import { Button, Text, TextVariants } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faBars } from '@fortawesome/free-solid-svg-icons'

// Import Chatbot components
import Tooltip from '@/components/Chatbot/components/Tooltip/Tooltip'
import Header from '@/components/Chatbot/components/Header/Header'
import Main from '@/components/Chatbot/components/Main/Main'
import Footer from '@/components/Chatbot/components/Footer/Footer'
import Message from '@/components/Chatbot/components/Main/Message/Message'
import MessageBar from '@/components/Chatbot/components/Footer/MessageBar/MessageBar'
import Footnote from '@/components/Chatbot/components/Footer/Footnote/Footnote'
import ToggleMenu from '../../components/Header/ToggleMenu/ToggleMenu'
import ToggleOptions from '../../components/Header/ToggleOptions/ToggleOptions'
import Messages from '../../components/Main/Messages/Messages'
import Separator from '../../components/Main/Separator/Separator'

// Import styles
import './Chat.scss'

const Chat = () => {

  return (
    <>
      <Header>
        {/* Chatbot title */}
        <div className="pf-chatbot__title">
          <Text component={TextVariants.h1}>Red Hat</Text>
        </div>

        <ToggleMenu />
        <ToggleOptions />

        {/* Menu panel */}
        {/* Options dropdown */}
      </Header>
      <Main>
        <Messages>
          <Message />
          <Separator type="text" value="Agent joined the chat" />
          <Message />
          <Separator type="date" value="2024-07-08" />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </Messages>
      </Main>
      <Footer>
        <MessageBar />
        <Footnote />
      </Footer>
    </>
  )
}

export default Chat