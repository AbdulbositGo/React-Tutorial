import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const HostLayout = () => {
    return (
        <>
            <ul className="font-medium flex gap-4 text-gray-700">
                <li>
                    <NavLink to='/host/dashboard' aria-current="page">About</NavLink>
                </li>
                <li>
                    <NavLink to='/host/income' aria-current="page">Income</NavLink>
                </li>
                <li>
                    <NavLink to='/host/vans' aria-current="page">Vans</NavLink>
                </li>
                <li>
                    <NavLink to='/host/reviews' aria-current="page">Reviews</NavLink>
                </li>
            </ul>
            <Outlet />
        </>
    )
}

export default HostLayout