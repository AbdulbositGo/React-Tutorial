import { Children, cloneElement, useState } from 'react'


const Menu = ({ children }) => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(prev => !prev)
    }

    return (
        <>
            {Children.map(children, child => (
                cloneElement(child,
                    { open, toggle }
                )
            ))}
        </>
    )
}

export default Menu