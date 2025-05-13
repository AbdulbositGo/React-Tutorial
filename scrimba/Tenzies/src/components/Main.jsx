import Die from "./Die";


const Main = () => {

    const genarateNewDie = () => {
        // let result = []
        // for (let i = 0; i < 10; i++) {
        //     const randNum = Math.ceil(Math.random() * 6)
        //     result.push(randNum)
        // }
        // return result
        return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6))
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <div className="p-4 w-full flex flex-col justify-between itemsce rounded-2xl min-h-1/2 max-h-3/4 shadow border max-w-xl bg-gray-800 border-gray-700">
                <h1 className="text-white text-2xl text-center font-bold">Tenzies</h1>
                <div className="grid gap-4 grid-cols-5 w-full place-items-center">
                    {genarateNewDie().map(num => <Die value={num} />)}
                </div>
                <button type="button" className="focus:outline-none text-white focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xl px-5 py-2.5 mb-2 bg-purple-600 hover:bg-purple-700 focus:ring-purple-900">Start</button>
            </div>
        </div>
    );
}

export default Main;