import logo from '/Trollface.png';

export function Header() {
    return (
        <nav className="bg-white border-gray-200 bg-linear-to-bl from-violet-500 to-fuchsia-500">
            <div className="max-w-screen-md flex flex-wrap items-center justify-between mx-auto py-6 px-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">MemeGen</span>
                </a>
            </div>
        </nav>
    )
}