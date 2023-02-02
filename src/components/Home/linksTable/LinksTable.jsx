import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import moment from 'moment'
import {db , auth} from '../../../utils/firebase/firebase'
import {useContext} from 'react'
import {AuthContext} from   '../../../features/context/Auth'
import { useDispatch } from 'react-redux'
import { addURL,addURLS } from '../../../features/URLSlicer/URLSlicer'


const LinksTable = () => {
    
    let URLS =useSelector((state) => state.URLReducer.URLS);
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(true)
    const {currentUser} = useContext(AuthContext)
    

    useEffect(() => {
        if(currentUser){

        const getLinksFromFirebase =[];
        const subscribe = db.collection('Urls').where('email','==',currentUser?.email).onSnapshot((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                getLinksFromFirebase.push({...doc.data(), id:doc.id})
            });
            
            dispatch(addURLS(getLinksFromFirebase));
            setLoading(false);
        });
        return ()=>subscribe();
    }else{
        setLoading(false);
        
    }
        
    
    }, [])

    if(loading){
        return <h1>Loading...</h1>
    }


    return (

        <div className="relative overflow-x-auto w-10/12 rounded-lg shadow">
            <table className="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">

                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Original Url
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Short Url
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Created at
                        </th>
                    </tr>
                </thead>

                <tbody>
                    
                {URLS.map((url) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={url.shortUrl}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900  dark:text-white text-ellipsis overflow-hidden whitespace-pre-line ">
                                {url.originalUrl}
                            </th>
                            <td data-tooltip-target="tooltip-default" className="px-6 py-4 text-ellipsis whitespace-pre-line overflow-hidden">
                                <Tippy content="Link copied to clipboard" placement="bottom" trigger="click">
                                <span data-tooltip-target="tooltip-hover" data-tooltip-trigger="hover" onClick={() => navigator.clipboard.writeText(url.shortUrl)} className="cursor-pointer hover:text-cyan-500">
                                    {url.shortUrl}
                                </span>
                                </Tippy>
                            </td>
                            <td className="px-6 py-4">
                                {moment(url?.createdAt?.seconds).format('YYYY-MM-DD HH:mm:ss')}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    )
}

export default LinksTable