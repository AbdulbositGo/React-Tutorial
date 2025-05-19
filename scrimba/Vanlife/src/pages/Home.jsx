import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <section className="bg-zinc-700">
                <div className="mx-auto max-w-screen-lg py-8 lg:py-16 space-y-14">
                    <h1 className="text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">You get the travel plans, we got the travel vans.</h1>
                    <p className="text-lg font-normal text-gray-300 lg:text-xl">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                    <button type="button" class="w-full focus:outline-none text-white bg-[#FF8C38] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">Find your van</button>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home