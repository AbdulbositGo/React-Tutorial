import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="p-4 md:p-8 lg:p-10 bg-zinc-800 text-center">
            <span className="sm:text-center text-gray-400">© 2025 <Link to="/" className="hover:underline">#VANLIFE</Link></span>
        </footer>
    )
}

export default Footer