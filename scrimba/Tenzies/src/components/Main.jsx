import { useState, useRef, useEffect } from "react";
import Die from "./Die";
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';


const Main = () => {
    const [dieObjects, setDieObjects] = useState(() => genarateDieObjs())
    const dies = dieObjects.map(die => <Die id={die.id} value={die.value} isHeld={die.isHeld} key={die.id} holdDie={holdDie} />)
    const won = dieObjects.every(die => die.isHeld) &&
        dieObjects.every(die => die.value == dieObjects[0].value)
    const wonButton = useRef(null)

    useEffect(() => {
        if (won) {
            wonButton.current.focus()
        }
    }, [won])

    function genarateDieObjs() {
        return new Array(10).fill(0).
            map(() => (
                {
                    id: nanoid(),
                    value: Math.ceil(Math.random() * 6),
                    isHeld: false
                }
            ))
    }

    function rollDice() {
        if (won) {
            setDieObjects(genarateDieObjs())
        } else {
            setDieObjects(odlDice => odlDice.map(die =>
                die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
            ))

        }
    }

    function holdDie(id) {
        setDieObjects(odlDice => odlDice.map(die =>
            die.id === id ? { ...die, isHeld: !die.isHeld } : die
        ))
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <div className="p-4 w-full flex flex-col justify-between itemsce rounded-2xl min-h-1/2 max-h-3/4 shadow border max-w-xl bg-gray-800 border-gray-700">
                {won && <Confetti />}
                {won &&
                    <div aria-live="polite" className="hidden">
                        <p className="sr-only">Congratulations! You won! Press "New Game" to start again.</p>
                    </div>
                }
                <h1 className="text-white text-2xl text-center font-bold">Tenzies</h1>
                <div className="grid gap-4 grid-cols-5 w-full place-items-center">
                    {dies}
                </div>
                <button onClick={rollDice} type="button" ref={wonButton} className="focus:outline-none text-white focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xl px-5 py-2.5 mb-2 bg-purple-600 hover:bg-purple-700 focus:ring-purple-900">
                    {won ? 'New Game' : 'Roll'}
                </button>

            </div>
        </div>
    );
}

export default Main;