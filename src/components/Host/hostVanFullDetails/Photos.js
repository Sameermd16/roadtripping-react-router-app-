import React from "react"
import { useParams, useOutletContext } from "react-router-dom"

export default function Photos() {
    
    const [array, setArray] = useOutletContext()

    React.useEffect(() => {

    }, [])
    return (
            <img src={array.imageUrl} className="host-van-detail-image" />
    )
}

