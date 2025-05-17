import React, { useContext } from 'react'
import ToggleContext from './Toggle'

const Display = ({ children }) => {
    const on = useContext(ToggleContext)

    return children(on)
}

export default Display