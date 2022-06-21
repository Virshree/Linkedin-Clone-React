import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
function Home() {

  return (
    <div className='home-container '>
        <div className='search-job'>
              <div className='sidebar-icons'>
                    <Link to='/' >
                    <img  src={logo} alt='logo img' width='45' 
                    height='45'/>
                    </Link>
                    <br/>
                 
                    <Link to='/job' style={{textDecoration:"none",color:"black"}}>
                        <i class="bi bi-people-fill"></i>
                    </Link>
                    <br/>
                     <Link to='/users' style={{textDecoration:"none",color:"black"}}>
                    <i class="bi bi-envelope-open-fill"></i>
                    </Link>
                    <br/>

                    <Link to='/company' style={{textDecoration:"none",color:"black"}} >
                    <i class="bi bi-bank2"></i>
                    </Link>
                    <br/>
                    <i class="bi bi-gear"></i>
              </div>
              <div className='text'>
                  <div class="input-group ">
                  <input type="text" className="form-control m-0 " 
                    placeholder="Serach for jobs"  
                    />
               
                  <button className="button btn btn-primary m-0 p-0" 
                    type="button" >Search</button>
                </div>
            </div>
            
          </div>
      </div>
             
               

 
  )
}

export default Home