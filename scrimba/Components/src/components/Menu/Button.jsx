import React from 'react'
import { default as ButtonBase } from './../Button/Button'

const Button = ({ children }) => {
    return (
        <ButtonBase>{children}</ButtonBase>
    )
}

export default Button