import clsx from 'clsx';


const Main = ({ gameWon, alphabet, func, guessedLetters, word }) => {
    const alphabetElements = alphabet.map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && word.includes(letter)

        return <button onClick={() => func(letter)}
            key={letter}
            className={clsx(isGuessed ? isCorrect ? 'bg-green-500' : 'bg-red-500' : 'bg-yellow-500', 'size-10 p-1 rounded')}
        >
            {letter}
        </button >

    }
    )

    return (
        <div >
            <div className="flex flex-wrap justify-center max-w-3/4 m-auto gap-1">
                {alphabetElements}
            </div>
            <div className="flex justify-center mt-6">
                <button className="text-white py-2 px-4 rounded bg-blue-500">
                    {gameWon ? 'Youe Won' : 'New game'}
                </button>
            </div>
        </div>
    );
}

export default Main;
