import "./globals.css"

export const metadata = {
  title: "PatternFly Chatbot Extension",
  description: "Demo of chatbot extension for PatternFly",
}

// pf-v5-theme-dark

export default function RootLayout({ children }) {
  return (
    <html className="" lang="en">
      <body>{children}</body>
    </html>
  )
}
