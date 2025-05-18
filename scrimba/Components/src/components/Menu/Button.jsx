import { useContext } from 'react'
import { default as ButtonBase } from './../Button/Button'
import { MenuContext } from "./Menu"


const Button = ({ children }) => {
    const { toggle } = useContext(MenuContext)

    return (
        <ButtonBase onClick={toggle}>{children}</ButtonBase>
    )
}

export default Button