import React from "react"
import styled from "styled-components"

const Bio = styled.div`
  max-width: 100%;
  border-top: 1px solid black;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 2em;
  padding: 1em 2em 0em 2em;

  @media screen and (max-width: 430px) {
        font-size: 1.5em;
        padding: 1em 0.5em;
        margin: 1em 0em;
    }
`
const BioDeets = styled.div`
  max-width: 100%;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 2em;
  padding: 1em 2em 2em 2em;
  line-height: 1.4em;
  
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
    <div>
    <Bio>Hi <span role="img" aria-label="waving hand emoji" style={{ whiteSpace: `nowrap`, display: `contents` }}>👋</span>, I'm Carter Rink and I am a frontend developer and designer.</Bio>
    <BioDeets> I'm currently a full-time developer at WGBH, a PBS and NPR station located in Boston. I also do freelance projects on the side. I specialize in web and email development, with an eye for design. Take a look around my website to see examples of my work, and please <Link href="mailto:carter.m.rink@gmail.com"> feel free to message</Link>&nbsp;me for more information.</BioDeets>
    </div>
)