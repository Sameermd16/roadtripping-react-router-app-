import React from 'react'
import { useParams, NavLink, useLocation } from 'react-router-dom'

function VanDetail() {
    const params = useParams()
    console.log(params)

    const location = useLocation()
    console.log(location)

    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setVan(data.vans)
        })
    }, [params.id])

    //optional chaining 
    // const search = location.state?.search || ""
    //const type = location.state?.typeFilter || "all"

    return (
        // <h1>van detail page here</h1>
        <div className='van-detail-container'>
            <NavLink to={`..${location.state.search}`} relative="path" className="back-button">&larr;<span>Back to {location.state.typeFilter}</span></NavLink>
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