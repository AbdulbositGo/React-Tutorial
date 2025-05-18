import React, { useState } from 'react'

const useToggle = () => {

    const [on, setOn] = useState(false)

    function toggle() {
        setOn(prev => !prev)
    }

    return [on, toggle]
}

export default useToggle