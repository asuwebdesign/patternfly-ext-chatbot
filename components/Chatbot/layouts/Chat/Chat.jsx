// ============================================================================
// Chatbot Layout - Chat
// ============================================================================

import React from 'react'

// Import PatternFly components
import { Text, TextVariants } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faBars } from '@fortawesome/free-solid-svg-icons'

// Import Chatbot components
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
import QuickTip from '../../components/Main/QuickTip/QuickTip'

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

          {/* Store this conversation and pass through <Chatbot .../> */}
          <Message />
          <Separator type="text" value="Agent joined the chat" />
          <Message />
          <Separator type="date" value="2024-07-08" />
          <Message />
          <QuickTip
            imgSrc="https://cdn.dribbble.com/userupload/15166768/file/original-55c633c1ee5dbc0bb6da2b833b4d125c.png?resize=2048x1536"
            imgAlt="Picture description"
            heading="Quick tip heading"
            description="Quick tip description that can wrap multiple lines as needed." />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          {/* Store this conversation and pass through <Chatbot .../> */}
        
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