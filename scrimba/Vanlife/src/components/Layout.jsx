import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"



const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <section className="py-8 antialiased md:py-12">
                <div className="mx-auto max-w-screen-lg px-4 2xl:px-0 space-y-14">
                    <Outlet />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Layout