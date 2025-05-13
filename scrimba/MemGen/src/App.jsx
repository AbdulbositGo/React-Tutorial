import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { Image } from "./components/Image"
import { useState } from "react"

function App() {

  const [meme, setMeme] = useState({
    image: 'http://i.imgflip.com/1bij.jpg',
    topText: "One does not simply",
    bottomText: 'walk into mordor'
  })

  function handleChange(event) {
    const { value, name } = event.currentTarget

    setMeme(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <Header />
      <main className="max-w-screen-md m-auto py-10 px-4 space-y-6">
        <Form meme={meme} handleChange={handleChange} />
        <Image image={meme.image} topText={meme.topText} bottomText={meme.bottomText} />
      </main>
    </>
  )
}

export default App
