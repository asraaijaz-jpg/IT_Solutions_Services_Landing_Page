import React from 'react';
import './stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from './images/banner.jpg';
import animation from './images/animation.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus , faVoicemail , faPerson} from '@fortawesome/free-solid-svg-icons';


function Section6()
{
return(
    <div style={{ background: 'linear-gradient( to right ,#02AA65, #097A85)'  , width:'100%' , overflow:'hidden'}}>
  
  <div className='row'>
<div className='col-6 offset-3'>


       <h1 id='H_sec6'><br></br><br></br><b>We’d Love To Hear From You</b></h1>

        <br></br>

        <p className='P_sec6'><b>
        Get Custom Solutions, Recommendations, Resumes, Or, Estimates. Confidentiality & Same Day Response Guaranteed!
       
        </b>
        </p>

        <br></br> <br></br>
        
            <h5 style={{color:'white'}}><i>Fields marked with * are required fields.</i></h5>
          
       
        </div>
</div>

<br></br> 
<div className='row'>
    <div className='col-6 sec6_login'>

     <div className='row'>

<div className='col-5 offset-1'> 
<div class="mb-3">
   

    <input type="email" class="form-control" id="name" 
    placeholder='Your full Name *'/>
  </div>
  </div>

  <div className='col-5 offset-1'> 
<div class="mb-3">

    <input type="email" class="form-control" id="email" 
    placeholder='Your Valid Email *'/>
  </div>
  </div>

  <div className='col-5 offset-1'> 
<div class="mb-3">
   
    <input type="number" class="form-control" id="number" 
    placeholder='Your Phone Number *'/>
  </div>
  </div>

  <div className='col-5 offset-1'> 
<div class="mb-3">
    <input type="number" class="form-control" id="budget" 
    placeholder='Your Estimated Budget *'/>
  </div>
  </div>


  <div className='col-11 offset-1'> 
<div class="mb-3">
   
    <input type="email" class="form-control" id="reference" 
    placeholder='Company Reference'/>
  </div>
  </div>


  <div className='col-11 offset-1'> 
<div class="mb-3">
   
    <textarea type="email" class="form-control " id="message" 
    placeholder='Your Message *' rows='5'/>

    <br></br>

    <button type="button" class="btn" id='sec6_btn'><b>SUBMIT</b></button>
  </div>
  </div>

     </div>
    </div>



    {/* ////////////////////////////////////////////////////////////////////// */}
    <div className='col-5 ' >
<img src={animation}  className='sec6_video'/>
</div>

</div>

    </div>
)
}
export default Section6;