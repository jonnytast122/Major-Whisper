import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider } from '../authentication/logingoogle';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Alert, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

function Login() {
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
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

    const SignIn = () => {
        setEmailError('');
        setPasswordError('');
        setError('');

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

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                if (!user.emailVerified) {
                    setError("Please verify your email before signing in.");
                    message.error('Please verify your email before signing in.');
                    return;
                }
                console.log("User signed in", user);
                message.success('Welcome back!', user);
                navigate('/');
                setTimeout(() => {
                    message.destroy();
                }, 3000); // 3000 milliseconds (3 seconds)
            })
            .catch((error) => {
                if (error.code === "auth/user-not-found") {
                    setError("User does not exist");
                    message.error('User does not exist');
                } else if (error.code === "auth/wrong-password") {
                    setError("Invalid email or password");
                    message.error('Invalid email or password');
                } else {
                    setError("Sign in failed. Please try again later.");
                    console.error("Sign in error", error);
                    message.error('User does not exist');
                }
            });
    };

    const handleClick = () => {
        signInWithPopup(auth, provider).then((result) => {
            setValue(data.user.email)
            localStorage.setItem('email', data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })

    return (
        <div className='flex flex-col mb- mr-10'>
            <div className='font-bold text-2xl font-inter'>
                Welcome back!
            </div>
            <div className='text-27272E font-inter font-semibold text-xs mt-2'>
                Meet the good taste today
            </div>
            <label className='flex flex-col mt-8 text-425466 text-xs font-inter font-semibold'>E-mail or phone number</label>
            <input
                className="w-full md:w-96 rounded-lg text-md p-3 mt-2 text-7A828A bg-EDF2F7"
                placeholder="Type your e-mail or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <span className="text-red-500">{emailError}</span>}
            <label className='flex flex-col text-xs mt-8 text-425466 font-inter font-semibold'>Password</label>
            <div className="relative">
                <input
                    className="w-full md:w-96 md:h-1/2 rounded-lg text-md p-3 mt-2  text-7A828A bg-EDF2F7 pr-10"
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
            <div className="flex justify-end">
                <Link to="/forgetPassword" className="text-xs mt-2 mb-6 font-inter font-md text-777E90">Forget Password?</Link>
            </div>
            <button onClick={SignIn} className="py-3 rounded-3xl bg-black text-white text-sl font-bold hover:bg-gray-800 hover:text-gray-200 transition-colors duration-300">Sign In</button>
            <div className="mt-10 flex justify-center items-center">
                <hr className="w-1/4 border-EDF2F7 border-solid border-r-2" />
                <p className="mx-2 text-xs text-718096">or do it via other accounts</p>
                <hr className="w-1/4 border-EDF2F7 border-solid border-l-2" />
            </div>
            <div className="mt-8 flex justify-center">
                <button onClick={handleClick}>Sign in with Google</button>
            </div>
            <p className="text-sm mt-12 font-semibold items-center ml-20 text-718096">Don't have an account?<Link to="/register"><button className="ml-2 text-black font-semibold">Sign Up</button></Link></p>
        </div>
    );
}

export default Login
