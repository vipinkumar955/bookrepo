import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function Freebook() {
  const [book,setbook]=useState([])
  useEffect(()=>{
    const getbook=async()=>{
      try{
      const res= await  axios.get("http://localhost:5000/book")
      console.log(res.data)
      setbook(res.data)

      }
      catch(error){

      }
    }
    getbook()
  },[])

  return (
  
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h1 className="font-semibold text-2xl pb-2">Free Offered Courses</h1>
      <p className="pb-8 text-gray-700 text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quibusdam 
        omnis delectus,<br/> doloremque, dolore exercitationem dolorem, corrupti labore 
        a quaerat illo beatae aperiam 

      </p>
      <div className='flex flex-wrap justify-center mt-4 gap-20'>
        {book.map((item)=>(
          <div className='w-123 h-72 shadow-lg rounded-lg '>
        <Card key={item.id}  item={item}/>
        </div>
      
        ))}
        </div>
        </div>

    

  );
}
export default Freebook;
