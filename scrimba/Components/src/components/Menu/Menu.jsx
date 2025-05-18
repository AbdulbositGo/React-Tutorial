import useToggle from "../../Hooks/useToggle"
import Toggle from "../Toggle/Toggle"
import { createContext } from "react"


const MenuContext = createContext()

const Menu = ({ children }) => {
    const [open, toggle] = useToggle()

    return (
        <MenuContext.Provider value={{ open, toggle }}>
            {children}
        </MenuContext.Provider>
    )
}

export default Menu
export { MenuContext }