"use client"

import React, { useState } from 'react';
import Chatbot from '@/components/chatbot';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [chatbotVisible, setChatbotVisible] = useState(false);

  const handleMessageSubmit = (message) => {
    setMessages([...messages, message]);
  };

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  return (
    <div className="app">
      <Chatbot messages={messages} onMessageSubmit={handleMessageSubmit} chatbotVisible={chatbotVisible} />
      <button onClick={toggleChatbot} className="chatbot__toggle">
        {chatbotVisible ? 'Hide Chatbot' : 'Show Chatbot'}
      </button>
    </div>
  );
};

export default App;
