import React from "react"
import styled from "styled-components"
import Background from "../assets/images/gallery-background.jpg"
import Navbar from "../components/Navbar"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import Footer from "../components/Footer"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { regex: "/Gallery/" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 600, maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <ImageContainer>
        <GlobalStyle />
        <Navbar />
        <ImageGrid>
          {data.allFile.edges.map((image, key) => (
            <ImageItem key={key} fluid={image.node.childImageSharp.fluid} />
          ))}
        </ImageGrid>
        <Footer />
      </ImageContainer>
    </>
  )
}

export default Gallery

const ImageContainer = styled.div`
  background: #1f1f1f;
`

const ImageGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: mimmax(50px, auto);
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 32px;
`

const ImageItem = styled(Img)`
  &:nth-child(5) {
    grid-column-end: span 2;
  }

  &:nth-child(9) {
    grid-column-end: span 2;
    grid-row-start: 4;
  }
`
