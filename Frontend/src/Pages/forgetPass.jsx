import React, { useState, useEffect } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../authentication/logingoogle';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

function ForgetPass() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [emailSent, setEmailSent] = useState(false);

  const handleSendEmail = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setEmailSent(true);
      
      console.log('Password reset email sent successfully!');
      message.success('Password reset email sent successfully!', 3); 
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        message.error('Email not found. Please enter a valid email address.', 3); 
      } else {
        message.error(error.message, 3); 
      }
      console.error('Error sending password reset email:', error.message);
    }
  };

  useEffect(() => {
    let timeout;
    if (emailSent) {
      timeout = setTimeout(() => {
        navigate('/login');
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [emailSent, navigate]);

  return (
    <div className='flex flex-col mb- mr-10'>
      <div className='font-bold text-2xl font-inter'>
        Forget Password?
      </div>
      <div className='text-27272E font-inter font-semibold text-xs mt-2'>
        Enter your email to reset your password
      </div>
      <label className='flex flex-col mt-8 text-425466 text-xs font-inter font-semibold'>E-mail</label>
      <input
        className="w-full md:w-96 rounded-lg text-md p-3 mt-2 text-7A828A bg-EDF2F7"
        placeholder="Type your e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="py-3 rounded-3xl mt-10 bg-black text-white text-sl font-bold hover:bg-gray-800 hover:text-gray-200 transition-colors duration-300"
        onClick={handleSendEmail}
      >
        Send
      </button>
    </div>
  );
}

export default ForgetPass;
