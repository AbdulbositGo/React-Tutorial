import { default as ButtonBase } from './../Button/Button'
import Toggle from "../Toggle/Toggle"


const Button = ({ children }) => {

    return (
        <Toggle.Button>
            <ButtonBase >{children}</ButtonBase>
        </Toggle.Button>
    )
}

export default Button