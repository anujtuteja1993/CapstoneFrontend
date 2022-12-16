import React, { useState } from 'react';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const LoginSignUp = () => {

    const [currentPage, setCurrentPage] = useState('login');

    const togglePage = (formName) => {
        setCurrentPage(formName);
    }

    return (

        <div>
            {
                currentPage === 'login' ? <Login onFormSwitch={togglePage} /> : <SignUp onFormSwitch={togglePage}/>
            }
        </div>
    )
}

export default LoginSignUp