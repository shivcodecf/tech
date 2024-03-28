import React from 'react' 
import { FaArrowRightLong } from "react-icons/fa6"; 
import { FaCircleArrowRight } from "react-icons/fa6";




const Hero = () => {
  return (
    <div className='Hero'>  
    <hr className='horizontal-line'/> 
    <div className="intro">
    <h1 className='wel'>WELCOME</h1> 
    <h1 className='wel1'> <span className='To'>TO</span> <span className='chaintech'>CHAINTECH</span></h1> 
    <p className='para'>From square one to engineering excellence! PixelPlex assists in full-cycle software development, jumps in to take it over, or brings dedicated top-demanded skills.</p>
    <button>Get Started  <span className='egg-container'><span className='arrow'><FaArrowRightLong style={{background:"black",borderRadius:"60%",width:"28px"}}/></span> </span></button>
    </div>
     
    </div>
  )
}

export default Hero
