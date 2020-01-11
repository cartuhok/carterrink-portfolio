import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Back = styled.div`
  padding: 2em 0em 0em 3em;
  @media screen and (max-width: 430px) {
      padding: 1em 0em 0em 1.5em;
    }
`


export default () => (
  <Back>
<Link to="/"><svg width="45" height="35" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.661 2L3 17.5L18.661 33M3.71186 17.5H45" stroke="black" stroke-width="3"/>
</svg></Link>



  </Back>
)