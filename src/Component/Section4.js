import React from 'react';
import './stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Managing from './images/managing.jpg';


function Section4()
{
return(
    <div style={{ backgroundImage:`url(${Managing})` , backgroundRepeat:'no-repeat' ,  width:'100%' , overflow:'hidden'}}>
  
  <div className='row'>
<div className='col-7 offset-1'>


       <h1 id='H_sec1'><br></br><b>Managing Development Organizations At A Distance: The 2022 Report</b></h1>

        
        <p className='P_sec1'>
        <br></br>
        <button type="button" class="btn" id='sec1_btn'><b>GET YOUR FREE COPY</b></button>
        </p>
        </div>
</div>


    </div>
)
}
export default Section4;