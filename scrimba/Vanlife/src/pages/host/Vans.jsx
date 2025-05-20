import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { VanDetail } from './VanDetail'

const Vans = () => {
    const params = useParams()
    const [vans, setVans] = useState(null)

    useEffect(() => {
        fetch('http://127.0.0.1:8000/host/vans').then(
            response => response.json()
        ).then(
            rawVans => setVans(rawVans)
        )
    }, [vans])


    if (!vans) {
        return <h1>Loading...</h1>
    }

    const vanElements = vans.map(van => (
        <Link key={van.id} to={`/host/vans/${van.id}`} className="p-4 items-center bg-gray-50 rounded-lg flex">
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
            <h1 className="text-3xl font-bold">Your listed vans</h1>
            <div className="grid gap-8 mb-6 lg:mb-16 ">
                {vanElements}
            </div>
        </>
    )
}

export { Vans }