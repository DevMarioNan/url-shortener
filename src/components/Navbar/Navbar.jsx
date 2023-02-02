import React, { useContext,useState,useRef ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../features/context/Auth'
import { auth } from '../../utils/firebase/firebase'
import { addURLS } from '../../features/URLSlicer/URLSlicer'
import { useDispatch } from 'react-redux'

const Navbar = () => {
    const { currentUser } = useContext(AuthContext)
    const dispatch = useDispatch()
    const [dropdown, setDropdown] = useState(false)
    const ref = useRef(null)

    const handleSignOut = () => {
        auth.signOut()
        dispatch(addURLS([]));
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target) && ref.current.id !== 'button') {
                setDropdown(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);


    return (
        <div className='bg-cyan-400 text-white p-5 shadow flex items-center justify-between '>
            <div>
                <Link to='/'>
                    <h1 className='sm:text-lg md:text-2xl  font-mono cursor-pointer'>URL - Shortener</h1>
                </Link>
            </div>

            <div className='flex justify-end'>
                {!currentUser ?
                    <Link to='/signin'>
                        <h1 className='sm:text-sm md:text-xl font-mono cursor-pointer ml-5'>SignIn</h1>
                    </Link>
                    :
                    <div className='flex items-center'>
                        <h1 id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className='sm:lg md:text-xl font-mono cursor-pointer ml-5'>
                            <span id="button"  onClick={()=>setDropdown(!dropdown)}>Hi, {currentUser.email.split("@")[0]}</span>
                            {dropdown &&
                            <div ref={ref} id="dropdown"  className='z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 '>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleSignOut()}>SignOut</a>
                                    </li>
                                </ul>
                            </div>
                            }
                        </h1>
                        
                        
                    </div>
                }

            </div>

        </div>
    )
}

export default Navbar