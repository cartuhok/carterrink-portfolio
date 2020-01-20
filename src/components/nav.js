import React from "react"
import styled from "styled-components"


const Nav = styled.nav`
  display: flex; 
  justify-content: space-between; 
  padding: 2em 6em 0em 6em;
  height: 80px;
  @media screen and (max-width: 430px) {
    padding: 1em 1em 0em 1em;
    }
`
const StyledLink = styled.a`
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
  @media screen and (max-width: 430px) {
    font-size: 1.3em;
    }
`


export default () => (
    <Nav>
      <StyledLink href="https://codepen.io/cartuhok">Codepen</StyledLink>
      <StyledLink href="https://github.com/cartuhok">Github</StyledLink>
      <StyledLink href="#work">Work</StyledLink>
      <StyledLink href="#contact">Contact</StyledLink>
    </Nav>
)