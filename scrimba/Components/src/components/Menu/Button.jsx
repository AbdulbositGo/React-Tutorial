import { useContext } from 'react';

import { MenuContext } from './Menu'
import { default as ButtonBase } from './../Button/Button'

const Button = ({ children }) => {

    const { toggle } = useContext(MenuContext)

    return (
        <ButtonBase onClick={toggle}>{children}</ButtonBase>
    )
}

export default Button