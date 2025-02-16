import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Data received:', name, email, password);

    try {
      const response = await axios.post('http://localhost:5000/user/getUser', {
        name,
        email,
        password,
      });
      console.log('User registered successfully:', response.data);
      // Perform further actions after successful registration
    } catch (error) {
      console.log('Error during registration:', error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[500px]">
        <div className="modal-box">
          <form method='dialog' onSubmit={handleSignup}>
            <Link to="/">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </Link>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-2">
              <span className="text-xl font-semibold">Name</span><br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-80 h-10 px-3 rounded-md border shadow outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-4 space-y-2">
              <span className="text-xl font-semibold">Email</span><br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 h-10 px-3 rounded-md shadow outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4 space-y-2">
              <span className="text-xl font-semibold">Password</span><br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 h-15 rounded-md shadow outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white px-3 py-1 rounded-lg shadow-lg"
              >
                Signup
              </button>
            </div>
            <p className="mt-4 text-center">
              Already have an account?{' '}
              <button  onClick={()=>document.getElementById('my_modal_3').showModal()}
                type="button"
                className="text-xl underline text-blue-500 cursor-pointer"
              >
                Login
              </button>
              <Login/>
             
            </p>
          
          </form>
        </div>
      </div>
      </div>

          
        
      
  
  );
}
export default Signup
