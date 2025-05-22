import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import RentButton from '../../components/RentButton'
import { Detail as Skeleton } from '../../components/skeletons/Detail'
import getColor from '../../utility'


const Detail = () => {
    const params = useParams()
    const [van, setVan] = useState(null)
    const api = `http://127.0.0.1:8000/vans/${params.id}`

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => setVan(data))
            .catch(error => console.error("Failed to fetch van:", error))
    }, [params.id])

    const color = getColor(van)

    if (!van) {
        return <Skeleton />
    }

    return (van &&
        <>
            <div className="underline"><Link to="/vans">Back to all vans</Link></div>
            <div className="h-1/3 w-full">
                <img className="h-96 object-center object-cover w-full rounded-lg" src={van.imageUrl} alt="" />
            </div>
            <div>
                <button type="button" className={`inline-flex items-center rounded ${color} px-5 py-2.5 text-sm font-medium  text-white focus:outline-none`}>
                    {van.type}
                </button>
            </div>

            <h1 className="text-3xl font-bold">{van.name}</h1>

            <div className="">
                <p className="font-bold text-lg">${van.price} /day</p>
            </div>
            <p>{van.description}</p>
            <RentButton>Rent this van</RentButton>
        </>

    )
}

export default Detail