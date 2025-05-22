import getColor from "../utility"



const VanDetail = ({ name, imageUrl, price, type }) => {
    const color = getColor({ type })

    return (
        <div className="space-y-8">
            <div className="h-56 w-full ">
                <img className="h-full object-center object-cover w-full rounded-lg" src={imageUrl} alt="" />
            </div>
            <div className="space-y-4">
                <div className="flex justify-between items-top gap-2">
                    <p className="text-lg font-semibold leading-tight text-gray-900">{name}</p>
                    <div className="text-end">
                        <p className="font-bold text-lg">${price}</p>
                        <p className="text-xs">/day</p>
                    </div>
                </div>
                <div className={`inline-flex items-center rounded ${color} px-5 py-2.5 text-sm font-medium  text-white focus:outline-none`}>
                    {type}
                </div>
            </div>
        </div>
    )
}

export default VanDetail