import React, { useEffect, useRef } from 'react'

const useEffectOnUpdate = (callback = () => { }, deps = []) => {
    const firstRender = useRef(true)

    useEffect(() => {
        if (firstRender) {
            firstRender.current = false
        } else {
            callback()
        }
    }, deps)

}

export default useEffectOnUpdate