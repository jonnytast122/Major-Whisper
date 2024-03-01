import React from 'react';
import Register from '../Pages/register';

function RegisterSide() {
    return (
        <div className="flex w-full h-screen">
            <div className="hidden flex-col relative lg:flex h-full w-1/2 items-center justify-center bg-black">
                <div className="absolute top-4 left-4 flex items-center"> {/* Adjust top and left values as needed */}
                    <img
                        className="w-10 rounded-full mr-2"
                        src="src/assets/logo.jpg"
                        alt="logo2"
                    />
                    <p className="text-white text-2xs font-inter">Major Whispers</p>
                </div>
                <div className="absolute inset-y-0 flex flex-col items-center justify-center mt-20">
                    <h1 className='text-white text-center text-4xl font-semibold font-inter mb-8 md:text-3xl'>Welcome Back to Major Whisper!</h1>
                    <p className='text-white font-inter text-center'>Whispering Clarity, Majority with Confidence.</p>
                    <p className='mb-5 text-md text-white text-center'>Unveiling Your Path, On Whisper at a Time.</p>
                    <div className='flex items-center'>
                        <img
                            className="w-48 mb-10 mt-32 mr-8 flex justify-center rounded-full"
                            src="src/assets/logo.jpg"
                            alt="logo-bottom"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center lg:w-1/2 bg-white">
                <Register />
            </div>
        </div>
    );
}

export default RegisterSide;
