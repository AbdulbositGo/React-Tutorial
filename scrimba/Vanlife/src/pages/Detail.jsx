import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import RentButton from '../components/RentButton'

const Detail = () => {
    const params = useParams()
    const [van, setVan] = useState(null)
    const api = `http://127.0.0.1:8000/vans/${params.id}`

    useEffect(() => {
        console.log('sadfasd')
        fetch(api)
            .then(response => response.json())
            .then(data => setVan(data))
            .catch(error => console.error("Failed to fetch van:", error))
    }, [params.id])

    let color = "bg-[#FFFFFF]"

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

    if (!van) {
        return <div>Loading...</div>
    }

    return (
        <section className="py-8 antialiased md:py-12">
            {van &&
                <div className="mx-auto max-w-screen-lg px-4 2xl:px-0 space-y-6">
                    <div><Link to="/vans">Back to all vans</Link></div>
                    <div className="h-1/3 w-full">
                        <img className="h-96 object-center object-cover w-full rounded-lg" src={van.imageUrl} alt="" />
                    </div>
                    <div>
                        <button type="button" className={`inline-flex items-center rounded ${color} px-5 py-2.5 text-sm font-medium  text-white focus:outline-none`}>
                            {van.type}
                        </button>
                    </div>

                    <h1>{van.name}</h1>

                    <div className="">
                        <p className="font-bold text-lg">${van.price} /day</p>
                    </div>
                    <p>{van.description}</p>
                    <RentButton>Rent this van</RentButton>
                </div>
            }
        </section>
    )
}

export default Detail