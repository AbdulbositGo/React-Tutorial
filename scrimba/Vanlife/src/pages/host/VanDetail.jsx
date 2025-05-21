import { useOutletContext } from "react-router-dom";


const VanDetail = () => {
    const [van] = useOutletContext();

    return (
        <div className="space-y-6">
            <div className="flex gap-2">
                <p className="font-semibold text-gray-900 ">Name:</p>
                <p className="text-gray-500 dark:text-gray-700">{van.name}</p>
            </div>
            <div className="flex gap-2">
                <p className="font-semibold text-gray-900 ">Category:</p>
                <p className="text-gray-500 dark:text-gray-700">{van.type}</p>
            </div><div className="flex gap-2">
                <p className="font-semibold text-gray-900 ">Description:</p>
                <p className="text-gray-500 dark:text-gray-700">{van.description}</p>
            </div>
            <div className="flex gap-2">
                <p className="font-semibold text-gray-900 ">Visibility:</p>
                <p className="text-gray-500 dark:text-gray-700">Public</p>
            </div>
        </div>
    )
}


const VanPricing = () => {
    const [van] = useOutletContext();

    return (
        <div className="flex gap-1 items-end py-6">
            <h1 className="text-3xl font-bold">${van.price}</h1>
            <span className="text-xl">/day</span>
        </div>
    )
}


const VanPhotos = () => {
    const [van] = useOutletContext();

    return (
        <div>
            <div className="size-32">
                <img className=" object-center object-cover w-full rounded-lg" src={van.imageUrl} alt="" />
            </div>
        </div>
    )
}


export { VanDetail, VanPricing, VanPhotos }