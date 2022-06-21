import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

import './Nav.css';
function Nav() {
  return (
    <div>
        <div className='logo-img'>
            <img src ={logo} className='d-flex m-2' alt='logo img' width='55' 
            height='55'/>
        </div>
        <div className='header mt-2 text-secondary'>
            <h1>Relevel Linkedin React Clone</h1>
       
          <div className='login-btn'>
                <Link to='/login'>
                  
              <button className='btn btn-primary' >
                Login and Get started</button>
              </Link>
           </div>
        </div>
    </div>
  )
}

export default Nav