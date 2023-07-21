import React from 'react'
import { useOutletContext } from "react-router-dom"

export default function Pricing() {
    const [array, setArray] = useOutletContext()
    return (
        <h3 className="host-van-price"> ${array.price} </h3>
    )
}