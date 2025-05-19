import React from 'react'

const RentButton = ({ children }) => {
    return (
        <button type="button" className="w-full focus:outline-none text-white bg-[#FF8C38] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">{children}</button>
    )
}

export default RentButton