import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <section className="bg-zinc-700">
                <div className="mx-auto max-w-screen-lg py-8 lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">You get the travel plans, we got the travel vans.</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home