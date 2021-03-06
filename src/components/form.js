import React from "react"
import styled from "styled-components"

const Form = styled.form`
     display: flex;
     justify-content: center;
     flex-direction: column; 
     align-items: center;
     justify-content: center;
     padding: 0em 0em 2em 0em;
`
const Email = styled.input`
  margin-top: 80px;
  width: 800px;
  height: 30px;
  border: 1px solid rgba(0,0,0,.3);
  border-radius: 2px;
  font-size: 12px;
  &:focus {
    outline: none;
    box-shadow: .5px .5px 1.5px rgba(0,0,0,.2);
  }
  @media screen and (max-width: 430px) {
        width: 90vw;
        padding: 1em 0.5em;
    }
`
const Message = styled.textarea`
  width: 800px;
  margin: 30px 30px;
  right: 210px;
  height: 200px;
  border: 1px solid rgba(0,0,0,.3);
  border-radius: 2px;
  font-size: 12px;
  &:focus {
    outline: none;
    box-shadow: .5px .5px 1.5px rgba(0,0,0,.2);
  }
  @media screen and (max-width: 430px) {
        width: 90vw;
        padding: 1em 0.5em;
    }
`
const Button = styled.button`
    padding: 8px 48px;
    border: none;
    border-radius: 2px;
    background: #ff4a4a;
    font-size: 12px;
    color: #ffffff;
    text-decoration: none;
    font-size: 18px;
`

export default () => (
    <Form method="post" netlify-honeypot="bot-field" data-netlify="true" id="contact">
        <input type="hidden" name="bot-field" />
        <Email type="email" name="email" placeholder="Your email" />
        <Message name="message" placeholder="Your message" />
        <Button type="submit" value="send">Send</Button>
    </Form>
)