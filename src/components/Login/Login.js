import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import {useState }from 'react';
function Login() {

    const [signin,setSignin]=useState(false);


  return (
     
<div className='main-container'>
        
    <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" 
            aria-controls="nav-home" aria-selected="true">SignIn</button>

            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" 
            data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" 
            aria-selected="false">SignUp</button>
 
  </div>
</nav>
{/*Signin*/}
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
         <form >
              
              <div className='form-content'>
                   <div className='p-4'>
                    <div className='input-group mb-3'>
                        <span className="input-group-email bg-primary m-0 p-0" id="basic-addon1">
                            <i  className="bi bi-envelope icon text-white m-1 p-2"></i>
                        </span>
                        <input type='email' className='form-control'
                         placeholder='Enter Email'  required
                        />
                    </div>
                    <div className='input-group mb-3'>
                         <span className="input-group-password bg-primary m-0 p-0" id="basic-addon1">
                            <i  className="bi bi-lock icon  text-white m-1 p-2 "></i>
                        </span>

                        <input type='password' required className='form-control' 
                        placeholder='Enter Password'
                        />
                    </div>
                  
                        <Link to='/home'>
                            <input type='submit' className=' button btn btn-primary form-control m-1 p-2'
                            value="Sign in"/>
                        </Link> 
                     
                 </div>
                </div>
          </form>
     
</div>
  {/*Signup */}
    <div class="tab-pane fade" id="nav-profile" role="tabpanel" 
           aria-labelledby="nav-profile-tab">
        <form >
              <div className='form-content'>
                    <br/>
                    <div className='input-group mb-3 '>
                        <span  className="input-group-text  bg-primary m-0 p-0"
                         id="basic-addon1">
                            <i  className="bi bi-person-circle icon m-1 p-2 text-white"></i>
                        </span>
                        <input type='text' className='form-control '
                         placeholder='Enter Username' required
                        />
                    </div>
                    <div className='input-group mb-3'>
                         <span className="input-group-email bg-primary  m-0 p-0"
                          id="basic-addon1">
                            <i  className="bi bi-envelope icon m-1 p-2 text-white"></i>
                        </span>

                        <input type='email'  required className='form-control '
                         placeholder='Enter Email' 
                        />
                    </div>
                  <div className='input-group mb-3 '>
                         <span className="input-group-password bg-primary m-0 p-0"
                          id="basic-addon1">
                            <i  className="bi bi-lock icon m-1 p-2 text-white"></i>
                        </span>

                        <input type='password'  required className='form-control'
                         placeholder='Enter Password'
                        />
                    </div>
                     <div className='input-group mb-3'>
                         <span className="input-group-password bg-primary m-0 p-0"
                          id="basic-addon1">
                            <i  className="bi bi-lock icon m-1 p-2 text-white"></i>
                        </span>

                        <input type='password'  required className='form-control'
                         placeholder='Enter Confirm Password'
                        />
                    </div>
                        <Link to='/home'>
                            <input type='submit' className='button btn btn-primary form-control m-1 p-2'
                            value="Sign up"/>
                        </Link>
                     
                 </div>
                 
            </form>
       
             
    </div>
  
</div>
    </div>
  )
}

export default Login