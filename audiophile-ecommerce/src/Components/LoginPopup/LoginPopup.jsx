import React, { useState } from 'react';
import Cross from '../../../public/cross_icon.png';

const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Login");

    return (
        <div className='login-popup fixed inset-0 bg-semiTransparentBlack z-10 flex items-center justify-center'>
            <form className='login-popup-container w-80 text-gray-400 bg-white flex flex-col gap-6 py-6 px-8 rounded-md'>
                <div className="login-popup-title flex justify-between items-center">
                    <h2 className='text-black font-manrope'>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={Cross} alt='' className='cursor-pointer w-4' />
                </div>
                <div className="login-popup-input  flex flex-col gap-4">
                    {currentState === "Sign Up" && <input type='text' placeholder='Your name' required />}
                    <input type='email' placeholder='Your email' required  className='font-manrope outline-none p-3 border border-gray-200  rounded-sm '/>
                    <input type='password' placeholder='Your password' required  className='font-manrope outline-none p-3 border border-gray-200  rounded-sm '/>
                </div>
                <button className=' bg-burntSienna hover:bg-mellowApricot text-white py-2 rounded'>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition flex items-start gap-2">
                    <input type='checkbox' required  className='mt-2' />
                    <p className='text-black font-manrope'>By continuing I agree to the terms of use & privacy policy</p>
                </div>
                {currentState === "Login"
                    ? <p className='text-black font-manrope'>Create a new account ? <span onClick={() => setCurrentState("Sign Up")} className=' text-burntSienna font-medium cursor-pointer'>Click here</span></p>
                    : <p className='text-black font-manrope'>Already have an account? <span onClick={() => setCurrentState("Login")} className='text-burntSienna font-normal cursor-pointer'>Login here</span></p>
                }
            </form>
        </div>
    );
}

export default LoginPopup;
