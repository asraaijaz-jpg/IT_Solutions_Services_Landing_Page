import React from 'react';
import './stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from './images/banner.jpg';


function Section1()
{
return(
   
    <div className='row' style={{ backgroundImage:`url(${banner})` , 
    backgroundRepeat:'no-repeat' , width:'100%' , height:'100%' ,  backgroundSize: 'auto' ,
    backgroundAttachment: 'fixed'}}>
  
  <div className='row'>
<div className='col-5 offset-1'>


       <h1 id='H_sec1' ><br></br><br></br><b>Best IT Services And Solutions Providing Freelancing Agency</b></h1>

        <br></br>    

        <p className='P_sec1' >Creative 360 Digital Solution is a computerized showcasing organization that 
            knows how to help your web-based business' positioning and give its clients 
            with results that are above and beyond

        </p>

        <p className='P_sec1' >
        <br></br>
        <button type="button" class="btn" id='sec1_btn'><b>BOOK A CALL</b></button>
        <br></br><br></br>
        </p>
        </div>
</div>


    </div>
)
}
export default Section1;