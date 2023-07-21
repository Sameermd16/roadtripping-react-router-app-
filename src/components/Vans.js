import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

function Vans() {

    const [vans, setVans] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    console.log(typeFilter)

    React.useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setVans(data.vans)
        })
    }, [])
    
    console.log(vans)

    // if(!typeFilter) {
    //     return vans
    // }

    const filteredArray = typeFilter ? vans.filter((van) => van.type === typeFilter) : vans
    console.log(filteredArray)


    const vanElements = filteredArray.map((van) => {
                return (
                    <div className='van-tile' key={van.id}>
                        <Link to={van.id} state={{search: `?${searchParams.toString()}`, typeFilter:typeFilter}}> 
                            <img src={van.imageUrl} alt='van image' />
                            <div className='van-info'>
                                <h3>{van.name}</h3>
                                <p>${van.price}<span>/day</span></p>
                            </div>
                            <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        </Link>
                    </div>
                )
            })

    return (
        <div className='van-list-container'>
            <h1>Explore our van opitons</h1>
            <div className="van-list-filter-buttons">
                <Link to="?type=simple" className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>Simple</Link>
                <Link to="?type=rugged" className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>Rugged</Link>
                <Link to="?type=luxury" className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>Luxury</Link>
                {typeFilter ? (<Link to="" className="van-type clear-filters">Clear</Link>) : null}
            </div>
            <div className='van-list'>
                {vanElements}
            </div>
        </div>
    )

    
       
}


export default Vans