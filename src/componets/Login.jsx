import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  function fg(){
    navigate('/signup')
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('email:', email);
    console.log('Password:', password);

    try {
      const response = await axios.post('http://localhost:5000/user/getUser', {
        email,
        password,
      });
      console.log('User registered successfully:', response.data);
      // Perform further actions after successful registration (e.g., redirect or show success)
    } catch (error) {
      console.log('Error during registration:', error);
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* Close Button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById('my_modal_3').close()}
          >
            ✕
          </Link>
          
          {/* Title and form structure */}
          <form onSubmit={handleSubmit} method="dialog">
            {/* Email Input */}
            <div className="mt-4 space-y-1">
              <span className="font-semibold">Email</span><br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-80 px-3 rounded-md h-10 shadow outline-none"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mt-4 ">
              <span className="font-semibold">Password</span><br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-80 px-3 rounded-md shadow h-10 outline-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex mt-4  justify-center">
              <button type="submit" className="bg-pink-500 text-white px-3 py-1 rounded-lg shadow-lg">
                Login
              </button>
            </div>

            {/* Signup Link */}
            <p className='flex mr-4  mt-4 justify-center  item-center'>
              Not registered?{' '}
              <button onClick={fg} className='text-blue-600'>Signup</button>

            </p>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
