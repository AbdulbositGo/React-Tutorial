const Main = ({ alphabet, func }) => {
    const alphabetElements = alphabet.map(letter => (
        <button onClick={() => func(letter)} key={letter} className="size-10 p-1 rounded bg-yellow-500">{letter}</button>
    ))

    return (
        <div >
            <div className="flex flex-wrap justify-center max-w-3/4 m-auto gap-1">
                {alphabetElements}
            </div>
            <div className="flex justify-center mt-6">
                <button className="text-white py-2 px-4 rounded bg-blue-500">New game</button>

            </div>
        </div>
    );
}

export default Main;
