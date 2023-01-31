import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import {AuthContext} from '../../features/context/Auth'


const Navbar = () => {
    const {currentUser} = useContext(AuthContext)



    return (
        <div className='bg-cyan-400 text-white p-5 shadow flex items-center justify-between '>
            <div>
                <Link to='/'>
                    <h1 className='text-2xl font-mono cursor-pointer'>URL - Shortener</h1>
                </Link>
            </div>

            <div className='flex justify-end'>
                {!currentUser ? 
                <Link to='/signin'>
                    <h1 className='text-xl font-mono cursor-pointer ml-5'>SignIn</h1>
                </Link> 
                : 
                <h1 className='text-xl font-mono cursor-pointer ml-5'>Hi, {currentUser.email}</h1>
                }
                
            </div>

        </div>
    )
}

export default Navbar