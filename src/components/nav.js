import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Nav = styled.nav`
  display: flex; 
  justify-content: space-between; 
  padding: 0px 6em 0px 6em;
`
const StyledLink = styled(props => <Link {...props} />)`
  color: black;
  text-decoration: none;
  font-size: 2em;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`


export default () => (
    <Nav>
      <StyledLink to="/emails/">Codepen</StyledLink>
      <StyledLink to="/emails/">Github</StyledLink>
      <StyledLink to="/emails/">Work</StyledLink>
      <StyledLink to="/emails/">Contact</StyledLink>
    </Nav>
)