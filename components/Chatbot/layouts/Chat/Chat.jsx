// ============================================================================
// Chatbot Layout - Chat
// ============================================================================

import React, { useState, useEffect, useRef } from 'react'

// Import PatternFly components
import { Backdrop } from '@patternfly/react-core'

// Import Chatbot components
import Brand from '../../components/Brand/Brand'
import ToastAlerts from '../../components/ToastAlerts/ToastAlerts'
import Header from '@/components/Chatbot/components/Header/Header'
import Menu from '../../components/Menu/Menu'
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

const Chat = ({ config = {}, displayMode, onModeChange }) => {

  // Configure default values
  const {

  } = config.global || {}

  const {

    footnote = {
      show: true,
      label: 'Lightspeed uses AI. Check for mistakes.',
      popover: {
        show: true,
        image: {
          show: true,
          src: 'https://cdn.dribbble.com/userupload/10651749/file/original-8a07b8e39d9e8bf002358c66fce1223e.gif',
          alt: 'Example image for footnote popover'
        },
        title: 'Verify accuracy',
        desc: `While Lightspeed strives for accuracy, there's always a possibility of errors. It's a good practice to verify critical information from reliable sources, especially if it's crucial for decision-making or actions.`,
        link: {
          show: true,
          label: 'Learn more',
          url: 'https://www.redhat.com/'
        }
      }
    }
  } = config.chat || {}

  // Configure toast alerts
  const [alerts, setAlerts] = React.useState([])

  // Add alert
  const addAlert = (title, variant, key) => {
    setAlerts(prevAlerts => [...prevAlerts, {
      title,
      variant,
      key
    }])
  }

  // Configure time
  const [formattedTime, setFormattedTime] = useState('')

  const formatTime = (date) => {
    let hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'pm' : 'am'

    // Convert 24-hour time to 12-hour time
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'

    // Pad minutes with leading zero if needed
    const minutesStr = minutes < 10 ? '0' + minutes : minutes

    return `${hours}:${minutesStr}${ampm}`
  }


  // Configure messages
  const [messages, setMessages] = useState([])
  const messagesEndRef = useRef(null)

  // Configure handlers
  const handleSend = (input) => {

    // Get current timestamp
    const currentTime = new Date()
    const formattedCurrentTime = formatTime(currentTime)
    setFormattedTime(formattedCurrentTime)

    // User response
    setMessages([...messages, {
      role: 'user',
      time: formattedCurrentTime,
      content: [
        {
          type: 'text',
          text: input
        },
      ]
    }])

    // Bot response after timeout (will need to change later)
    setTimeout(() => {
      const botResponse = generateBotResponse(input)

      setMessages((prevMessages) => [...prevMessages, {
        role: 'bot',
        time: formattedCurrentTime,
        content: botResponse
      }])
    }, 1000)

  }

  // Logic to determine how bot should respond (will need to change later)
  const generateBotResponse = (userInput) => {
    const keywords = [
      'text',
      'list',
      'ordered-list',
      'image',
      'video',
      'quick-reply-boolean',
      'quick-reply-inline',
      'quick-reply-stack',
      'inline-code',
      'codeblock',
      'table'
    ]
    const result = []

    keywords.forEach(keyword => {
      let position = userInput.indexOf(keyword)
      while (position !== -1) {

        if (keyword === 'text') {
          result.push(
            {
              type: 'text',
              text: <>{`Single line text response`}</>
            },
            {
              type: 'text',
              text: <>{`Multi-line text response that wraps and can be used to display blocks of text, like paragraphs.`}</>
            },
            {
              type: 'text',
              text: <>Inline code snippets, like: <code>{'push()'}</code></>
            }
          )
        }

        if (keyword === 'list') {
          result.push(
            {
              type: 'text',
              text: 'Responses will often include bullet lists to describe unordered information:'
            },
            {
              type: 'list',
              items: ['Item 1', 'Item 2', 'Item 3'],
              ordered: false
            }
          )
        }

        if (keyword === 'ordered-list') {
          result.push(
            {
              type: 'text',
              text: 'Responses will often include numbered lists to describe ordered information:'
            },
            {
              type: 'list',
              items: ['Item 1', 'Item 2', 'Item 3'],
              ordered: true
            }
          )
        }

        if (keyword === 'image') {
          result.push(
            {
              type: 'text',
              text: 'Images will maintain proportions'
            },
            {
              type: 'image',
              image: {
                src: 'https://cdn.dribbble.com/userupload/15532609/file/original-e98aacdfdd1aad5b1a07d597e7771735.jpg?resize=2048x1536',
                alt: 'Mockup of 3 iPhones on blue background'
              }
            }
          )
        }

        if (keyword === 'video') {
          result.push(
            {
              type: 'text',
              text: 'Videos will maintain proportions and can play inline or fullscreen. They also support other attributes like title, poster, and thumbnails'
            },
            {
              type: 'video',
              video: {
                title: 'Sprite Fight',
                src: 'https://files.vidstack.io/sprite-fight/720p.mp4',
                poster: {
                  src: 'https://files.vidstack.io/sprite-fight/poster.webp',
                  alt: 'Girl walks into campfire with gnomes surrounding her friend ready for their next meal!'
                },
                thumbnails: 'https://files.vidstack.io/sprite-fight/thumbnails.vtt'
              }
            }
          )
        }

        if (keyword === 'quick-reply-boolean') {
          result.push({
            type: 'quick-reply',
            items: ['Yes', 'No'],
            stacked: false
          })
        }

        if (keyword === 'quick-reply-inline') {
          result.push({
            type: 'quick-reply',
            items: ['Microsoft Edge', 'Google Chrome', 'Mozilla Firefox', 'Apple Safari', 'Internet Explorer'],
            stacked: false
          })
        }

        if (keyword === 'quick-reply-stack') {
          result.push({
            type: 'quick-reply',
            items: ['Help me with an access issue', 'Show my critical vulnerabilities', 'Create new integrations', 'Get recommendations from an advisor', 'Something else'],
            stacked: true
          })
        }

        if (keyword === 'inline-code') {
          result.push({
            type: 'text',
            text: <>The <code>{'push()'}</code> method adds one or more elements to the end of an array and returns the new length of the array.</>
          })
        }

        if (keyword === 'codeblock') {
          result.push({
            type: 'codeblock',
            language: 'yaml',
            code: `application:
  name: FakeApp
  version: 1.0.0
  environment: production

database:
  host: db.fakeapp.com
  port: 5432
  name: fakeapp_db
  user: fakeuser
  password: fakepassword

server:
  host: api.fakeapp.com
  port: 8080

logging:
  level: INFO
  format: "%(asctime)s - %(name)s - %(levelname)s - %(message)s"

auth:
  jwt_secret: supersecretjwtkey
  token_expiration_minutes: 60

features:
  enable_feature_x: true
  enable_feature_y: false
  enable_feature_z: true`
          })
        }

        if (keyword === 'table') {
          result.push({
            type: 'table',
            table: {
              caption: 'Simple table caption',
              columns: ['Column header', 'Column header', 'Column header'],
              rows: [['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']]
            }
          })
        }

        position = userInput.indexOf(keyword, position + 1)
      }
    })

    return result
  }

  // Scroll to bottom of conversation when messages updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])


  // Menu panel
  const [isMenuExpanded, setIsMenuExpanded] = React.useState(false)
  const drawerRef = React.useRef()

  const onMenuExpand = () => {
    drawerRef.current && drawerRef.current.focus()
  }

  return (
    <>
      <ToastAlerts alerts={alerts} />
      <Header>
        <div className="pf-chatbot__title">
          <Brand config={config} />
        </div>
        <ToggleMenu isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded} />
        <ToggleOptions isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded} onModeChange={onModeChange} />
      </Header>
      <Menu drawerRef={drawerRef} config={config} displayMode={displayMode} isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded} onMenuExpand={onMenuExpand} />
      {displayMode !== 'pf-chatbot--fullscreen' && isMenuExpanded && <Backdrop />}
      <Main>
        <Messages>

          {/* Store this conversation and pass through <Chatbot .../> */}
          {/* <Message addAlert={addAlert} />
          <Separator type="text" value="Agent joined the chat" />
          <Message addAlert={addAlert} />
          <Separator type="date" value="2024-07-08" />
          <Message addAlert={addAlert} />
          <QuickTip
            imgSrc="https://cdn.dribbble.com/userupload/15166768/file/original-55c633c1ee5dbc0bb6da2b833b4d125c.png?resize=2048x1536"
            imgAlt="Picture description"
            heading="Quick tip heading"
            description="Quick tip description that can wrap multiple lines as needed." />
          <Message addAlert={addAlert} /> */}
          {/* Store this conversation and pass through <Chatbot .../> */}

          {/* Default view when no messages exist in current conversation */}
          {messages.length === 0 && (
            <>
              {/* <div>Default message view</div> */}
            </>
          )}

          {/* Display all messages in current conversation */}
          {messages.map((message, index) => <Message key={index} message={message} addAlert={addAlert} displayMode={displayMode} />)}
          <div ref={messagesEndRef} aria-hidden="true" />

        </Messages>
      </Main>
      <Footer>
        <MessageBar onSend={handleSend} />
        {footnote.show && <Footnote config={footnote} />}
      </Footer>
    </>
  )
}

export default Chat