import React from 'react';
import './stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from "@auth0/auth0-react";


function Registration_using_Auth0()
{
    const { loginWithRedirect  , logout , isAuthenticated ,user} = useAuth0();

return(

    <div>
        {/* <br></br><br></br>
  <h1 style={{color:'red'}}><i>Registration_Login_Logout</i></h1>
  <br></br> */}

<br></br>
  {
    isAuthenticated &&
    <p>{user.name}</p>
}

<div className='row'>
    <div className='col-2 offset-9'>
{
    isAuthenticated ?

    <button type="button" class="btn btn-success" 
    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
    >
    Log Out
  </button>
  :
  <button type="button" class="btn btn-success" 
  onClick={() => loginWithRedirect()} style={{float:'right'}}>Log In</button>
}
</div>
</div>
  <br></br>
 
    </div>
)
}
export default Registration_using_Auth0;