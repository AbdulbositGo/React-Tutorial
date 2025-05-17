import React, { useState, createContext } from 'react'
import Off from './Off'
import On from './On'
import Button from './Button'


const ToggleContext = createContext()

const Toggle = ({ children }) => {
    const [on, setOn] = useState(false)

    function toggle() {
        setOn(prev => !prev)
    }

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

Toggle.On = On
Toggle.Off = Off
Toggle.Button = Button

export default Toggle
export { ToggleContext }