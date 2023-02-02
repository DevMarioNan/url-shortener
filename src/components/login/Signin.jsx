import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../../utils/firebase/firebase'

const initialState = {
    email: '',
    password: ''
}

const Signin = () => {
    const navigate  = useNavigate()
    const [input,setInput] = useState(initialState)
    const [error,setError] = useState('');

    const handleChange = (e) => {
        setInput({...input, [e.target.name]:e.target.value})
        setError(false);
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        try {
            await auth.signInWithEmailAndPassword(input.email, input.password)
            setInput(initialState);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
    <div className='w-full h-full  shadow justify-self-center flex justify-center items-center flex-col'>
        <div className=" w-5/6 sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 border-2 shadow rounded-2xl ">
            <h1 className='text-center text-4xl my-2'>Sign In</h1>
            <form className='flex flex-col items-center my-10' onSubmit={(e)=>handleSubmit(e)}>
                <input className="w-10/12 border-2 my-4 p-3 rounded-2xl" name="email" type="email"  id="email" placeholder='Email' onChange={(e)=>handleChange(e)}/>
                <input className="w-10/12 border-2 my-4 p-3 rounded-2xl"type="password" name="password" id="password"  placeholder='Password' onChange={(e)=>handleChange(e)}/>
                <button className='my-5 bg-cyan-400 text-white py-4 text-xl px-7 rounded-3xl' type="submit">Sign In</button>
                <p className="form_error text-red-700">{error ? 'Email or Password is wrong please try again!' : ''}</p>
            </form>
        </div>
        <p className='my-2'>Don't have an account?</p>
        <Link to="/signup"><span className='text-cyan-400'>Sign Up</span></Link>
    </div>
    )
}

export default Signin