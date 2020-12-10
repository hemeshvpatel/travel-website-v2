import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
//When importing React Icons, you import from react-icons/[first two letters of the icon name]
import { FaBars, FaTimes } from "react-icons/fa"
import { DiScala } from "react-icons/di"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  const handleClick = () => setClick(!click)

  return (
    <>
      <Nav active={scroll} click={click}>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            TRVL
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            {menuData.map((item, index) => (
              <NavItem key={index}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </NavItem>
            ))}
          </NavMenu>
          <NavBtn>
            <Button primary="true" round="true" to="/bookaflight">
              Book a Flight
            </Button>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar

//Styled Components
//Default rem is 16px

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  position: relative;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "#1f1f1f" : "transparent")};
    opacity: 0.8;
    transition: 0.8s all ease;
  }
`

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
`

const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`

const NavIcon = styled(DiScala)`
  margin: 0 0.5rem 0 2rem;
`

const NavItem = styled.li`
  height: 90px;
  margin: 1rem;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #ff4040;
      transition: all 0.3s ease;
    }
  }
`

const MobileIcon = styled.div`
  display: none;
  color: #fff;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 0.8;
    transition: all 0.2s ease;
    background: #1f1f1f;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  font-size: 1.5rem !important;

  @media screen and (max-width: 960px) {
    display: none;
  }
`
