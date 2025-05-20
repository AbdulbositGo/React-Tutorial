import React, { createContext, useEffect, useState } from 'react'
import { useParams, NavLink, Outlet } from 'react-router-dom'
import getColor from '../utility'


const HostVanContext = createContext()

const HostVanLayout = () => {
    const [van, setVan] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/vans/${params.id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch van")
                }
                return response.json()
            })
            .then(data => setVan(data))
            .catch(err => console.error("Fetch error:", err))
    }, [params.id])


    if (!van) {
        return <h1>Loading...</h1>
    }

    const color = getColor(van)

    return (
        <HostVanContext.Provider value={{ van }}>
            <div className="underline mb-6"><NavLink to=".." relative="path">Back to all vans</NavLink></div>
            <div className="space-y-6 rounded-lg bg-white p-6">
                <div className="items-center rounded-lg flex ">
                    <div className="h-52">
                        <img className="h-full w-auto object-center object-cover  rounded-lg" src={van.imageUrl} alt="" />
                    </div>
                    <div className="p-5 space-y-4">
                        <button type="button" className={`inline-flex items-center rounded ${color} px-5 py-2.5 text-sm font-medium  text-white focus:outline-none`}>
                            {van.type}
                        </button>
                        <h3 className="text-xl font-bold tracking-tight text-gray-900">
                            <p>{van.name}</p>
                        </h3>
                        <span className="text-gray-500 ">${van.price} /day</span>
                    </div>
                </div>
                <ul className="font-medium flex gap-4 text-gray-700 ">
                    <li className="hover:underline hover:text-black">
                        <NavLink to="." aria-current="page">Detail</NavLink>
                    </li>
                    <li className="hover:underline hover:text-black">
                        <NavLink to="pricing" aria-current="page">Pricing</NavLink>
                    </li>
                    <li className="hover:underline hover:text-black">
                        <NavLink to="photos" aria-current="page">Photos</NavLink>
                    </li>
                </ul>
                <div className="mt-6 sm:mt-8 lg:mt-0">
                    <Outlet />
                </div>
            </div >
        </HostVanContext.Provider>
    )
}

export default HostVanLayout
export { HostVanContext }