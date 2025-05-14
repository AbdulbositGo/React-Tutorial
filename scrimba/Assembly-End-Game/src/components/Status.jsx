import clsx from "clsx";

const Status = ({ gameWon }) => {
    const className = clsx(gameWon ? 'bg-green-500' : 'bg-red-500', "p-2 w-3/4 text-white text-center space-y-4 m-auto rounded-lg")
    return (
        <div className={className}>
            <h1 className="text-2xl font-semibold">
                {gameWon ? "You win" : "You lose"}
            </h1>
            <p>
                {gameWon ? "Well done!" : "You lose! Better start learning Assembly"}
            </p>
        </div>
    );
};

export default Status;
