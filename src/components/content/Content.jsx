import React from 'react' 
import { SlArrowRightCircle } from "react-icons/sl"; 
import { GoArrowLeft } from "react-icons/go"; 
import img1 from "../../assets/img1.png";  
// import img2 from "../../assets/Vector.png";   
import img6 from "../../assets/img6.png";  
import { GoArrowRight } from "react-icons/go"; 
import arrow from "../../assets/btn-arrow.png"; 
import img8 from "../../assets/img8.png";  
import img7 from "../../assets/img7.jpg";  
import img5 from "../../assets/img5.png";  
import img10 from "../../assets/img10.png";  




const Content = () => {
  return (
    <div className='Content'> 
        <div className="des"> 
        <div className="des-h2">
        <h2>Services We Offer</h2>  
        </div>
       

      <div className="des1"> 
      <div className="des1-para">
      <p> 


     Discover the digital possibilities for your brand with our comprehensive suite of services.  
    </p> 
    </div>  
    
    <div className="des-icon-left"> 
        
        <span><GoArrowLeft style={{fontSize:"25px"}}/> </span>
      </div>
     
     <div className="des-icon-right"> 
        
        <SlArrowRightCircle style={{fontSize:"25px"}}/> 
      </div>

      </div>
      
     
      
       </div>   
       <div className="services">  
       {/* box1 */}
       <div className='box1'>   
        <div className="box1_header">
        <img src={img1} alt="" /> 
        <p>Join Development</p>
        </div> 
        <hr className='box_hr'></hr>
        <div className="box1_content"> 
        <div className="box_content1">
        <h1 >Blockchain</h1> 
        </div>
           
            <h1>Development</h1> 
            <img src={img6} alt="" /> 
            
        </div> 
        <hr className='box_hr1'></hr> 
        <div className="box_btn">
         {/* <button> <p>Explore </p>   <img src={arrow} alt="" style={{marginTop:"20px",marginRight:"15px"}} / >  </button>    */}
         <button className="button-with-image">Explore <GoArrowRight style={{marginRight:"12px",marginTop:"2px",background:"#00FFA7",borderRadius:"80%"} } /></button>
        
        

            </div> 
        
         
        </div>  
        {/* box2 */}
       <div className='box1'> 

       <div className="box1_header">
        <img src={img1} alt="" /> 
        <p>Join Development</p>
        </div> 
        <hr className='box_hr'></hr>
        <div className="box1_content"> 
        <div className="box_content1">
        <h1 >Blockchain</h1> 
        </div>
           
            <h1>Development</h1> 
            <img src={img8} alt="" /> 
            
        </div> 
        <hr className='box_hr1'></hr> 
        <div className="box_btn">
         {/* <button> <p>Explore </p>   <img src={arrow} alt="" style={{marginTop:"20px",marginRight:"15px"}} / >  </button>    */}
         <button className="button-with-image">Explore <GoArrowRight style={{marginRight:"12px",marginTop:"2px",background:"#00FFA7",borderRadius:"80%"} } /></button>
        
        

            </div> 
        
        </div>  

        {/* box 3 */}
       <div className='box1'> 
       <div className="box1_header">
        <img src={img1} alt="" /> 
        <p>Join Development</p>
        </div> 
        <hr className='box_hr'></hr>
        <div className="box1_content"> 
        <div className="box_content1">
        <h1 >Security</h1> 
        </div>
           
            <h1>ASS</h1> 
            <img src={img10} alt="" /> 
            
        </div> 
        <hr className='box_hr1'></hr> 
        <div className="box_btn">
         {/* <button> <p>Explore </p>   <img src={arrow} alt="" style={{marginTop:"20px",marginRight:"15px"}} / >  </button>    */}
         <button className="button-with-image">Explore <GoArrowRight style={{marginRight:"12px",marginTop:"2px",background:"#00FFA7",borderRadius:"80%"} } /></button>
        
        

            </div> 
        
        
        
        </div> 
        {/* box 4 */}
       <div className='box1'> 
       <div className="box1_header">
        <img src={img1} alt="" /> 
        <p>Join Development</p>
        </div> 
        <hr className='box_hr'></hr>
        <div className="box1_content"> 
        <div className="box_content1">
        <h1 >Motion</h1> 
        </div>
           
            <h1>Graphic</h1> 
            <img src={img5} alt="" /> 
            
        </div> 
        <hr className='box_hr1'></hr> 
        <div className="box_btn">
         {/* <button> <p>Explore </p>   <img src={arrow} alt="" style={{marginTop:"20px",marginRight:"15px"}} / >  </button>    */}
         <button className="button-with-image">Explore <GoArrowRight style={{marginRight:"12px",marginTop:"2px",background:"#00FFA7",borderRadius:"80%"} } /></button>
        
        

            </div> 
         </div>   

         {/* box 5 */} 
         <div className='box1'>
       <div className="box1_header">
        <img src={img1} alt="" /> 
        <p>Join Development</p>
        </div> 
        <hr className='box_hr'></hr>
        <div className="box1_content"> 
        <div className="box_content1">
        <h1 >Blockchain</h1> 
        </div>
           
            <h1>Development</h1> 
            <img src={img6} alt="" /> 
            
        </div> 
        <hr className='box_hr1'></hr> 
        <div className="box_btn">
         {/* <button> <p>Explore </p>   <img src={arrow} alt="" style={{marginTop:"20px",marginRight:"15px"}} / >  </button>    */}
         <button className="button-with-image">Explore <GoArrowRight style={{marginRight:"12px",marginTop:"2px",background:"#00FFA7",borderRadius:"80%"} } /></button>
        
        

            </div> 

        
        </div>    
        {/* box 6 */}
       

        <div className='box1'>
        <div className="box1_header">
        <img src={img1} alt="" /> 
        <p>Join Development</p>
        </div> 
        <hr className='box_hr'></hr>
        <div className="box1_content"> 
        <div className="box_content1">
        <h1 >Blockchain</h1> 
        </div>
           
            <h1>Development</h1> 
            <img src={img6} alt="" /> 
            
        </div> 
        <hr className='box_hr1'></hr> 
        <div className="box_btn">
         {/* <button> <p>Explore </p>   <img src={arrow} alt="" style={{marginTop:"20px",marginRight:"15px"}} / >  </button>    */}
         <button className="button-with-image">Explore <GoArrowRight style={{marginRight:"12px",marginTop:"2px",background:"#00FFA7",borderRadius:"80%"} } /></button>
        
        

            </div> 
        
        </div>  
        {/* box7 */}
       <div className='box1'>

       <div className="box1_header">
        <img src={img1} alt="" /> 
        <p>Join Development</p>
        </div> 
        <hr className='box_hr'></hr>
        <div className="box1_content"> 
        <div className="box_content1">
        <h1 >Security</h1> 
        </div>
           
            <h1>ASS</h1> 
            <img src={img10} alt="" /> 
            
        </div> 
        <hr className='box_hr1'></hr> 
        <div className="box_btn">
         {/* <button> <p>Explore </p>   <img src={arrow} alt="" style={{marginTop:"20px",marginRight:"15px"}} / >  </button>    */}
         <button className="button-with-image">Explore <GoArrowRight style={{marginRight:"18px",marginTop:"2px",background:"#00FFA7",borderRadius:"80%"} } /></button>
        
        

            </div> 

       </div> 

       {/* box8 */} 
       <div className='box1'>

<div className="box1_header">
 <img src={img1} alt="" /> 
 <p>Join Development</p>
 </div> 
 <hr className='box_hr'></hr>
 <div className="box1_content"> 
 <div className="box_content1">
 <h1 >Motion</h1> 
 </div>
    
     <h1>Graphic</h1> 
     <img src={img5} alt="" /> 
     
 </div> 
 <hr className='box_hr1'></hr> 
 <div className="box_btn">
  {/* <button> <p>Explore </p>   <img src={arrow} alt="" style={{marginTop:"20px",marginRight:"15px"}} / >  </button>    */}
  <button className="button-with-image">Explore <GoArrowRight style={{marginRight:"12px",marginTop:"2px",background:"#00FFA7",borderRadius:"80%"} } /></button>
 
 

     </div> 

</div> 


       
       </div>
      

    </div>
  )
}

export default Content
