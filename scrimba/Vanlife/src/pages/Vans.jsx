import React, { useEffect, useState } from 'react'
import VanDetail from '../components/VanDetail';


const Vans = () => {
    const [vans, setVans] = useState([]);


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

    const vanElements = vans.map(van => (
        <VanDetail
            key={van.id}
            name={van.name}
            imageUrl={van.imageUrl}
            price={van.price}
            type={van.type} />
    ))

    return (
        <section className="py-8 antialiased md:py-12">
            <div className="mx-auto max-w-screen-lg px-4 2xl:px-0 space-y-14">
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Explore our van options</h2>

                <div className="grid gap-8 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 space-y-8">
                    {vanElements}
                </div>
            </div>
        </section>
    )
}

export default Vans