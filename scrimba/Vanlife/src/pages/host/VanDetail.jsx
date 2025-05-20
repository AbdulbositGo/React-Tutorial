import React, { useEffect, useState } from 'react'
import { useParams, NavLink, Outlet } from 'react-router-dom'

const VanDetail = () => {
    const [van, setVan] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/vans/${params.id}`).then(
            response => response.json()
        ).then(
            rawVan => setVan(rawVan)
        )
    }, [van])
    let color = "bg-[#FFFFFF]"


    if (!van) {
        return <h1>Loading...</h1>
    }

    if (van) {
        switch (van.type) {
            case "simple":
                color = "bg-[#E17654]";
                break;
            case "rugged":
                color = "bg-[#115E59]";
                break;
            case "luxury":
                color = "bg-[#161616]";
                break;
        }
    }

    return (
        <div className="space-y-6">
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
            <ul className="font-medium flex gap-4 text-gray-700">
                <li>
                    <NavLink to={`/host/vans/${van.id}/detail`} aria-current="page">Detail</NavLink>
                </li>
                <li>
                    <NavLink to={`/host/vans/${van.id}/pricing`} aria-current="page">Pricing</NavLink>
                </li>
                <li>
                    <NavLink to={`/host/vans/${van.id}/photos`} aria-current="page">Photos</NavLink>
                </li>
            </ul>
            <div className="mt-6 sm:mt-8 lg:mt-0">
                <Outlet />
            </div>
        </div >

    )
}

export { VanDetail }