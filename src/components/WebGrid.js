import React from "react"
import styled from "styled-components"



const EmailGrid = styled.div`
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
  margin: 0px 0px 20px 0px;
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
    <EmailGrid>
     <Card>
        <a style={{ textDecoration: `none`, color: `#000000` }} href="https://hungry-mccarthy-a4edea.netlify.com/"><Title>Cake Digital</Title>
    
        <Img src="https://i.imgur.com/CzUN5XA.png"></Img></a>
        <p style={{ fontSize: `18px` }}>Developed with Jekyll and Netlify headless CMS.</p>
        <CodeLink>
        <a href="https://github.com/cartuhok/fd-jekyll-cms"><svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="none" rx="0" ry="0"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0476 4.39292C20.9676 4.15292 20.7376 3.99292 20.4776 3.99292C20.3776 3.99292 18.0977 4.01292 16.9377 5.41292C16.4977 5.29292 16.0577 5.22292 15.6277 5.22292H13.2176C12.7976 5.22292 12.3876 5.28292 11.9476 5.39292C10.7876 4.00292 8.52764 3.99292 8.42764 3.99292C8.17764 3.99292 7.94763 4.15292 7.85763 4.39292C7.81763 4.50292 6.98763 6.93292 8.41763 8.59292C8.28763 9.03292 8.09765 9.78292 8.09765 10.3429C8.09765 12.5129 9.49763 14.4429 11.5076 15.1629C11.4676 15.3629 11.4476 15.5629 11.4476 15.7629V17.6329C10.6876 17.7929 10.4076 17.6629 10.2376 17.1629C9.25764 14.2029 7.50763 13.7329 6.19763 13.8529C5.71763 13.8929 5.28763 14.1229 4.97763 14.4929C4.66763 14.8629 4.52766 15.3329 4.56766 15.8129C4.61766 16.3029 4.84763 16.7329 5.22763 17.0429C5.55763 17.3129 5.97764 17.4629 6.39764 17.4429C6.47764 17.5529 6.61765 17.8229 6.87765 18.4629C7.16765 19.1829 7.46763 19.9229 8.07763 20.4529C8.66763 20.9629 9.45765 21.2229 10.4377 21.2229C10.7377 21.2229 11.5576 21.1929 12.0876 21.1329C12.4576 21.3829 12.9977 21.4629 13.5377 21.4629C14.3377 21.4629 15.1076 21.2829 15.1676 21.2729C16.6176 20.9329 17.4176 20.2829 17.4176 19.4429V15.7629C17.4176 15.5629 17.3976 15.3629 17.3576 15.1629C19.3676 14.4429 20.7676 12.5129 20.7676 10.3429C20.7676 9.77292 20.6076 9.03292 20.4976 8.60292C21.9276 6.94292 21.0876 4.49292 21.0476 4.39292ZM19.2376 8.59292C19.3276 8.89292 19.5476 9.79292 19.5476 10.3329C19.5476 12.1629 18.2476 13.7729 16.4476 14.1629C16.2676 14.2029 16.1177 14.3229 16.0377 14.4829C15.9577 14.6429 15.9576 14.8429 16.0276 15.0029C16.1376 15.2529 16.1976 15.5029 16.1976 15.7529V19.4329C16.1976 19.4529 16.1276 19.5929 15.7976 19.7629C14.8176 20.2829 13.1576 20.3529 12.7776 20.1429C12.6476 19.9429 12.4076 19.8329 12.1676 19.8929C11.8776 19.9529 10.8376 20.0029 10.4176 20.0029C9.73763 20.0029 9.20765 19.8429 8.84765 19.5329C8.44765 19.1929 8.22763 18.6429 7.97763 18.0029C7.58763 17.0429 7.21764 16.1229 6.39764 16.2229C6.24764 16.2329 6.09763 16.1929 5.97763 16.0929C5.84763 15.9929 5.76763 15.8429 5.75763 15.6829C5.74763 15.5229 5.78764 15.3629 5.89764 15.2429C5.99764 15.1229 6.14765 15.0429 6.30765 15.0329C7.56765 14.9029 8.50765 15.7429 9.09765 17.5229C9.68765 19.3129 11.4376 18.8629 12.0076 18.7129L12.1776 18.6729C12.4476 18.6129 12.6476 18.3729 12.6476 18.0929V15.7529C12.6476 15.5029 12.7077 15.2529 12.8177 15.0029C12.8977 14.8329 12.8976 14.6429 12.8076 14.4829C12.7276 14.3229 12.5776 14.2029 12.3976 14.1629C10.6076 13.7729 9.29764 12.1629 9.29764 10.3329C9.29764 9.83292 9.56763 8.92292 9.66763 8.61292C9.73763 8.39292 9.67763 8.14292 9.50763 7.98292C8.63763 7.18292 8.75763 5.89292 8.88763 5.22292C9.53763 5.30292 10.7176 5.55292 11.1976 6.39292C11.3376 6.64292 11.6476 6.76292 11.9176 6.66292C12.3776 6.50292 12.7976 6.42292 13.2176 6.42292H15.6277C16.0677 6.42292 16.5076 6.50292 16.9676 6.68292C17.2376 6.78292 17.5576 6.67292 17.6976 6.41292C18.1776 5.56292 19.3576 5.30292 20.0176 5.23292C20.1576 5.90292 20.2776 7.19292 19.3976 7.99292C19.2476 8.14292 19.1776 8.37292 19.2376 8.59292Z" fill="#000000"></path></svg></a>
        <br/>
        
     
        </CodeLink>
     </Card>
     <Card>
        <a style={{ textDecoration: `none`, color: `#000000` }} href="https://wgbhdigital.org/greeting/2019/"><Title>Holiday Card</Title>
      
        <Img style={{height: `500.333px`}} src="https://i.imgur.com/OHPT21o.png"></Img></a>
        <p style={{ fontSize: `18px` }}>Developed with CreateJS for the animation events and CSS grid for the layout. Animation and layout design credit goes to the <a style={{ color: `#000000`, textDecoration: `none` }} href="https://wgbhdigital.org/greeting/2019/">WGBH</a> Digital Creative team.</p>
        <CodeLink>
    
        </CodeLink>
     </Card>
    </EmailGrid>
)