import React, { useEffect, useState } from 'react'

export default function useMagicNumber() {
    const [magicNumber, setMagicNumber] = useState(0);

    useEffect(() => {
        let timerId = setInterval(() => {
            setMagicNumber(Math.round(Math.random() * 1000))
        }, 1000)

        return () => {
            clearInterval(timerId)
        }
    })

    return magicNumber
}
