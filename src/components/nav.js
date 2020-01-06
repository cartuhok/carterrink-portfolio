import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Nav = styled.nav`
  display: flex; 
  justify-content: space-between; 
  padding: 2em 6em 0px 6em;
  height: 80px;
`
const StyledLink = styled(props => <Link {...props} />)`
  color: black;
  text-decoration: none;
  font-size: 2em;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: .2em;
  &:after {
    content: '';
    left: 0;
    display: inline-block;
    height: .2em;
    width: 100%;
    border-bottom: 4px solid;
    margin-top: 10px;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: scale(0,1);
    transform: scale(0,1);
  }
  &:hover:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`


export default () => (
    <Nav>
      <StyledLink to="/emails/">Codepen</StyledLink>
      <StyledLink to="/emails/">Github</StyledLink>
      <StyledLink to="/emails/">Work</StyledLink>
      <StyledLink to="/emails/">Contact</StyledLink>
    </Nav>
)