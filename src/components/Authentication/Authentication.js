import React from 'react'
import { Navigate, Outlet } from "react-router-dom"

export default function Authentication() {
    
    const authenticated = false

    if(!authenticated) {
        return <Navigate to="/login" state={{message: "You must login first"}} />
    }else {
        return <Outlet />
    }
}