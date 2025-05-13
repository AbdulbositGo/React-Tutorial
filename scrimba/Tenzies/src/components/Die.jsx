


const Die = (props) => {
    return (
        <button className="self-center bg-gray-50 size-20 border rounded-xl shadow shadow-gray-600 block p-2.5 bg-gray-700 border-gray-600 text-white text-4xl font-extrabold focus:ring-blue-500 focus:border-blue-500">
            {props.value}
        </button>
    );
}

export default Die;