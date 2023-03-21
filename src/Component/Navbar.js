import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavLogo from './images/logo1.png';

function NavBar()
{
return(

<div class="navbar1">

<div className='row' style={{backgroundColor:'#white'}}>
<div className='col-4' ><img src={NavLogo} style={{width:'15%' , height:'70%' , marginLeft:'-250px'}}/></div>
<div className='col-8'>

<nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{float:'right' }} >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Service
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Get a quote</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Careers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
     
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
</div>
</div>
</div>



















    // <header className='header header-minimal' style={{overflow:'hidden'}}>
    // <nav className='header-fixed fixed'>
    //     <div class="container">
    //         <div class="row flex-nowrap align-items-center justify-content-between">
    //             <div class="col-auto d-block d-xl-none header-fixed-col">
    //                 <div class="main-mnu-btn">
    //                     <span class="bar bar-1"></span>
    //                     <span class="bar bar-2"></span>
    //                     <span class="bar bar-3"></span>
    //                     <span class="bar bar-4"></span>
    //                 </div>
    //             </div>
    //             <div class="col-auto header-fixed-col logo-wrapper">
                    
    //                 <a href="index.php" class="logo" title="Creative 360 Digital Solution">
    //                     <img src={NavLogo} alt="Creative 360 Digital Solution" style={{opacity: "1"}}/>
    //                 </a>
    //             </div>
    //             <div class="col-auto col-xl col-static header-fixed-col">
    //                 <div class="row flex-nowrap align-items-center justify-content-end">
    //                     <div class="col header-fixed-col d-none d-xl-block col-static">
                            
    //                         <nav class="main-mnu main-mnu-js-init" style={{opacity: "1"}}>


    //                             <ul class="main-mnu-list" style={{display:'contents'}}>

    //                                  <li class="menu-item-has-children">
    //                                     <a href="index.php" data-title="Home">
    //                                         <span>Home</span>
    //                                     </a>

    //                                 </li>
    //                                 <li class="menu-item-has-children">
    //                                     <a href="about-us.php" data-title="About Us">
    //                                         <span>About Us</span>
    //                                     </a>

    //                                 </li>
    //                                 {/* <li class="mega-menu menu-item-has-children">
    //                                     <a href="#!" data-title="Services"><span>Services</span>
    //                                         <div>
    //                                             <i class="material-icons">expand_more</i>

    //                                         </div>
    //                                     </a>
    //                                     <ul class="sub-menu">
    //                                         <li>

    //                                             <a href="digital-marketing.php" data-title="Section 1">
    //                                                 <span class="menu-heading">Digital Marketing</span>

    //                                             </a>
    //                                             <span class="menu-desc">We plan to cause your business to develop on the
    //                                                 grounds that your prosperity is our prosperitys</span>

    //                                             <a href="website-development.php" data-title="Section 1">
    //                                                 <span class="menu-heading">Website Development</span>

    //                                             </a>
    //                                             <span class="menu-desc">We've covered "what is WordPress" and "what is
    //                                                 WordPress utilized for" yet to comprehend its advantages.</span>

    //                                             <a href="ui-ux-designing.php" data-title="Section 1">
    //                                                 <span class="menu-heading">UI/UX Designing</span>

    //                                             </a>
    //                                             <span class="menu-desc">In nutshell UI/UX design makes IT item that
    //                                                 clients want to utilize. The objective of UI sketch is creating
    //                                                 buyer interfaces</span>
    //                                         </li>

    //                                         <li>
    //                                             <a href="mobile-application-development.php" data-title="Section 2">
    //                                                 <span class="menu-heading">Mobile Application Development</span>

    //                                             </a>
    //                                             <span class="menu-desc">Creative 360 Digital Solution's mixture
    //                                                 versatile application
    //                                                 improvement group is very capable.</span>

    //                                             <a href="video-editing.php" data-title="Section 1">
    //                                                 <span class="menu-heading">Video Editing</span>

    //                                             </a>
    //                                             <span class="menu-desc">From a specialized point of view, videography
    //                                                 alludes to the computerized seize of moving photos</span>

    //                                             <a href="hybrid-application-development.php" data-title="Section 1">
    //                                                 <span class="menu-heading">Hybrid Application Development</span>

    //                                             </a>
    //                                             <span class="menu-desc">We give you an answer that addresses your
    //                                                 issues, your guests' assumptions, and you will have command over
    //                                                 your substance</span>
    //                                         </li>
    //                                         <li>
    //                                             <a href="#!" data-title="Section 3">
    //                                                 <img src="https://cdn.shopify.com/s/files/1/0667/6555/3895/files/web_developing.gif?v=1665571693" style={{width: "100%"}}/>
    //                                             </a>


    //                                         </li>

    //                                     </ul>
    //                                 </li> */}

    //                                 <li class="mega-menu menu-item-has-children menu-item-6282">
    //                                     <a href="careers.php" data-title="Careers">
    //                                         <span>Careers</span>

    //                                     </a>

    //                                 </li>
    //                                 <li class="">
    //                                     <a href="get-a-quote.php" data-title="Get a Quote">
    //                                         <span>Get a Quote</span>

    //                                     </a>

    //                                 </li>

    //                                 <li class="">
    //                                     <a href="contact-us.php" data-title="Contact Us">
    //                                         <span>Contact Us</span>

    //                                     </a>

    //                                 </li>
    //                             </ul>
    //                         </nav>
    //                     </div>
                      
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </nav>
    // </header>
)
}
export default NavBar;