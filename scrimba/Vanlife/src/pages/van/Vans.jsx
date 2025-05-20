import React, { useEffect, useState } from 'react'
import VanDetail from '../../components/VanDetail';
import { Vans as Sceleton } from '../../components/sceletons/Vans'
import { Link } from 'react-router-dom';



const Vans = () => {
    const [vans, setVans] = useState(null);


    async function fetchVans() {
        try {
            const response = await fetch(`http://127.0.0.1:8000/vans`);
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                throw new Error('Could not fetch the data');
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    }

    useEffect(() => {
        const getVans = async () => {
            const fetchedVans = await fetchVans();
            setVans(fetchedVans);
        };
        getVans();
    }, []);

    if (!vans) {
        return <Sceleton />
    }

    const vanElements = vans.map(van => (
        <Link to={`/vans/${van.id}`} key={van.id} >
            <VanDetail
                name={van.name}
                imageUrl={van.imageUrl}
                price={van.price}
                type={van.type} />
        </Link>
    ))

    return (
        <>
            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Explore our van options</h2>
            <div className="grid gap-8 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 space-y-8">
                {vanElements}
            </div>
        </>
    )
}

export default Vans