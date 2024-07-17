"use client"

import React, { useState, useEffect } from 'react'
import Image from "next/image"
import styles from "./page.module.css"

import Testing from '@/components/testing'


// Import styles
import '@patternfly/react-core/dist/styles/base.css'

import Chatbot from '@/components/Chatbot/Chatbot'
import ChatbotToggle from '@/components/Chatbot/components/ChatbotToggle/ChatbotToggle'

// ============================================================================
// FRONT-END LOGIC
// 
// - Splash (minimum setTimeout or something else)
// - Terms (check useState)
// - Privacy (check useState)
// - Declined (if declined)
// - Onboarding (check useState if enabled)
// - Chat: Welcome
// 
// ============================================================================

const App = () => {

  // Toggle visibility support
  const [chatbotVisible, setChatbotVisible] = useState(false)
  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible)
  }

  // Display mode support
  const [displayMode, setDisplayMode] = useState('')
  const handleDisplay = (className) => {
    setDisplayMode(className)
  }

  // ---- Sample content ----
  const splashLogoSrc = '/logo-chatbot.svg'
  const splashLogoAlt = 'Red Hat Lightspeed logo'
  // ---- Sample content ----

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className="logo"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>

      <Testing handleDisplay={handleDisplay} />

      <ChatbotToggle label="Chatbot" chatbotVisible={chatbotVisible} toggleChatbot={toggleChatbot} />

      <Chatbot
        displayMode={displayMode}

        layout="splash"
        splashLogoSrc={splashLogoSrc}
        splashLogoAlt={splashLogoAlt}
        
        // layout="terms-of-use"
        // termsOfUseTitle={termsOfUseTitle}
        // termsOfUseAgreement={termsOfUseAgreement}

        // layout="privacy-statement"
        // privacyStatementTitle={privacyStatementTitle}
        // privacyStatementAgreement={privacyStatementAgreement}

        // layout="declined-legal"
        // declinedLegalTitle={declinedLegalTitle}
        // declinedLegalContent={declinedLegalContent}

        // layout="onboarding"

        // layout="chat"

        chatbotVisible={chatbotVisible}
      />
    </main>
  )
}

export default App