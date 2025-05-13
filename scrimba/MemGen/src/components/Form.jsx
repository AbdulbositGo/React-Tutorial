
export function Form({ meme, handleChange }) {
    return (
        <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="topText" className="block mb-2 text-sm font-mediu text-gray-900 ">Top text</label>
                    <input type="text" id="topText" value={meme.topText} name="topText" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
                </div>
                <div>
                    <label htmlFor="bottomText" className="block mb-2 text-sm font-medium text-gray-900 ">Bottom text</label>
                    <input type="text" id="bottomText" value={meme.bottomText} name="bottomText" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required />
                </div>
            </div>
            <button type="button" className="focus:outline-none w-full text-white bg-linear-to-bl from-fuchsia-500 to-violet-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-2.5 mb-2">Get a new meme image</button>
        </form>
    )
}