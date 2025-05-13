
export function Meme({ meme, change }) {
    return (
        <img onClick={() => { change(meme) }} src={meme.url} className="rounded border size-16 bg-center object-cover" alt="Flowbite Logo" />
    )
}

