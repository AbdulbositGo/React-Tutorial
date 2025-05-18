import React, { useState } from 'react'
import useEffectOnUpdate from './useEffectOnUpdate'


const useToggle = ({ init = false, onToggle = () => { } }) => {
    const [on, setOn] = useState(init)

    useEffectOnUpdate(onToggle, [on])

    function toggle() {
        setOn(prev => !prev)
    }

    return [on, toggle]
}

export default useToggle