import React from 'react';
import './stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import hybrid from './images/hybrid.png';
import mobile from './images/mobile.png';
import uiux from './images/uiux.jpg';
import video from './images/video.jpg';

function Section3()
{
return(
    <div style={{backgroundColor:'#F0F4F8'  , width:'100%' , overflow:'hidden'}}>
        

<div className='row'>
<div className='col-6 offset-3'>

       <h1 id='H_sec2'> <br></br><b>Our Consulting Services For Web Development & Digital Transformation<br></br></b></h1>

        <br></br>

        </div>
</div>

<br></br>  <br></br>
<div className='row'>

<div class="card col cards_styling1">
<a href='#' style={{textDecoration:'none' , color:'black'}}> 
<center><img src={hybrid} className='cards_img1'/></center>
  <div class="card-body">
   <h5 class="card-title">Digital Marketing</h5><br></br>
    <button type="button" class="btn btn-outline-primary card-btn">Read More</button>
  </div>
  </a>
</div>

<div class="card col cards_styling2">
<a href='#' style={{textDecoration:'none' , color:'black'}}> 
<center> <img src={uiux}  className='cards_img2'/></center>
  <div class="card-body">
    <h5 class="card-title">UI and UX Design</h5><br></br>
    <button type="button" class="btn btn-outline-primary card-btn">Read More</button>
  </div>
  </a>
</div>

<div class="card col cards_styling3">
<a href='#' style={{textDecoration:'none' , color:'black'}}> 
  <center><img src={hybrid} className='cards_img3'/></center>
  <div class="card-body">
    <h5 class="card-title">Web Development</h5><br></br>
    <button type="button" class="btn btn-outline-primary card-btn">Read More</button>
  </div>
  </a>
</div>

</div>

<br></br>
<div className='row'>

<div class="card col cards_styling1">
<a href='#' style={{textDecoration:'none' , color:'black'}}> 
<center><img src={hybrid} className='cards_img4'/></center>
  <div class="card-body">
    <h5 class="card-title">Hybrid Application</h5><br></br>
    <button type="button" class="btn btn-outline-primary card-btn">Read More</button>
  </div>
  </a>
</div>

<div class="card col cards_styling2">
<a href='#' style={{textDecoration:'none' , color:'black'}}> 
<center> <img src={mobile}  className='cards_img5'/></center>
  <div class="card-body">
    <h5 class="card-title">Mobile Development</h5><br></br>
    <button type="button" class="btn btn-outline-primary card-btn">Read More</button>
  </div>
  </a>
</div>

<div class="card col cards_styling3">
<a href='#' style={{textDecoration:'none' , color:'black'}}> 
  <center><img src={video} className='cards_img6'/></center>
  <div class="card-body">
    <h5 class="card-title">Video Editing</h5><br></br>
    <button type="button" class="btn btn-outline-primary card-btn">Read More</button>
  </div>
  </a>
</div>

</div>

<br></br><br></br>

<button type="button" class="btn" id='sec3_btn'><b>BOOK A CALL</b></button>

<br></br><br></br><br></br>
    </div>
)
}
export default Section3;