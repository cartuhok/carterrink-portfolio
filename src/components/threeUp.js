import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ThreeUp = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    justify-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 3em 0em;
    @media screen and (max-width: 430px) {
        grid-template-columns: 1fr;
        padding: 0em 0em;
    }
`
const Card =styled.div`
  max-width: 300px;
  color: black;
  text-decoration: none;
  font-size: 3em;
`
const Title =styled.h1`
  max-width: 300px;
  color: black;
  text-decoration: none;
  font-size: 1em;
  @media screen and (max-width: 430px) {
       text-align:center;
    }
`
const Img =styled.img`
  width: 300px;
  height: auto;
  -webkit-box-shadow: 0.222rem 0.222rem 0.444rem rgba(211, 211, 211, 0.75), calc(0.222rem * -1) calc(0.222rem * -1) 0.444rem rgba(255, 255, 255, 0.75);
box-shadow:0.222rem 0.222rem 0.444rem rgba(211, 211, 211, 0.75), calc(0.222rem * -1) calc(0.222rem * -1) 0.444rem rgba(255, 255, 255, 0.75);
`

export default () => (
    <ThreeUp id="work">
     <Card>
        <Link style={{ textDecoration: `none` }} to="/emails/"><Title>Email</Title>
        <Img src="https://i.imgur.com/UuDgXYz.png"></Img></Link>
     </Card>
     <Card>
     <Link style={{ textDecoration: `none` }} to="/web/"><Title>Web</Title>
        <Img src="https://i.imgur.com/CzUN5XA.png"></Img></Link>
     </Card>
     <Card>
     <Link style={{ textDecoration: `none` }} to="/design/"><Title>Design</Title>
        <Img src="https://i.imgur.com/T0BmNAG.png"></Img></Link>
     </Card>
    </ThreeUp>
)