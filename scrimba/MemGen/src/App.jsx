import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { Image } from "./components/Image"
import { useState, useEffect } from "react"
import { Meme } from "./components/Meme"

function App() {

  const [meme, setMeme] = useState({
    image: "http://i.imgflip.com/1bij.jpg",
    topText: "One does not simply",
    bottomText: "walk into mordor",
    name: ''
  })
  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(
      res => res.json()
    ).then(
      data => setAllMemes(data.data.memes)
    )
  }, [])

  function handleChange(event) {
    const { value, name } = event.currentTarget
    setMeme(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function changeImage() {
    const random_num = Math.floor(Math.random() * allMemes.length)
    const newImage = allMemes[random_num].url
    const newName = allMemes[random_num].name

    setMeme(prev => ({
      ...prev,
      image: newImage,
      name: newName
    }))
  }

  function changeAnImage(meme) {
    setMeme(prev => ({
      ...prev,
      image: meme.url,
      name: meme.name
    }))
  }

  return (
    <>
      <Header />
      <main className="max-w-screen-md m-auto py-10 px-4 space-y-6">
        <Form meme={meme} handleChange={handleChange} changeImage={changeImage} />
        <div className="flex items-center gap-2 overflow-x-scroll">
          {allMemes.map((meme) => (
            <Meme key={meme.id} meme={meme} change={changeAnImage} />
          ))}
        </div>
        <Image image={meme.image} topText={meme.topText} bottomText={meme.bottomText} name={meme.name} />
      </main>
    </>
  )
}

export default App
