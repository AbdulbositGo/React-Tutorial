import clsx from "clsx";

const Words = ({ gameWon, gameOver, word, guessedLetters }) => {
    const wordElements = word.split('').map((letter, index) => {
        const className = clsx(
            !gameOver ? gameWon ? 'bg-green-500' : 'bg-gray-700' : guessedLetters.includes(letter) ? 'bg-green-500' : 'bg-red-500',
            "size-12  rounded text-gray-200 border-b-2 border-gray-200 text-2xl font-bold flex text-center items-center justify-center"
        )

        return (
            <span
                key={`${letter}${index}`}
                className={className}
            >
                {(guessedLetters.includes(letter) || gameOver) && letter.toUpperCase()}
            </span>
        )
    }

    )
    return (
        <div className="flex gap-2 justify-center uppercase">
            {wordElements}
        </div>
    );
}

export default Words;