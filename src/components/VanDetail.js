import React from 'react'
import { useParams } from 'react-router-dom'

function VanDetail() {
    const params = useParams()
    console.log(params)

    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setVan(data.vans)
        })
    }, [params.id])

    return (
        // <h1>van detail page here</h1>
        <div className='van-detail-container'>
            {van ? (
                <div className='van-detail'>
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}

export default VanDetail