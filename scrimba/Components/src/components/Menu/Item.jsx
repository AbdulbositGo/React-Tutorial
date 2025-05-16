import React from 'react'


const Item = ({ children }) => {
    return (
        <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{children}</a>
        </li>
    )
}

export default Item