import React from "react"
import { useParams } from "react-router-dom"

export default function HostVanDetail() {
    const params = useParams()
    console.log(params)

    const [array, setArray] = React.useState(null) 

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setArray(data)
        })
    }, [params.id])

    return (
        <h1>this is nested single van detail</h1>
    )
}