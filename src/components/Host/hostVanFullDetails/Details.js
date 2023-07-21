import React from "react"
import { useOutletContext } from "react-router-dom"

export default function Details() {
    const [array, setArray] = useOutletContext()
    return (
        <section className="host-van-detail-info">
            <h4>Name: <span>{array.name}</span></h4>
            <h4>Category: <span> {array.type}</span> </h4>
            <h4>Description: <span>{array.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
    )
}