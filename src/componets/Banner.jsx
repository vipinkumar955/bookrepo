import React from 'react';

function Banner() {
  return (
    <>
      <div className="flex mx-auto sm:flex-col font-5px w-full md:px-20 px-4 flex-col md:flex-row my-10">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            {/* Removed the Lorem Ipsum paragraph and added a book-related paragraph */}
            <p className="text-xl font-bold md:text-xl mb-6">
              Dive into the world of knowledge with our wide selection of books. Whether you're into fiction, non-fiction, or self-help, we have something for every reader!
            </p>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="border-2 border-gray-300 w-full h-[40px] p-5 rounded-md mb-4"
            />
          </div>
          <button className="bg-pink-700 text-white w-[120px] h-[40px] rounded-lg shadow-lg mt-6">
            Subscribe
          </button>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
          <img  
            src='/books/2io.jpg'
            alt="Banner Image" 
            className="rounded-lg shadow-lg w-[400px] h-[400px]"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
