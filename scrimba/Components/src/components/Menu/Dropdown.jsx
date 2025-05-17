import Toggle from "../Toggle/Toggle"


const Dropdown = ({ children }) => {

    return (
        <Toggle.On>
            <div id="dropdown" className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" >
                    {children}
                </ul>
            </div>
        </Toggle.On>
    )
}

export default Dropdown