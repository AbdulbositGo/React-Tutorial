import clsx from "clsx";

const Status = ({ gameWon, gameOver, languages, wrongGuesses }) => {
    const className = clsx(gameWon ? 'bg-green-500' : 'bg-red-500', "p-2 w-3/4 text-white text-center space-y-4 m-auto rounded-lg")
    const language = languages[wrongGuesses - 1].name

    return (
        <div className={className}>
            {wrongGuesses > 0 && !gameOver ?
                <div>
                    <h1 className="text-2xl font-semibold">
                        {language}
                    </h1>
                    <p>
                        You lost {language}
                    </p>
                </div> : ''
            }
            {gameOver &&
                <div>
                    <h1 className="text-2xl font-semibold">
                        {gameWon ? "You win" : "You lose"}
                    </h1>
                    <p>
                        {gameWon ? "Well done!" : "You lose! Better start learning Assembly"}
                    </p>
                </div>
            }
        </div>
    );
};

export default Status;
