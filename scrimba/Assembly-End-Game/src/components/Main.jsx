import clsx from 'clsx';


const Main = ({ gameOver, newGame, alphabet, func, guessedLetters, word }) => {
    const alphabetElements = alphabet.map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && word.includes(letter)

        return (
            <button
                onClick={() => func(letter)}
                key={letter}
                className={clsx(isGuessed ? isCorrect ? 'bg-green-500' : 'bg-red-500' : 'bg-yellow-500', 'size-10 p-1 rounded font-semibold')}
            >
                {letter.toUpperCase()}
            </button >
        )

    })

    return (
        <div >
            <div className="flex flex-wrap justify-center max-w-3/4 m-auto gap-1">
                {alphabetElements}
            </div>
            <div className="flex justify-center mt-6">
                {gameOver &&
                    <button onClick={newGame} className="text-white py-2 px-4 rounded bg-blue-500">
                        New Game
                    </button>
                }
            </div>
        </div>
    );
}

export default Main;
