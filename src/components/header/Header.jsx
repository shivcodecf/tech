import React from 'react' 
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='header'>  
         <nav className="navbar">
         

       
  <div className="container">
    <a href="#" className="logo"> 
    <img src={logo} alt="" /></a> 
    {/* <button class="toggle-button">&#9776;</button> */} 
    <div className="nav1-links">
    <ul className="nav-links">
      <li><a href="#" style={{color:"#00FFA7"}}>Company</a></li>
      
      <li><a href="#">Services</a></li> 
      <li><a href="#">Business Models</a></li>
      <li><a href="#">Blogs</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>  
    </div>
    
  </div>
  </nav> 


      
    </div>
  )
}

export default Header
