import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Home from '../Home/Home';
import './User.css';
function User() {

    const[userdata,setUserdata]=useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(3);
    const pages=[];
    for(let i=1;i<=Math.ceil(userdata.length/itemsPerPage);i++)
    {
        pages.push(i);
    }
    useEffect(()=>{
        fetchUsers();
    },[])
    const fetchUsers=async()=>{
        const url="http://localhost:8004/users";
        const {data}=await axios.get(url);
        //console.log(data);
        setUserdata(data);
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
    const indexOfLastItem=currentPage*itemsPerPage;
    const indexOfFirstItem=indexOfLastItem-itemsPerPage;
    const currentItems=userdata.slice(indexOfFirstItem,indexOfLastItem);
     const renderPageNumbers = pages.map((number) => { 
        if(number<5 && number>0){
             return (
       <p key={number} id={number} className={currentPage === number ? "active":null} 
       onClick={handleClick}>
            {number}
       </p>

      );  
        }
        else{
            return null;
        }
     });
  return (
    <div className='user-container'>
        <Home/>
        <div className='user-details'>
            {currentItems.map((item,i)=>(
                <div className='user-styles' key={i}>
                    <h2>{item.id}</h2>
                    <h3>{item.name}</h3>
                    <h4>{item.email}</h4>
                </div>
            ))}
        </div>
            <div className='pages-container'>
            <button className='prev-button' onClick={handlePrev}
            disabled={currentPage===pages[0]? true:false}>Prev</button>
            {renderPageNumbers}
           <button className='next-button' onClick={handleNext}
            disabled={currentPage===pages[pages.length-1]? true:false}>Next</button>
            </div>
    </div>
  )
}
export default User;