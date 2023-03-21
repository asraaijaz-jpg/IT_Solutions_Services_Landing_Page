import React from 'react';
import './stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Managing from './images/managing.jpg';
import logo from './images/logo.png';
import circle from './images/circle.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocation , faRectangleAd , faEnvelope} from '@fortawesome/free-solid-svg-icons';

function Section8()
{
return(
    <div style={{ backgroundColor:'#091B38' , color:'white'  , width:'100%' , overflow:'hidden'}}>
  
  <br></br><br></br>
 <div className='row'>
<div className='col-3 offset-1' >
    <div><img  src={logo} id='footer_logo'/></div>
    <p style={{textAlign:'start'}}><br></br>Providing custom web, mobile app, and software development services globally is Creative 360 Digital Solution Agency, a young IT company. Additionally, we assign specialised teams of experts to support agencies and companies as they expand their Development, Design, and Digital Marketing skills.

    </p>
</div>

<div className='col-2'>
   
    <ul>     
        <li> <h5>Our Services</h5></li>
        <a href='#' style={{textDecoration:'none' , color:'white'}}> <li>Website Development</li> </a>
        <a href='#' style={{textDecoration:'none' , color:'white'}}> <li>UI / UX Designing</li></a>
        <a href='#' style={{textDecoration:'none' , color:'white'}}> <li>Website Development</li></a>
        <a href='#' style={{textDecoration:'none' , color:'white'}}> <li>Mobile app Development</li></a>
        <a href='#' style={{textDecoration:'none' , color:'white'}}> <li>Digital Marketing</li></a>
        <a href='#' style={{textDecoration:'none' , color:'white'}}>  <li>Video Editing</li></a>
        <a href='#' style={{textDecoration:'none' , color:'white'}}> <li>Hybrid app Development</li></a>
       
    </ul>
    
    </div>

    <div className='col-2' >
   
    <ul>
        <li> <h5>Quick Links</h5></li>
        <a href='#' style={{textDecoration:'none' , color:'white'}}><li>Home</li></a>
        <a href='#' style={{textDecoration:'none' , color:'white'}}><li>About us</li></a>
        <a href='#' style={{textDecoration:'none' , color:'white'}}><li>Careers</li></a>
        <a href='#' style={{textDecoration:'none' , color:'white'}}><li>Get a Quote</li></a>
        <a href='#' style={{textDecoration:'none' , color:'white'}}><li>contact Us</li></a>
    </ul>
    
    </div>

    <div className='col-2'>
   
   <ul>
       <li> <h5>Contact Info</h5></li>
       <li> <h5>Pakistan Address</h5></li>
       <a href='#' style={{textDecoration:'none' , color:'white'}}><li><FontAwesomeIcon icon={faLocation}/>&nbsp;&nbsp;&nbsp;Karachi, Pakistan</li></a>
       <a href='#' style={{textDecoration:'none' , color:'white'}}><li><FontAwesomeIcon icon={faRectangleAd}/>&nbsp;&nbsp;&nbsp;+92 3196555665 <br></br>
       +92 3332495822</li></a>
       <a href='#' style={{textDecoration:'none' , color:'white'}}><li><FontAwesomeIcon icon={faEnvelope}/>&nbsp;&nbsp;&nbsp;info.cds360@gmail.com</li></a>
   </ul>
   


   </div>

 </div>

 <br></br><br></br>

<div className='row'>
<h5 style={{textalign:'start'}}>Our Locations</h5>


<div class="col-4  offset-2" style={{backgroundColor:'#122A52' , width:''}}>

        <div className='row' >
         
            <div className='col-4'>
            <br></br><br></br>
<img src={circle}/>
            </div>

            <div className='col-8'>   <br></br><br></br>
                <h4 style={{textalign:'start'}}>Pakistan</h4><br></br>
                <h5 style={{textalign:'start'}}>Karachi , Pakistan</h5>

            </div>
 
            </div>  
                   
</div>

 

<div className='col-4 ' >
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462119.0261175128!2d66.87527421995455!3d25.192938517546267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1672608205573!5m2!1sen!2s" 
 height="200" style={{border:"0" , width:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


</div>

<hr style={{color:'white' , marginTop:'30px'}}></hr>
</div>

<h6 style={{color:'white'}}>© 2023 Creative 360 Digital Solution. All rights reserved.</h6> 
    </div>
)
}
export default Section8;