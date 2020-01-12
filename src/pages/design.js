import React from "react"
import Back from "../components/Back"
import styled from "styled-components"
import DesignGrid from "../components/DesignGrid"

const WebDesc =styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.2em;
  padding: 1em 3em;
  @media screen and (max-width: 430px) {
    font-size: 1em;
    padding: 1em 1em;
    }
`


export default () => (
  <div>
    <Back />
    <DesignGrid />
    <WebDesc><h1>Collection of dribbble shots, mostly made in Figma.</h1></WebDesc>
  </div>
)