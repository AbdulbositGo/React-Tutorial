import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { Image } from "./components/Image"
import { useState, useEffect } from "react"

function App() {

  const [meme, setMeme] = useState({
    image: "http://i.imgflip.com/1bij.jpg",
    topText: "One does not simply",
    bottomText: "walk into mordor"
  })
  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    console.log('lkhslfs');
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

    setMeme(prev => ({
      ...prev,
      image: newImage
    }))
  }

  return (
    <>
      <Header />
      <main className="max-w-screen-md m-auto py-10 px-4 space-y-6">
        <Form meme={meme} handleChange={handleChange} changeImage={changeImage} />
        <Image image={meme.image} topText={meme.topText} bottomText={meme.bottomText} />
      </main>
    </>
  )
}

export default App
