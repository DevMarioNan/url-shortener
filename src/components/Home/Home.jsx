import React , {useEffect, useState} from 'react'
import UrlInput from './input/UrlInput'
import LinksTable from './linksTable/LinksTable'





const Home = () => {



    return (
        <div className=' flex flex-col items-center'>
            <UrlInput />
            <LinksTable />
        </div>
    )
}

export default Home