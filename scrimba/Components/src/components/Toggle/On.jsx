import { useContext } from 'react'
import { ToggleContext } from './Toggle'

const On = ({ children }) => {
    const { on } = useContext(ToggleContext)

    return on && children
}

export default On