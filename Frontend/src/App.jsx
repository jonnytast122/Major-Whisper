import React, { useState } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterSide from './components/registerSide';
import LoginSide from './components/loginSide';
import LoginSignup from './Pages/loginRegister';
import Home from './Pages/home.jsx';
import ForgetSide from './components/forgetSide.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterSide />} />
          <Route path="/login" element={<LoginSide />} />
          <Route path="/loginRegister" element={<LoginSignup />} />
          <Route path="/forgetPassword" element={<ForgetSide />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
