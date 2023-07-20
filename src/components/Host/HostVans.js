import React from "react"
import { Link } from "react-router-dom"

function HostVans() {

    const [array, setArray] = React.useState([])

    React.useEffect(() => {
            fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                console.log(data.vans)
                setArray(data.vans)
            })

    }, [])

    console.log(array)

    const hostVanEls = array.map((item) => {
        return (
            <Link to={`/host/vans/${item.id}`} key={item.id} className="host-van-link-wrapper">
                <div className="host-van-single">
                    <img src={`${item.imageUrl}`} alt={`Photo of ${item.name}`} />
                    <div>
                        <h3>{item.name}</h3>
                        <span>${item.price}/day</span>
                    </div>
                </div>
            </Link>)
    })

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    array.length > 0 ? (
                        <section>
                            {hostVanEls}
                        </section>
                    ) : (<h2>Loading...</h2>)
                }
            </div>
        </section>
    )
}

export default HostVans