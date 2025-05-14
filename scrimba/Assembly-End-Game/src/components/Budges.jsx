
const Budges = ({ languages }) => {
    let languageElements = languages.map(lan => (
        <span style={{ backgroundColor: lan.backgroundColor, color: lan.color }} className="text-sm font-medium px-2.5 py-0.5 rounded-sm">{lan.name}</span>
    )
    )
    return (
        <div className="flex flex-wrap justify-center items-center gap-1 max-w-1/2 m-auto">
            {languageElements}
        </div>
    );
}

export default Budges;