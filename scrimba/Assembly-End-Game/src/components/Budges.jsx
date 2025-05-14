
import clsx from "clsx"

const Budges = ({ languages, wrongGuesses }) => {
    let languageElements = languages.map((lan, index) => {
        const style = { backgroundColor: lan.backgroundColor, color: lan.color }
        const isLost = index < wrongGuesses
        const className = clsx(
            isLost && 'line-through decoration-2 opacity-35',
            'flex items-center justify-between gap-1 text-sm font-medium px-2.5 py-0.5 rounded-sm'
        )

        return (
            <span
                style={style} key={lan.name}
                className={className}
            > {lan.icon && <img className="size-5" src={lan.icon} alt="" />}

                {lan.name}
            </span>)
    }
    )
    return (
        <div className="flex flex-wrap justify-center items-center gap-1 max-w-3/4 m-auto">
            {languageElements}
        </div>
    );
}

export default Budges;