


const Die = (props) => {
    return (
        <button onClick={() => props.holdDie(props.id)} className={`${props.isHeld ? 'bg-green-400 text-black shadow-green-600' : 'bg-gray-700 text-white shadow-gray-600'} self-center size-20 border rounded-xl shadow block p-2.5 border-gray-600 text-4xl font-extrabold focus:outline-none`}>
            {props.value}
        </button>
    );
}

export default Die;