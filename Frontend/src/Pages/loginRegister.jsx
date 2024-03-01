import React from 'react';
import { Link } from 'react-router-dom';

function LoginSignup() {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen '>
      <div className='flex justify-center'>
        <img
          className='w-36 mt-14 md:mt-0' // Adjust margin top for smaller screens
          src='src/assets/logo.jpg'
          alt='Logo'
        />
      </div>
      <div className='flex flex-col items-center mb-28'>
        <h1 className="text-black text-3xl md:text-4xl font-bold font-inter mb-14 md:mb-10 mt-6 md:mt-6 text-center"> {/* Adjust font size and margins for smaller screens */}
          Welcome Back to Major Whisper!
        </h1>
        <p className="text-md text-gray-1000 font-inter_regular text-center md:w-96"> {/* Limit text width for smaller screens */}
          Whispering Clarity, Majority with Confidence.
        </p>
        <p className="text-md mb-16 md:mb-20 text-gray-1000 text-inter"> {/* Adjust margin for smaller screens */}
          Unveiling Your Path, On Whisper at a Time.
        </p>
        <Link to="/login"> {/* Link to the login route */}
          <button className="py-3 px-20 md:py-4 md:px-28 font-dm_sans rounded-xl bg-CFCFCF text-white text-sl font-bold hover:bg-7E7E7E hover:text-gray-100 transition-colors duration-300 mb-10 md:mb-10"> {/* Adjust button size and margins for smaller screens */}
            Log In
          </button>
        </Link>
        <div className="flex items-center justify-center">
          <div className="w-26 md:w-48 border border-666666 border-opacity-25 border-solid"></div> {/* First line */}
          <div className="mx-2 md:mx-4 text-666666 font-Dm_sans">OR</div> {/* Or text with some horizontal margin */}
          <div className="w-30 md:w-48 border border-666666 border-opacity-25 border-solid"></div> {/* Second line */}
        </div>
        <Link to="/register"> {/* Link to the register route */}
          <button className="py-3 px-20 md:py-4 md:px-28 font-dm_sans rounded-xl bg-black text-white text-sl font-bold hover:bg-7E7E7E hover:text-gray-100 transition-colors duration-300 mt-4 md:mt-10"> {/* Adjust button size and margins for smaller screens */}
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LoginSignup;
