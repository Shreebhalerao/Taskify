import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import underlineImg from '../../../assets/images/green-underline-img.png'

const ProtectedRoute = ({ children }) => {

    const { token } = useSelector(state => state.auth);

    // user logged in
    if (token !== null) {
        return children;
    }

    // If no token is present, navigate to the login page
    return (
        <div className='wrapper h-screen flex-center w-full'>

            <div className='text-2xl sm:text-4xl text-center relative leading-[35px] sm:leading-[60px]'>
                <p>Discover Today&apos;s Tasks 📝</p>

                <div className=''>
                    <Link
                        to='/login'
                        className='text-3xl bg-green-950 hover:bg-green-900 text-green-400 py-[3px] px-3 rounded-xl font-semibold duration-300'
                    >
                        Log in
                    </Link>
                    {' '}now to unlock your personalized <br />
                    <p className='relative'>Task Management  experience...!</p>
                    <img src={underlineImg} className='w-[230px] sm:w-[380px] absolute -bottom-32 sm:-bottom-52 left-1/2 transform -translate-x-1/2 select-none ' />
                </div>
            </div>

        </div>
    )

}

export default ProtectedRoute