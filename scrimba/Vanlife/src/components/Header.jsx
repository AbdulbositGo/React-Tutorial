import React from 'react'
import { NavLink } from 'react-router-dom'
import { getActiveLink } from '../utility'

const Navbar = () => {
    return (
        <nav>
            <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto py-4">
                <NavLink to='.' className="font-extrabold text-2xl">
                    #VANLIFE
                </NavLink>
                <ul className="font-medium flex gap-4 text-gray-700">
                    <li>
                        <NavLink to='host' className={getActiveLink} aria-current="page">Host</NavLink>
                    </li>
                    <li>
                        <NavLink to='about' className={getActiveLink} aria-current="page">About</NavLink>
                    </li>
                    <li>
                        <NavLink to='vans' className={getActiveLink} aria-current="page">Vans</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar