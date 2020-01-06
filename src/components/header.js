import React from "react"
import styled from "styled-components"

const Header =styled.h1`
    display: flex;
    font-size: 14vw;
    text-align: center;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    width: 100%;
`

export default props => <Header>{props.headerText}</Header>
