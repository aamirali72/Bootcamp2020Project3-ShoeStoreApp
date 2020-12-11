import React from 'react';
import './App.css'

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Colume1 */}
          <div className="col">
            <h4>SHOE SHOW MEGA STORE!!</h4>
            <ul className="list-unstyled">
              <li>NOW OPEN!!</li>
              <li>COME SEE ALL THEY HAVE TO OFFER!!</li>
              <li>9:AM TO 5:PM</li>
            </ul>
          </div>
          {/* Colume2 */}
          <div className="col">
            <h4>Customer care</h4>
            <ul className="list-unstyled">
              <li>Aamir Khan</li>
              <li>Landline no 0215498798654</li>
              <li>Cell no.021325464</li>
            </ul>
          </div>
          {/* Colume1 */}
          <div className="col">
            <h4>Address</h4>
            <ul className="list-unstyled">
              <li>Lalo Khait</li>
              <li>Near Nearing Cenima</li>
              <li>Dakhana Chowrngi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;