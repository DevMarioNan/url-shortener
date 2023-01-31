import React,{useState} from 'react'
import { shorten } from '../../../utils/API'
import { useDispatch } from 'react-redux'
import { addURL } from '../../../features/URLSlicer/URLSlicer'
import moment from 'moment/moment'


const UrlInput = () => {
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    const handleURL = () => {
        const url = shorten(input);
        url.then((res)=>{
            if(res?.data[0]?.code !== undefined){
                dispatch(addURL({
                    originalUrl: res.data[0].long,
                    shortUrl: `gotiny.cc/${res.data[0].code}` ,
                    createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
                }))
            }else{
                setError(true);
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className='w-10/12 my-4'>
            <div className="relative">
                <input 
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Enter a Valid URL"
                required 
                onChange={(e)=>{
                    setInput(e.target.value)
                    setError(false);
                }}
                />
                <button 
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={()=>handleURL()}>
                    Short
                </button>
            </div>
            {error && <p className="text-red-500 text-sm">Please enter a valid URL</p>}
        </div>
    )
}

export default UrlInput