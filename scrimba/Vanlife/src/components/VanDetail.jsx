


const VanDetail = ({ name, imageUrl, price, type }) => {
    let color = null

    switch (type) {
        case "simple":
            color = "bg-[#E17654]";
            break;
        case "rugged":
            color = "bg-[#115E59]";
            break;
        case "luxury":  // Also corrected the spelling of 'luxury'
            color = "bg-[#161616]";
            break;
        default:
            color = "bg-[#FFFFFF]";
    }

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
                <button type="button" className={`inline-flex items-center rounded ${color} px-5 py-2.5 text-sm font-medium  text-white focus:outline-none`}>
                    {type}
                </button>
            </div>
        </div>
    )
}

export default VanDetail