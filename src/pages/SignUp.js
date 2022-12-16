import React, { useState } from 'react'
import LoginImg from './images/Login.png'
import logo from '../components/images/logo.png'
import { motion } from 'framer-motion'

const SignUp = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, firstName, lastName);
    }

    return (
        <motion.div layout>
            <div className='relative w-full h-screen bg-zinc-100/20'>
                <img src={LoginImg} alt="/" className="absolute w-full h-full object-cover mix-blend-overlay"></img>
                <div className='flex justify-center items-center h-full'>
                    <form onSubmit={handleSubmit} className='max-w-[400px] mx-auto w-full bg-[#2C3E50]/30 p-7 rounded-xl border border-[#e1e9f5]/20 relative'>
                        <h2 className='font-bold text-center text-5xl text-white'>
                            <img src={logo} alt="logo" className="w-20 h-20 inline-block"></img>
                        </h2>
                        <div className='flex flex-col mb-5'>
                            <label className="text-white py-2">First Name</label>
                            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className='border relative bg-[#e1e9f5] p-2 rounded-xl' type="text" />
                        </div>
                        <div className='flex flex-col mb-5'>
                            <label className="text-white py-2">Last Name</label>
                            <input value={lastName} onChange={(e) => setLastName(e.target.value)} className='border relative bg-[#e1e9f5] p-2 rounded-xl' type="text" />
                        </div>
                        <div className='flex flex-col mb-5'>
                            <label className="text-white py-2">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className='border relative bg-[#e1e9f5] p-2 rounded-xl' type="text" />
                        </div>
                        <div className='flex flex-col mb-5'>
                            <label className="text-white py-2">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className='border relative  bg-[#e1e9f5] p-2 rounded-xl' type="password" />
                        </div>
                        <button type="submit" className='w-full py-4 mt-8 bg-[#0c2b45]/80 border border-[#e1e9f5]/20 hover:bg-[#0c2b45]/100 relative rounded-xl text-white'>Register</button>
                        <p onClick={() => props.onFormSwitch('login')} className='text-center mt-8 text-white hover:cursor-pointer'>Already have an account? Sign in here</p>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default SignUp