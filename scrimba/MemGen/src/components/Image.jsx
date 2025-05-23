
export function Image({ image, topText, bottomText, name }) {
    return (
        <figure className="w-full relative flex">
            <img className="h-auto w-full rounded-lg" src={image} alt="image description" />
            <p className="meme-p absolute top-5 text-white text-center font-extrabold text-3xl md:text-5xl w-full">{topText}</p>
            <p className="meme-p absolute bottom-5 m-auto text-white text-center font-extrabold text-3xl md:text-5xl w-full">{bottomText}</p>
            <span className="meme-p absolute -bottom-10 m-auto text-white text-center font-extrabold text-sm md:text-base w-full">{name}</span>
        </figure>
    )
}