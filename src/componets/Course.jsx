import React, { useEffect, useState } from 'react'
import Card from './Card'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Course() {
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
    <>
    <div className='max-w-screen-2xl contrainer mx-auto md:px-20 px-4'>
        <div className="mt-28 items-center justify-center  text-center">
        <h1 className='text-2xl font-semibold md:text-4xl '>we 're delighted to have you<span className='text-pink-500'>here! :</span> </h1>
        <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga 
            est temporibus porro reprehenderit delectus. Perspiciatis quas <br/>
            sapiente mollitia laboriosam eaque odit voluptatibus, repellendus 
            aspernatur, magni, quibusdam laudantium! Dolorum, corporis. 
        </p>
        <Link to="/">
        <button className='bg-pink-500  w-[80px] rounded shadow-lg  px-2 py-2 hover:bg-pink-700 duration-300'>Back</button></Link>
       </div>
       <div className='flex flex-wrap justify-center mt-4 gap-20'>
        {book.map((item)=>(
          <div className='w-90 h-70 shadow-lg rounded-lg '>
        <Card key={item.id}  item={item}/>
        </div>
      ))}
       </div>
    </div> 
    
    </>
  )
}

export default Course