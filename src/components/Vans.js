import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

function Vans() {

    const [vans, setVans] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get("type"))

    React.useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setVans(data.vans)
        })
    }, [])

    console.log(vans)

    const vanElements = vans.map((van) => {
                return (
                    <div className='van-tile' key={van.id}>
                        <Link to={`/vans/${van.id}`}>
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
            <div className='van-list'>
                {vanElements}
            </div>
        </div>
    )

    
       
}


export default Vans