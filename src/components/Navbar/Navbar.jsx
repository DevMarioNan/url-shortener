import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import {AuthContext} from '../../features/context/Auth'
import {auth} from '../../utils/firebase/firebase'
import {addURLS} from '../../features/URLSlicer/URLSlicer'
import {useDispatch} from 'react-redux'

const Navbar = () => {
    const {currentUser} = useContext(AuthContext)
    const dispatch = useDispatch()

    const handleSignOut = () => {
        auth.signOut()
        dispatch(addURLS([]));
    }

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
                <div className='flex items-center'>
                <h1 className='text-xl font-mono cursor-pointer ml-5'>Hi, {currentUser.email}</h1>
                <h1 className='text-xl font-mono cursor-pointer ml-5 text-cyan-400 bg-white py-2 px-6 rounded-2xl' onClick={()=> handleSignOut()}>SignOut</h1>
                </div>
                }
                
            </div>

        </div>
    )
}

export default Navbar