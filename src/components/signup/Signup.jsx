import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../utils/firebase/firebase'
import { useNavigate } from 'react-router-dom'

const initialState = {
    email: '',
    password: '',
    confirmPassword: ''
}

const Signup = () => {
        const [input,setInput] = useState(initialState)
        const [error,setError] = useState(false);
        const navigate = useNavigate();

        const handleChange = (e)=> {
            setInput({...input, [e.target.name]:e.target.value})
            setError(false);
            
        }

        const handleSubmit = async(e) => {
            e.preventDefault()
            
            if(input.password !== input.confirmPassword) return setError('Password does not match');

            try {
                await auth.createUserWithEmailAndPassword(input.email, input.password);
                setInput(initialState);
                navigate('/');
            } catch (error) {
                setError(error.message);
            }
        }

    return (
        <div className='w-full h-full  shadow justify-self-center flex justify-center items-center flex-col'>
            <div className="w-2/6  border-2 shadow rounded-2xl ">
            <h1 className='text-center text-4xl my-2'>Sign Up</h1>
            <form className='flex flex-col items-center my-10' onSubmit={(e)=>handleSubmit(e)}>
                <input name="email" className="w-10/12 border-2 my-4 p-3 rounded-2xl" type="email" id="email" placeholder='Email'  onChange={(e)=> handleChange(e)}/>
                <input name="password" className="w-10/12 border-2 my-4 p-3 rounded-2xl"type="password" id="password" placeholder='Password' onChange={(e)=> handleChange(e)}/>
                <input name="confirmPassword" className="w-10/12 border-2 my-4 p-3 rounded-2xl"type="password"  placeholder='Confirm Password' onChange={(e)=> handleChange(e)}/>
                <button className='my-5 bg-cyan-400 text-white py-4 text-xl px-7 rounded-3xl' type="submit">Sign Up</button>
            </form>
        </div>
        <p className='my-2'>Already have an account?</p>
        <Link to="/signin"><span className='text-cyan-400'>Sign In</span></Link>
        </div>
    )
}

export default Signup