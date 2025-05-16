import React from 'react'
import { default as ButtonBase } from './../Button/Button'

const Button = ({ toggle, children }) => {
    return (
        <ButtonBase onClick={toggle}>{children}</ButtonBase>
    )
}

export default Button