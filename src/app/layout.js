import Nav from "./components/nav"
import { rohnrounded } from './fonts'
import "./globals.css"

export const metadata = {
  title: "Prestige Women's Coaching",
  description: "Transform your body and life with our 6-month coaching program",
  generator: "v0.dev",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rohnrounded.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-rohn">
        <Nav />
        {children}
      </body>
    </html>
  )
}

