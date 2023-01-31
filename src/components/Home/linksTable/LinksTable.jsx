import React from 'react'
import { useSelector } from 'react-redux'

import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const LinksTable = () => {
    const  URLS  = useSelector((state) => state.URLReducer.URLS)

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
                                {url.createdAt}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    )
}

export default LinksTable