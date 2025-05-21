import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { getActiveLink } from '../utility'

const HostLayout = () => {
    return (
        <>
            <ul className="font-medium flex gap-4 text-gray-700">
                <li>
                    <NavLink to='.' end className={getActiveLink} aria-current="page">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to='income' className={getActiveLink} aria-current="page">Income</NavLink>
                </li>
                <li>
                    <NavLink to='vans' className={getActiveLink} aria-current="page">Vans</NavLink>
                </li>
                <li>
                    <NavLink to='reviews' className={getActiveLink} aria-current="page">Reviews</NavLink>
                </li>
            </ul>
            <Outlet />
        </>
    )
}

export default HostLayout