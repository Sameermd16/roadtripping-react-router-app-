import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getVans } from "./api"

function Vans() {

    const [vans, setVans] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const typeFilter = searchParams.get("type")
    // console.log(typeFilter)

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
            }catch(err) {
                // console.log(err)
                setError(err)
            }finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])
    
    // console.log(vans)

    // if(!typeFilter) {
    //     return vans
    // }

    const filteredArray = typeFilter ? vans.filter((van) => van.type === typeFilter) : vans
    // console.log(filteredArray)


    const vanElements = filteredArray.map((van) => {
                 (
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

    if(loading) {
        return <h1>Loading...</h1>
    }
    if(error) {
        return <h1>An error occured: {error.message} </h1>
    }

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