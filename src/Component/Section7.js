import React from 'react';
import './stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Managing from './images/managing.jpg';


function Section7()
{
return(
    <div style={{ backgroundImage:`url(${Managing})` , backgroundRepeat:'no-repeat'  , width:'100%' , overflow:'hidden'}}>
  
  <div className='row'>
<div className='col-6 offset-4'>

<br></br>
       <h1 id='H_sec1'><br></br><b>Start Your Business With Us</b></h1> 
       <br></br>
       {/* <button type="button" class="btn" id='sec7_btn'><b>BOOK A CALL</b></button> */}
       <br></br><br></br><br></br>
        </div>
</div>


    </div>
)
}
export default Section7;