import React from 'react' 
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div>
      <footer>

        <img src={logo} alt="" />  
        <div className="footer_hr">
        <hr></hr>
        </div> 
        <div className="footer-text">
        <p>	&#169; 2024  All Rights Reserved -   Chaintech Network</p>
        </div>

      </footer> 
      
    </div>
  )
}

export default Footer
