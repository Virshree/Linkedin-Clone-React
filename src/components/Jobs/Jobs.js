import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Home from '../Home/Home'
import '../Jobs/job.css';

function Jobs() {
    const [jobsdata,setJobs]=useState([]);
    const [currentPage,setcurrentPage]=useState(1);
    const [itemsPerPage,setitemsPerPage]=useState(4);
    const pages=[];
    for(let i=1;i<=Math.ceil(jobsdata.length/itemsPerPage);i++)
    {
        pages.push(i);
    }
    useEffect(()=>{
        fetchJobs();
    })
    const fetchJobs=async()=>{
        const url="http://localhost:8000/jobs";
        const data= await axios.get(url);
        //console.log(data);
        setJobs(data.data);
    }
    const handleClick=(event)=>{
        setcurrentPage(Number(event.target.id));
    }
      const handlePrev=()=>{
        setcurrentPage(currentPage-1);
        
    }
    const handleNext=()=>{
        setcurrentPage(currentPage+1);
       
    }
   const renderPageNumbers=pages.map((number)=>{
    return (
        <p id={number} key={number} className={currentPage === number ? "active":null} 
         onClick={handleClick}>
            {number}
        </p>
    )
   })

   const indexOfLastItem=currentPage*itemsPerPage;
   const indexOfFirstItem=indexOfLastItem-itemsPerPage;
   const currentItems=jobsdata.slice(indexOfFirstItem,indexOfLastItem);

  return (
    <div className='users-main'>
        <Home  />

        <div className='users-details'>
          
            {currentItems.map((item,i)=>(
                <div className='users' key={i}>
                    <h4>{item.title}</h4>
                     <p>{item.description}</p>
                </div>
            ))}
                    
        </div>
        <div className='jobs-container'>
           <button className='prev-button' onClick={handlePrev}
            disabled={currentPage===pages[0]? true:false}>Prev</button>
       {renderPageNumbers}
                  <button className='next-button' onClick={handleNext}
            disabled={currentPage===pages[pages.length-1]? true:false}>Next</button>
            
       </div>
    </div>
  )
}

export default Jobs;