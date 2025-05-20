import RentButton from "../components/RentButton"


const Home = () => {
    return (
        <>
            <h1 className="text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl ">You get the travel plans, we got the travel vans.</h1>
            <p className="text-lg font-normal text-gray-700 lg:text-xl">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <RentButton>Find your van</RentButton>
        </>
    )
}

export default Home