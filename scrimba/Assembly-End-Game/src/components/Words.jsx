const Words = ({ word }) => {
    const wordElements = word.toUpperCase().split('').map(letter => (
        <span key={letter} className="size-12 bg-gray-700 rounded text-gray-200 border-b-2 border-gray-200 text-2xl font-bold flex text-center items-center justify-center">{letter}</span>

    ))
    return (
        <div className="flex gap-2 justify-center uppercase">
            {wordElements}
        </div>
    );
}

export default Words;