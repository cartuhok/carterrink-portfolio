import React from "react"
import styled from "styled-components"



const DesignGrid = styled.div`
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
  font-size: 0.8em;
  margin-bottom: 0px;
`
const Img =styled.img`
  width: 300px;
  height: auto;
  -webkit-box-shadow: 0.222rem 0.222rem 0.444rem rgba(211, 211, 211, 0.75), calc(0.222rem * -1) calc(0.222rem * -1) 0.444rem rgba(255, 255, 255, 0.75);
box-shadow:0.222rem 0.222rem 0.444rem rgba(211, 211, 211, 0.75), calc(0.222rem * -1) calc(0.222rem * -1) 0.444rem rgba(255, 255, 255, 0.75);
`
const CodeLink =styled.div`
    display:flex;
    justify-content: left;
    flex-direction: column;
`

export default (props) => (
    <DesignGrid>
     <Card>
        <a style={{ textDecoration: `none`, color: `#000000` }} href="https://dribbble.com/shots/9493194-Rental-App"><Title>Rental App</Title>
        <p style={{ fontSize: `18px`, margin: `0px 0px 20px 0px` }}>Made in Figma</p>
        <Img src="https://i.imgur.com/T0BmNAG.png"></Img></a>
        <CodeLink>
        <a href="https://dribbble.com/shots/9493194-Rental-App"><svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="none" rx="0" ry="0"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9549 3.54981C14.0149 3.21981 13.0249 3.05981 12.0049 3.05981C10.0949 3.05981 8.26487 3.64981 6.72487 4.76981C4.51487 6.36981 3.16488 8.84981 3.01488 11.5598C3.00488 11.7198 3.00487 11.8898 3.00487 12.0598C3.00487 16.2598 5.9749 19.9598 10.0649 20.8398C10.6949 20.9798 11.3549 21.0498 12.0049 21.0498C12.9849 21.0498 13.9449 20.8898 14.8449 20.5898H14.8549C14.8649 20.5898 14.8649 20.5798 14.8749 20.5798C17.9749 19.5398 20.2649 16.9098 20.8649 13.6998C20.9649 13.1398 21.0149 12.5998 21.0149 12.0498C21.0049 8.21982 18.5749 4.79981 14.9549 3.54981ZM19.8049 12.0498C19.8049 12.1098 19.7949 12.1698 19.7949 12.2298C18.1049 11.9598 16.3449 12.1498 14.7749 12.7498C14.3949 11.5698 13.8649 10.4798 13.2049 9.46981C14.2949 8.18981 15.0149 6.62981 15.2649 4.97981C18.0049 6.24981 19.8049 8.98982 19.8049 12.0498ZM14.1149 4.55981C13.9449 5.97981 13.3949 7.33981 12.5049 8.45981C11.3749 7.01981 9.95488 5.87981 8.39488 5.13981C9.50488 4.55981 10.7349 4.24981 12.0049 4.24981C12.7349 4.24981 13.4349 4.36981 14.1149 4.55981ZM7.18489 5.93981C8.90489 6.58981 10.4649 7.77981 11.6649 9.35981C10.2149 10.7098 8.35488 11.4598 6.36488 11.4598C5.64488 11.4598 4.94488 11.3398 4.26488 11.1498C4.50488 9.07981 5.54489 7.21981 7.18489 5.93981ZM4.22487 12.3898C4.92487 12.5598 5.63488 12.6498 6.36488 12.6498C8.60488 12.6498 10.7049 11.8398 12.3449 10.3598C12.9049 11.2498 13.3549 12.2198 13.6749 13.2498C11.3149 14.4898 9.58485 16.6298 8.83485 19.1698C6.18485 17.9898 4.35487 15.3598 4.22487 12.3898ZM10.3249 19.6698C10.2049 19.6398 10.0949 19.6098 9.97487 19.5798C10.5949 17.4098 12.0349 15.5798 13.9949 14.4598C13.9949 14.4598 13.9949 14.4598 13.9949 14.4698C14.1949 15.4298 14.2949 16.3998 14.2949 17.3698C14.2949 18.1098 14.2249 18.8398 14.1149 19.5498C12.9049 19.8898 11.5849 19.9498 10.3249 19.6698ZM15.3949 19.0798C15.4549 18.5198 15.5049 17.9498 15.5049 17.3698C15.5049 16.3298 15.3949 15.2698 15.1849 14.2298C15.1649 14.1298 15.1249 14.0298 15.1049 13.9298C16.5349 13.3598 18.1449 13.1798 19.6949 13.4398C19.6949 13.4598 19.6949 13.4798 19.6849 13.4898C19.2249 15.9398 17.6149 18.0098 15.3949 19.0798Z" fill="#000000"></path></svg></a>
        <br/>
        
     
        </CodeLink>
     </Card>
    </DesignGrid>
)