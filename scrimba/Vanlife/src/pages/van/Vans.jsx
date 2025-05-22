import React, { useEffect, useState } from 'react'
import VanDetail from '../../components/VanDetail';
import { Vans as Skeleton } from '../../components/skeletons/Vans'
import { Link, NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { getActiveLink } from '../../utility';



const Vans = () => {
    const [vans, setVans] = useState(null);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation();
    const type = searchParams.get("type")

    useEffect(() => {
        const fetchVans = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/vans${location.search}`);
                if (!response.ok) {
                    throw new Error('Could not fetch the data');
                }
                const data = await response.json();
                setVans(data);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError(err.message);
                setVans([]); // So we don't show the Skeleton forever
            }
        };
        fetchVans();
    }, [location.search]);

    if (error) return <div>Error: {error}</div>;
    if (!vans) return <Skeleton />;

    const vanElements = vans.map(van => (
        <Link
            to={`${van.id}`}
            key={van.id} >
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

            <nav className="flex items-center justify-between">
                <ul className="font-medium flex gap-2 text-gray-700">
                    <li>
                        <NavLink to='?type=simple' className={`rounded-lg py-1 px-3 hover:text-white hover:bg-[#E17654] ${type === "simple" && "bg-[#E17654] text-white"}`} aria-current="page">Simple</NavLink>
                    </li>
                    <li>
                        <NavLink to='?type=rugged' className={`rounded-lg py-1 px-3 hover:text-white hover:bg-[#115E59] ${type === "rugged" && "bg-[#115E59] text-white"}`} aria-current="page">Rugged</NavLink>
                    </li>
                    <li>
                        <NavLink to='?type=luxury' className={`rounded-lg py-1 px-3 hover:text-white hover:bg-[#161616] ${type === "luxury" && "bg-[#161616] text-white"}`} aria-current="page">Luxury</NavLink>
                    </li>
                </ul>
                {type &&
                    <div>
                        <NavLink to="." className="rounded-lg py-1 px-3  hover:bg-gray-200" aria-current="page">Clear</NavLink>
                    </div>
                }
            </nav>
            <div className="grid gap-8 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 space-y-8">
                {vanElements}
            </div>
        </>
    )
}

export default Vans