"use client"

// Import packages
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"

// Import styles
import '@patternfly/react-core/dist/styles/base.css'
import './chatbot.scss'

// Import components
import { DropdownWithKebab } from './components/display-modes'
import { Avatar } from '@patternfly/react-core'
import { TextArea } from '@patternfly/react-core'

const Chatbot = ({ messages, onMessageSubmit, chatbotVisible }) => {
  const [inputValue, setInputValue] = useState('');
  const [listening, setListening] = useState(false);
  const [speechRecognition, setSpeechRecognition] = useState(null);
  const [chatbotMode, setChatbotMode] = useState('overlay'); // Default mode is 'overlay'
  const [showOptions, setShowOptions] = useState(false);
  const [showOldConversations, setShowOldConversations] = useState(false);

  // Function to simulate bot response
  const getBotResponse = (userMessage) => {
    // Implement your chatbot logic here

    // For demo purposes, let's output different responses to show the pattern options
    if (userMessage.includes('card')) {
      return { text: 'Somebody wants a card, right?', sender: 'bot' }
    }

    if (userMessage.includes('table')) {
      return { text: 'Somebody wants a table, right?', sender: 'bot' }
    }

    return { text: `Oh, hello governor: ${userMessage}`, sender: 'bot' };
  };

  // Effect to simulate bot response after each user message
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].sender === 'user') {
      const botResponse = getBotResponse(messages[messages.length - 1].text);
      setTimeout(() => {
        onMessageSubmit(botResponse);
      }, 500);
    }
  }, [messages, onMessageSubmit]);

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      // Initialize SpeechRecognition
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const result = event.results[0][0].transcript;
        setInputValue(result);
        recognition.stop();
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        recognition.stop();
      };

      setSpeechRecognition(recognition);
    }
  }, []);

  const startListening = () => {
    if (speechRecognition) {
      speechRecognition.start();
      setListening(true);
    }
  };

  const stopListening = () => {
    if (speechRecognition && listening) {
      speechRecognition.stop();
      setListening(false);
    }
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message to the chat
    onMessageSubmit({ text: inputValue, sender: 'user' });
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleMessageSubmit(e);
    }
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleOldConversations = () => {
    setShowOldConversations(!showOldConversations);
  };

  const toggleChatbotMode = (mode) => {
    setChatbotMode(mode);
  };

  const motionChatbot = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: '16px' }
  }

  return (
    <motion.div className={`chatbot chatbot--${chatbotMode}`} variants={motionChatbot} initial="closed" animate={chatbotVisible ? "open" : "closed"}>
      <div className="chatbot__header">
        <h1>Chatbot</h1>
        <div>Current display mode: {chatbotMode}</div>
        <div className="header-options">
          <button className="options-toggle" onClick={toggleOptions}>Options</button>
          <button className="conversations-toggle" onClick={toggleOldConversations}>Old Conversations</button>
        </div>
        <DropdownWithKebab />
        {showOptions && (
          <ul className="chatbot-options">
            <li onClick={() => toggleChatbotMode('overlay')}>Overlay</li>
            <li onClick={() => toggleChatbotMode('dock')}>Dock</li>
            <li onClick={() => toggleChatbotMode('fullscreen')}>Fullscreen</li>
          </ul>
        )}
        {showOldConversations && (
          <div className="old-conversations">
            <h2>Old Conversations</h2>
            <ul>
              {/* Render your old chat conversations here */}
              <li>Title 1</li>
              <li>Title 2</li>
              <li>Title 3</li>
            </ul>
          </div>
        )}
      </div>
      <div className="chatbot__main">
        <div className="chatbot__messages">
          {messages.map((message, index) => (
            <motion.div key={index} className={message.sender === 'bot' ? 'chatbot__system-message' : 'chatbot__user-message'} initial={{ y: '-8px', opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              {message.sender === 'bot' && <Avatar src="https://cdn.dribbble.com/users/161873/screenshots/18122691/media/4ca116cec9f7e545feb52646d0dc987f.jpg?resize=1600x1200&vertical=center" alt="avatar" />}
              {message.sender === 'user' && <Avatar src="https://cdn.dribbble.com/users/17243/screenshots/17080454/media/5f42e331394bb72e2556c43b2f9c644a.png?resize=1600x1200&vertical=center" alt="avatar" />}
              {message.text.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="chatbot__footer">
        <form onSubmit={handleMessageSubmit}>
          <TextArea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            rows={3} // Set the number of visible text lines
            aria-label="text area example"
          />
          <div className="character-counter">{inputValue.length} characters</div>
          <button type="button" onClick={listening ? stopListening : startListening}>
            {listening ? 'Stop Listening' : 'Start Listening'}
          </button>
          <button type="submit">Send</button>
        </form>
        <div className="chatbot__footnote">
          <p>Chatbot can make mistakes. Consider checking important information.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Chatbot;





