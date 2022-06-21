import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Home from '../Home/Home';
import './Company.css';

function Company() {
    const [companydata,setCompanydata]=useState([]);
     const [currentPage,setcurrentPage]=useState(1);
    const [itemsPerPage,setitemsPerPage]=useState(4);
    const pages=[];
    for(let i=1;i<=Math.ceil(companydata.length/itemsPerPage);i++)
    {
        pages.push(i);
    }
    useEffect(()=>{
        fetchCompany();
    },[])
    const fetchCompany=async()=>{
        const url="http://localhost:8001/companies";
        const {data}=await axios.get(url);
        //console.log(data);
        setCompanydata(data);
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
   const currentItems=companydata.slice(indexOfFirstItem,indexOfLastItem);
  return (
     <div  className='company-container'>
        <Home/>
        <div className='details-company'>
            {currentItems.map((item,i)=>(
                <div className='style-data' key={i}>
                    <h2>{item.id}</h2>
                    <h3>{item.name}</h3>
                </div>
            ))}
        </div>
         <div className='company-container1'>
           <button className='prev-button' onClick={handlePrev}
            disabled={currentPage===pages[0]? true:false}>Prev</button>
       {renderPageNumbers}
                  <button className='next-button' onClick={handleNext}
            disabled={currentPage===pages[pages.length-1]? true:false}>Next</button>
            
       </div>
    </div>
  )
}

export default Company