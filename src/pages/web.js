import React from "react"
import Back from "../components/Back"
import styled from "styled-components"
import WebGrid from "../components/WebGrid"

const WebDesc =styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2em;
  padding: 1em 3em;
  @media screen and (max-width: 430px) {
    font-size: 1em;
    padding: 1em 1em;
    }
`


export default () => (
  <div>
    <Back />
    <WebGrid />
    <WebDesc><span style={{ color: "#e35656" }}>*</span>this site is developed using&nbsp;<a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer" style={{color: `#000000`}}>Gatsby</a>&nbsp;and&nbsp;<a href="https://www.styled-components.com/" target="_blank" rel="noopener noreferrer" style={{color: `#000000`}}>Styled Components</a>. You can see other examples of my work on my&nbsp;<a href="https://codepen.io/cartuhok" target="_blank" rel="noopener noreferrer" style={{color: `#000000`}}>Codepen</a>.</WebDesc>
  </div>
)