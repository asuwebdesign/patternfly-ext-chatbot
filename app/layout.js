import React from 'react'

import "./globals.scss"

export const metadata = {
  title: "PatternFly Chatbot Extension",
  description: "Demo of chatbot extension for PatternFly",
}

export default function RootLayout({ children }) {
  return (
    <html className="" lang="en">
      <body>{children}</body>
    </html>
  )
}
