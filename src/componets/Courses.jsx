import React from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
import Course from '../componets/Course'

function Courses() {
  return (
    <> 
      <Navbar/>
        <div className='min-h-screen'>  
        <Course/>
        </div>
        <Footer/>
        
    </>
  )
}
export default  Courses