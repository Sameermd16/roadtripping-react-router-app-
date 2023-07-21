import React from "react"
import { useParams, NavLink, Outlet } from "react-router-dom"

export default function HostVanDetail() {
    const params = useParams()
    console.log(params)

    const [array, setArray] = React.useState(null) 

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.vans)
            setArray(data.vans)
        })
    }, [])

    console.log(array)

    if(!array) {
        return <h1>Loading...</h1>
    }

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <section>
            <NavLink to=".." relative="path"  className="back-button">
                &larr;<span>Back to all vans</span>
            </NavLink>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={`${array.imageUrl}`} />
                    <div className="host-van-detail-info-text">
                        <i className={`van-type van-type-${array.type}`}>{array.type}</i>
                        <h3>{array.name}</h3>
                        <h4>${array.price}/day</h4>
                    </div>
                </div>
                <div className="host-nav">
                    <NavLink to="."
                        style={({isActive}) => isActive ? activeStyles : null}
                        end
                    >Details</NavLink>
                    <NavLink to="pricing"
                        style={({isActive}) => isActive ? activeStyles : null}
                    >Pricing</NavLink>
                    <NavLink to="photos"
                        style={({isActive}) => isActive ? activeStyles : null}
                    >Photos</NavLink>
                </div>
                <Outlet />
            </div>
        </section>
    )
}