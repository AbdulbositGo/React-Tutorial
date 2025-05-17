import { useContext } from 'react'
import { ToggleContext } from './Toggle'

const Off = ({ children }) => {
    const { on } = useContext(ToggleContext)

    return !on && children
}

export default Off