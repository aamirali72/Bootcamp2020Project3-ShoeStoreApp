import React from 'react';
import './App.css'
import History from './history'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
  const myFunc = () => {
    History.push('/Product')
  }
  const myHome = () => {
    History.push('/')
  }
  const myAbout = () => {
    History.push('./About')
  }
  const myContactus = () => {
    History.push('./contactus')
  }
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Colume1 */}
          <div className="col">
            <h4>Shoe Show Mega Store</h4>
            <ul className="list-unstyled">
              <li>Online shoe store based in karachi</li>
              <li><PhoneAndroidIcon color="primary" />+923332139467</li>
              <li><ContactMailIcon color="action" /> Shop No A92 Madina Market Saddar</li>
              <li>
                <a href="https://www.facebook.com/aamiraliuss/?view_public_for=102508705112292" target="_blank" rel="noopener noreferrer" title="Goto Facebook Page Universal Software Solutions"><FacebookIcon color='primary' fontSize="large" /></a>
                <LinkedInIcon color="primary" fontSize="large" />
                <TwitterIcon color="primary" fontSize="large" />
              </li>
            </ul>
          </div>
          {/* Colume2 */}
          <div className="col">
            <h4>Quick Link</h4>
            <ul className="list-unstyled">
              <li>
                <Button style={{ justifyContent: "right" }} color="black" size="small" onClick={myHome}  >Home</Button>
              </li>
              <li>
                <Button style={{ justifyContent: "right" }} color="black" size="small" onClick={myFunc}>Products</Button>
              </li>
              <li>
                <Button style={{ justifyContent: "right" }} color="black" size="small" onClick={myAbout}>About</Button>
              </li>
              <li>
                <Button style={{ justifyContent: "right" }} color="black" size="small" onClick={myContactus}>Contact Us</Button>
              </li>
            </ul>
          </div>
          {/* Colume1 */}
        </div>
      </div>
    </div>
  )
}
export default Footer;