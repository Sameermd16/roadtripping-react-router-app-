import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <>
            <nav className="host-nav">
                <NavLink 
                    end
                    style={({isActive}) => isActive ? activeStyles : null}
                to=".">Dashboard</NavLink>
                <NavLink 
                    style={({isActive}) => isActive ? activeStyles : null}
                to="income">Income</NavLink>
                <NavLink 
                    style={({isActive}) => isActive ? activeStyles : null}
                to="vans">Vans</NavLink>
                <NavLink 
                    style={({isActive}) => isActive ? activeStyles : null}
                to="reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout