import React from "react"
import { useOutletContext } from "react-router-dom"

export default function Details() {
    const [array, setArray] = useOutletContext()
    return (
        <>
            <p>Name: {array.name}</p>
            <p>Category: {array.type} </p>
            <p>description: {array.description}</p>
            <p>Visibility: Publick</p>
        </>
    )
}