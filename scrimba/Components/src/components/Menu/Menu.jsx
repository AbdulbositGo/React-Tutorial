import { createContext, useState } from 'react'


const MenuContext = createContext()

const Menu = ({ children }) => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(prev => !prev)
    }

    return (
        <>
            <MenuContext.Provider value={{ open, toggle }}>
                {children}
            </MenuContext.Provider>
        </>
    )
}

export default Menu
export { MenuContext }