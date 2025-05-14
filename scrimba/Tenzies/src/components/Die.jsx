


const Die = (props) => {
    return (
        <button
            onClick={() => props.holdDie(props.id)}
            aria-pressed={props.isHeld}
            aria-label={`Die with value${props.value}, ${props.isHeld ? 'held' : 'not held'}`}
            className={`${props.isHeld ? 'bg-green-400 text-black shadow-green-600' : 'bg-gray-700 text-white shadow-gray-600'} self-center size-20 border rounded-xl shadow block p-2.5 border-gray-600 text-4xl font-extrabold focus:ring-2 focus:ring-green-500 focus:outline-none`}
        >
            {props.value}
        </button>
    );
}

export default Die;