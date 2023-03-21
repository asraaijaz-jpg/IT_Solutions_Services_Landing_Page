import React from 'react';
import './stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from './images/banner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';


function Section5()
{
return(

    <div>


<br></br><br></br>

<button type="button" class="btn" id='sec3_btn'><b>BOOK A CALL</b></button>

<br></br><br></br><br></br>
  
  
<div style={{backgroundColor:'#F0F4F8'  , width:'100%' , overflow:'hidden' }}>
 
<div className='row'>
<div className='col-6 offset-3'>

       <h1 id='H_sec2'> <br></br><b>Frequently Asked Question</b></h1>

        <br></br> <br></br>
        </div>

</div>

<div className='row'>
    <div className='col-10 offset-1'>
        
<Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>What can we do for your business?</Accordion.Header>
        <Accordion.Body style={{textAlign:'start'}}>
        By cooperating with customers to discuss needs and requirements, we are ready to achieve common understanding, win customers' trust and provide appropriate advice, and come up with reasonable new ideas to change your company

        </Accordion.Body>
      </Accordion.Item>

<br></br>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What are the benefits of Creative 360 Digital Solution Agecny</Accordion.Header>
        <Accordion.Body style={{textAlign:'start'}}>
        Creative 360 Digital Solution Agecny cares about every detail to ensure that the process works as expected and is acceptable. Creative 360 Digital Solution ​​uses another feature called Minified Technology to get a set of customer data and create unique lighting.

        </Accordion.Body>
      </Accordion.Item>
      <br></br>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How to impvrove the work cycle?</Accordion.Header>
        <Accordion.Body style={{textAlign:'start'}}>
       We reduce highly complex designs with incorrect code writing and hard code writing to ensure that Creative 360 Digital Solution Agecny ​​will work flawlessly and that the design is kept in the best possible order when it is viewed by a large number of mobile phones and programs.

        </Accordion.Body>
      </Accordion.Item>
      <br></br>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Engineering news and services</Accordion.Header>
        <Accordion.Body style={{textAlign:'start'}}>
       Our team designs, architects, develops and deploys applications on cloud platforms. We work with Google GCP, Amazon AWS and other cloud technologies. Our team is experienced in working with all cloud-based solutions. We have a single solution available to ensure that your solution is covered for all security risks and aspects.

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
<br></br><br></br>
    
    </div>
</div>


</div>



    </div>
)
}
export default Section5;