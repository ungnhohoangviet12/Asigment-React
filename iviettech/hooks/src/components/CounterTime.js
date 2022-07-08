import React, { useEffect, useRef, useState } from 'react'
import useMagicNumber from './useMagicNumber'
import magicNumber from './useMagicNumber'


export default function CounterTime() {

    const [counter, setCounter] = useState(0)
    const timerIdref = useRef(null)
    const currentCounterRef = useRef(counter)
    const magicNumber = useMagicNumber()

    // useEffect(() => {
    //     // componentdidmount()
    //     // handle API
    //     timerIdref.current = setInterval(() => {
    //         handleSetCounter(currentCounterRef.current)
    //     }, 1000)

    //     // ComponentWillUnMout()
    //     return () => {
    //         clearInterval(timerIdref.current)
    //     }
    // }, [])


    // useEffect(() => {
    //     // ComponentDidUpdate
    //     if (counter === 11) {
    //         setCounter(0)
    //     }
    // }, [counter])

    // useEffect(() => {
    //     currentCounterRef.current = counter + 1;
    // }, [counter])

    // const handleSetCounter = () => {

    // }




    return magicNumber
}































