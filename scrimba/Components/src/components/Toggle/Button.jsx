import { useContext } from 'react'
import { ToggleContext } from './Toggle'


const Button = ({ children }) => {
    const { toggle } = useContext(ToggleContext)

    return (
        <div onClick={toggle}>
            {children}
        </div>
    )
}

Button.propTypes = {}
export default Button