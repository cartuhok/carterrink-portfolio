import React from "react"
import styled from "styled-components"

const Bio = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 4em;
  padding: 1em 1em;
`

export default () => (
    <Bio>Hi 👋 I'm Carter, a font-end deisgner located in Boston, MA.  Glad you made it, kick back, have a look around.  Oh, I'm also available for freelancing, drop me a line below.</Bio>
)