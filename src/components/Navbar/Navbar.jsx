import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-cyan-400 text-white p-5 shadow flex items-center justify-between '>
            <div>
                <Link to='/'>
                    <h1 className='text-2xl font-mono cursor-pointer'>URL - Shortener</h1>
                </Link>
            </div>

            <div className='flex justify-end'>
                <Link to='/signup'>
                    <h1 className='text-xl font-mono cursor-pointer ml-5'>SignIn</h1>
                </Link>
            </div>

        </div>
    )
}

export default Navbar