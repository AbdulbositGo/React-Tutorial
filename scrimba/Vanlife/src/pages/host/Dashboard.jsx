import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [vans, setVans] = useState(null)

    useEffect(() => {
        fetch('http://127.0.0.1:8000/host/vans').then(
            response => response.json()
        ).then(
            rawVans => setVans(rawVans)
        )
    }, [])


    if (!vans) {
        return <h1>Loading...</h1>
    }

    const vanElements = vans.map(van => (
        <Link
            to={`${van.id}`}
            key={van.id}
            className="p-4 items-center bg-white rounded-lg flex"
        >
            <div className="h-28">
                <img className="h-full w-auto object-center object-cover  rounded-lg" src={van.imageUrl} alt="" />
            </div>
            <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                    <p>{van.name}</p>
                </h3>
                <span className="text-gray-500 ">${van.price} /day</span>
            </div>
        </Link>
    ))


    return (
        <>
            <div className="bg-amber-100">
                <div className="p-6 space-y-6">
                    <h1 className="font-bold text-2xl">Welcome</h1>
                    <p>income last <span className="underline">30 days</span></p>
                    <h1 className="text-3xl font-extrabold">$2,600</h1>
                </div>
                <div>
                    <div className="flex items-center gap-2 p-6 bg-amber-200">
                        <h3 className="text-xl font-bold">Review score</h3>
                        <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>
                        <span className="font-bold">5<span className="text-gray-700 font-normal">/5</span></span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Your listed vans</h1>
                <Link to="vans">View all</Link>

            </div>
            <div className="grid gap-6 mb-6">
                {vanElements}
            </div>
        </>
    )
}

export default Dashboard