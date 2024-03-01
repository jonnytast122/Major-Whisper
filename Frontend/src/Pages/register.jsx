import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider } from '../authentication/logingoogle';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from "firebase/auth";
import { Alert, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return re.test(password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const register = () => {
    // Reset previous errors
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setError('');

    // Basic validation
    if (!username) {
      setUsernameError('Please enter your full name');
      return;
    }

    if (!email) {
      setEmailError('Please enter your email');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (!password) {
      setPasswordError('Please enter your password');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters alphanumeric');
      return;
    }

    if (!isChecked) {
      message.error('Please agree to the terms and conditions');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Register successful", user);
        message.success('Successfully registered!');

        sendEmailVerification(auth.currentUser)
          .then(() => {
            message.success('Successfully registered! Please check your email for verification.');
            navigate('/login');
          })
          .catch((error) => {
            console.error("Send email verification error", error);
            message.error('Failed to send email verification.');
          });
        
        setTimeout(() => {
          message.destroy();
        }, 3000);
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setError('Email is already in use');
        } else {
          setError(error.message);
        }
        console.error("Register error", error);
      });
  };

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setEmail(result.user.email);
        localStorage.setItem('email', result.user.email);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Sign in with Google error", error);
      });
  };

  useEffect(() => {
    setEmail(localStorage.getItem('email'));
  }, []);

  return (
    <div className='flex flex-col mb-32 mr-10'>
      <div className='font-bold text-2xl font-inter mt-16'>
        Create your account
      </div>
      <div className='text-27272E mb-4 font-inter-400 text-xs mt-2 font-semibold'>
        It's free and easy
      </div>
      <label className='flex flex-col mt-10 md:mt-4 text-425466 text-xs font-inter font-semibold'>Full name</label>
      <input
        className="w-full md:w-96 md:h-1/2 rounded-lg text-md p-3 mt-2 text-7A828A bg-EDF2F7"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {usernameError && <span className="text-red-500">{usernameError}</span>}
      <label className='flex flex-col text-xs mt-8  md:mt-4 text-425466 font-inter font-semibold'>E-mail or phone number</label>
      <input
        className="w-full md:w-96 md:h-1/2 rounded-lg text- p-3 mt-2 text-7A828A bg-EDF2F7"
        placeholder="Type your e-mail or phone number"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError && <span className="text-red-500">{emailError}</span>}
      <label className='flex flex-col mt-8 text-xs  md:mt-4 text-425466 font-inter font-semibold'>Password</label>
      <div className="relative">
        <input
          className="w-full md:w-96 md:h-1/2 rounded-lg text-md p-3 mt-2 mb-4 text-7A828A bg-EDF2F7 pr-10"
          placeholder="Type your password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="absolute top-4 right-4 cursor-pointer" onClick={togglePasswordVisibility}>
          {showPassword ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
        </span>
      </div>
      {passwordError && <span className="text-red-500">{passwordError}</span>}
      <div className='md:mb-8 mt-6'>
        <input
          type='checkbox'
          className='h-4 w-4 -mb-6'
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label className='text-425466 font-inter text-xs ml-3'>By creating an account means you agree to the <b>Terms and</b> <br /> <b>Conditions</b>, and <b>our Privacy Policy</b></label>
      </div>
      <button onClick={register} className="py-3 rounded-3xl mt-6 bg-black text-white text-sl font-bold hover:bg-gray-800 hover:text-gray-200 transition-colors duration-300">Register</button>
      <div className="mt-10 md:mt-5 flex justify-center items-center">
        <hr className="w-1/4 border-EDF2F7 border-solid border-r-2" />
        <p className="mx-2 text-xs text-718096">or do it via other accounts</p>
        <hr className="w-1/4 border-EDF2F7 border-solid border-l-2" />
      </div>
      <div className="mt-8 flex justify-center md:mt-5">
        <button onClick={handleClick}>Sign in with Google</button>
      </div>
      <p className="text-sm mt-28 md:mt-4 font-semibold items-center ml-20 text-718096">Already have an account?<Link to="/login"><button className="ml-2 text-black font-semibold">Sign In</button></Link></p>
      {/* Error message using Ant Design Alert */}
      {error && <Alert message={error} type="error" className="mt-2" />}
    </div>
  );
}

export default Register;
