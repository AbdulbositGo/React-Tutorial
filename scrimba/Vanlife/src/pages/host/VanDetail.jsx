

const VanDetail = () => {
    return (
        <div className="space-y-6">
            <div className="flex gap-2">
                <p className="font-semibold text-gray-900 ">Name:</p>
                <p className="text-gray-500 dark:text-gray-700">helene@example.com</p>
            </div>
            <div className="flex gap-2">
                <p className="font-semibold text-gray-900 ">Category:</p>
                <p className="text-gray-500 dark:text-gray-700">helene@example.com</p>
            </div><div className="flex gap-2">
                <p className="font-semibold text-gray-900 ">Description:</p>
                <p className="text-gray-500 dark:text-gray-700">helene@example.com</p>
            </div>
            <div className="flex gap-2">
                <p className="font-semibold text-gray-900 ">Visibility:</p>
                <p className="text-gray-500 dark:text-gray-700">helene@example.com</p>
            </div>
        </div>
    )
}


const VanPricing = () => {
    return (
        <div className="flex gap-1 items-end py-6">
            <h1 className="text-3xl font-bold">$60</h1>
            <span className="text-xl">/day</span>
        </div>
    )
}


const VanPhotos = () => {
    return (
        <div>
            <div className="size-32">
                <img className=" object-center object-cover w-full rounded-lg" src="https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png" alt="" />
            </div>

        </div>
    )
}


export { VanDetail, VanPricing, VanPhotos }