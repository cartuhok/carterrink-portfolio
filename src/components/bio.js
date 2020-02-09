import React from "react"
import styled from "styled-components"

const Bio = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid black;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 3.5em;
  padding: 1em 1.4em;
  @media screen and (max-width: 430px) {
        font-size: 1.5em;
        padding: 1em 0.5em;
        margin: 1em 0em;
    }
`

const Link = styled.a`

    color: #000000;
`

export default () => (
    <Bio>Hi <span role="img" aria-label="waving hand emoji" style={{ whiteSpace: `nowrap`, display: `contents` }}>👋</span>, I'm a font-end developer and designer located in Boston. I'm currently a developer at WGBH. They make some great shows like Frontline and NOVA.  I'm also available to freelance. I specialize in web and email development. Take a look around or <Link href="mailto:carter.m.rink@gmail.com">feel free to reach out</Link>.</Bio>
)