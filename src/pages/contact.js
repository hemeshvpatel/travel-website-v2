import React from "react"
import styled from "styled-components"
import Background from "../assets/images/contact-background.jpg"
import Navbar from "../components/Navbar"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import Footer from "../components/Footer"

const contact = () => {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      <AboutTagline>Contact</AboutTagline>
      <Footer />
    </Container>
  )
}

export default contact

const Container = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${Background}) no-repeat center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
`

const AboutTagline = styled.div`
  height: 90vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
`
