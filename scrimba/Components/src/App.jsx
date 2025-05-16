import Menu from "./components/Menu/Menu"
import Button from './components/Menu/Button'
import Dropdown from './components/Menu/Dropdown'
import Item from './components/Menu/Item'

function App() {

    const items = ['apple', 'banana', 'orange', 'kiwi']

    return (
        <div className="container p-4 max-w-4xl m-auto">
            <Menu>
                <Button>
                    Dropdown
                </Button>
                <Dropdown>
                    {items.map(item => (
                        <Item key={item}>{item}</Item>
                    ))}
                </Dropdown>
            </Menu>
        </div>
    )
}

export default App