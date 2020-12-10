import React from "react"
import Navbar from "./Navbar"
import { GlobalStyle } from "./styles/GlobalStyles"
import Footer from "./Footer"

//adding the Footer here allows every page added to have a Footer
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
