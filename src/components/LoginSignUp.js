import React, { useState } from 'react';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import { motion } from 'framer-motion';

const LoginSignUp = () => {

    const [currentPage, setCurrentPage] = useState('login');

    const togglePage = (formName) => {
        setCurrentPage(formName);
    }

    return (

        <motion.div layout>
            {
                currentPage === 'login' ? <Login onFormSwitch={togglePage} /> : <SignUp onFormSwitch={togglePage}/>
            }
        </motion.div>
    )
}

export default LoginSignUp