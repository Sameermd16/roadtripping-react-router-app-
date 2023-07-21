import React from "react"
import { useParams } from "react-router-dom"

export default function Photos() {
    const {params} = useParams()
    console.log(params)

    React.useEffect(() => {

    }, [])
    return (
        <>
            <h2>this is host/vans/photos section!</h2>
            <img />
        </>
    )
}

