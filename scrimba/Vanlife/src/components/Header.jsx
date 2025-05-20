import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto py-4">
                <Link to='/' className="font-extrabold text-2xl">
                    #VANLIFE
                </Link>
                <ul className="font-medium flex gap-4 text-gray-700">
                    <li>
                        <Link to='/host' aria-current="page">Host</Link>
                    </li>
                    <li>
                        <Link to='/about' aria-current="page">About</Link>
                    </li>
                    <li>
                        <Link to='/vans' aria-current="page">Vans</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar