import { Link } from 'react-router-dom'
import img from '../assets/images/about-hero.png'


const About = () => {
    return (
        <section className="">
            <div className="mx-auto max-w-screen-lg space-y-14">
                <img class="h-auto max-w-full" src={img} alt="image description" />
                <div className='px-4 space-y-14'>
                    <h1 className="text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl ">Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p className="text-lg font-normal lg:text-xl">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                    <p className="text-lg font-normal lg:text-xl">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                    <div className="p-8 rounded-lg bg-[#FFCC8D] text-[#161616] mb-10 space-y-6">
                        <h1 className="text-2xl font-semibold">Your destination is waiting.<br />Your van is ready.</h1>
                        <Link type="button" class="w-full focus:outline-none text-white bg-[#161616] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">Explore our vans</Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About