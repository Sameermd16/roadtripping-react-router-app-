import React from "react"
import { Outlet } from 'react-router-dom'
import Header from "./Header"
import Dashboard from "./Host/Dashboard"

function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        </>
    )
}

export default Layout