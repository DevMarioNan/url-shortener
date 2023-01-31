import React from 'react'
import {AiFillGithub} from 'react-icons/ai'


const Footer = () => {
    return (
    <div className='bg-black text-white flex align-center justify-center shadow p-2 mt-auto'>
        <h1 className='text-1xl font-mono px-4  '>
        Copyright &copy; 2023 MarioNan  <a href='https://github.com/DevMarioNan' target="_blank"><AiFillGithub className='inline text-2xl font-mono' /> </a> . All rights reserved.
        </h1>
    </div>
    ) 
}

export default Footer