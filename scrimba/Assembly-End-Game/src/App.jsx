import Main from "./components/Main"
import Header from "./components/Header"
import Status from "./components/Status"
import Words from "./components/Words"
import Budges from "./components/Budges"
import { Languages } from './languages'
import { useState } from "react"


function App() {
  const [word, setWord] = useState('react')
  const [guessedLetters, setGuessedLetters] = useState([])
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

  function addGuessedLetters(letter) {
    setGuessedLetters(oldLetters =>
      oldLetters.includes(letter) ? oldLetters : [...oldLetters, letter]
    )
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="p-4 w-full flex flex-col gap-6 rounded-2xl min-h-1/2 max-h-9/10 shadow border max-w-2xl bg-gray-800 border-gray-700">
          <Header />
          <Status />
          <Budges languages={Languages} />
          <Words word={word} />
          <Main alphabet={alphabet} func={addGuessedLetters} />
        </div>
      </section>
    </>
  )
}

export default App
