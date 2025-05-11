import logo from '/chef-claude-icon.png';

function Header() {

    return (
        <header className="shadow p-5 flex justify-center items-center gap-2">
            <img src={logo} alt="chef image" />
            <h1 className="text-3xl font-semibold">Chef Cloude</h1>
        </header>
    )
}

export default Header