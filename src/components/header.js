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
    transition: 0.2s;
    &:active {
        color: #f2f2f2;
        text-shadow: 0.222rem 0.222rem 0.444rem rgba(211, 211, 211, 0.75), calc(0.222rem * -1) calc(0.222rem * -1) 0.444rem rgba(255, 255, 255, 0.75);
    }
    ::selection {
        color: #000000;
    }
`

export default props => <Header>{props.headerText}</Header>
