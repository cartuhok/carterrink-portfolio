import React from "react"
import styled from "styled-components"

const ThreeUp = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    justify-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 3em 0em;
    @media screen and (max-width: 920px) {
        grid-template-columns: 1fr;
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
`
const Img =styled.img`
  width: 300px;
  height: auto;
`

export default () => (
    <ThreeUp>
     <Card>
        <Title>Email</Title>
        <Img src="https://i.imgur.com/5CpWkJN.png"></Img>
     </Card>
     <Card>
        <Title>Web</Title>
        <Img src="https://i.imgur.com/Ay3bz1M.png"></Img>
     </Card>
     <Card>
        <Title>Design</Title>
        <Img src="https://i.imgur.com/7wo3oYX.png"></Img>
     </Card>
    </ThreeUp>
)