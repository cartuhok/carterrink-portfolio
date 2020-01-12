import React from "react"
import Back from "../components/Back"
import styled from "styled-components"
import WebGrid from "../components/WebGrid"

const EmailDesc =styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.5em;
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

  </div>
)