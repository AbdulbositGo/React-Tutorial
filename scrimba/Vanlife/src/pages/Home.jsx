import RentButton from "../components/RentButton"


const Home = () => {
    return (
        <section className="bg-zinc-700">
            <div className="mx-auto max-w-screen-lg py-8 lg:py-16 space-y-14">
                <h1 className="text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">You get the travel plans, we got the travel vans.</h1>
                <p className="text-lg font-normal text-gray-300 lg:text-xl">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <RentButton>Find your van</RentButton>
            </div>
        </section>
    )
}

export default Home