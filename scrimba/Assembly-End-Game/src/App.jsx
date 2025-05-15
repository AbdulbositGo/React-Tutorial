import { useState } from "react"
import Main from "./components/Main"
import Header from "./components/Header"
import Status from "./components/Status"
import Words from "./components/Words"
import Budges from "./components/Budges"
import { Languages } from "./languages"
import { getRandomWord } from "./utils"

function App() {
  const [word, setWord] = useState(() => getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState([])

  const alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('')
  const wrongGuesses = guessedLetters.filter(letter => !word.includes(letter))

  const gameLost = wrongGuesses.length >= 8;
  const gameWon = includesAll(guessedLetters, word.split(''));
  const gameOver = gameWon || gameLost;

  function includesAll(arr1, arr2) {
    return arr2.every(item => arr1.includes(item));
  }

  function addGuessedLetters(letter) {
    setGuessedLetters(oldLetters =>
      oldLetters.includes(letter) ? oldLetters : [...oldLetters, letter]
    )
  }

  function newGame() {
    setWord(getRandomWord())
    setGuessedLetters([])
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="p-4 w-full flex flex-col gap-6 rounded-2xl min-h-1/2 max-h-9/10 shadow border max-w-2xl bg-gray-800 border-gray-700">
          <Header />
          {(gameOver || wrongGuesses.length > 0) &&
            <Status
              languages={Languages}
              wrongGuesses={wrongGuesses.length}
              gameOver={gameOver}
              gameWon={gameWon} />}

          <Budges languages={Languages} wrongGuesses={wrongGuesses.length} />

          <Words
            gameWon={gameWon}
            gameOver={gameOver}
            word={word}
            guessedLetters={guessedLetters} />

          <Main
            gameWon={gameWon}
            gameOver={gameOver}
            newGame={newGame}
            alphabet={alphabet}
            func={addGuessedLetters}
            guessedLetters={guessedLetters}
            word={word.split('')} />
        </div>
      </section>
    </>
  )
}

export default App
