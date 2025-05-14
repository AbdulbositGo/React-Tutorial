
const Budges = ({ languages }) => {
    let languageElements = languages.map(lan => {
        const style = { backgroundColor: lan.backgroundColor, color: lan.color }
        return <span style={style} key={lan.name} className="text-sm font-medium px-2.5 py-0.5 rounded-sm">{lan.name}</span>
    }
    )
    return (
        <div className="flex flex-wrap justify-center items-center gap-1 max-w-1/2 m-auto">
            {languageElements}
        </div>
    );
}

export default Budges;