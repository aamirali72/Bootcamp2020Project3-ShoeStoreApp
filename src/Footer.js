import React from 'react';
import './App.css'
import History from './history'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Button from '@material-ui/core/Button';

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
  const myContactus=()=>{
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
              <li><ContactMailIcon color="primary"/> Shop No A92 Madina Market Saddar</li>
            </ul>
          </div>
          {/* Colume2 */}
          <div className="col">
            <h4>Quick Link</h4>
            <ul className="list-unstyled">
              <li>
                <Button color="secondary" size="small" onClick={myHome}>Home</Button>
              </li>
              <li>
                <Button color="secondary" size="small" onClick={myFunc}>Products</Button>
              </li>
              <li>
                <Button color="secondary" size="small" onClick={myAbout}>About</Button>
              </li>
              <li>
                <Button color="secondary" size="small" onClick={myContactus}>Contact Us</Button>
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