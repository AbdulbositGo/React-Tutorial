import clsx from "clsx";

const Words = ({ gameWon, word, guessedLetters }) => {
    const wordElements = word.toUpperCase().split('').map(letter => {
        return (<span key={letter}
            className={clsx(gameWon ? 'bg-green-500' : 'bg-gray-700', "size-12  rounded text-gray-200 border-b-2 border-gray-200 text-2xl font-bold flex text-center items-center justify-center")}
        >
            {guessedLetters.includes(letter) && letter}
        </span>)
    }

    )
    return (
        <div className="flex gap-2 justify-center uppercase">
            {wordElements}
        </div>
    );
}

export default Words;