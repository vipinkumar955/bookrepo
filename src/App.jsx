import React from "react";
import Home from "./componets/Home";
import { Route,Routes } from "react-router-dom";
import Courses from "./componets/Courses";
import Signup from "./componets/Singup"
import Contact from "./componets/Contact";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>



    </Routes>

    </>
  );
}

export default App;
