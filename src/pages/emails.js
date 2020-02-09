import React from "react"
import Back from "../components/Back"
import styled from "styled-components"
import EmailGrid from "../components/EmailGrid"

const EmailDesc =styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2em;
  padding: 1em 3em;
  @media screen and (max-width: 430px) {
    font-size: 1em;
    padding: 1em 1em;
    }
`


export default () => (
  <div>
    <Back />
    <EmailGrid />
    <EmailDesc>
        HTML Email Templates that even look great in Outlook. Ready to be sent with any marketing platform like Constant Contact, Mailchimp, GetResponse, Iterable, and Pardot.  Checked in Litmus for responsiveness and email client compatibility.
    </EmailDesc>
  </div>
)