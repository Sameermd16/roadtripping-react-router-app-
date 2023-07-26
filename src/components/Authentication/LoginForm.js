import React from 'react'
import { useLocation } from 'react-router-dom'
import { loginUser } from '../api'

export default function LoginForm() {

    const location = useLocation()
    console.log(location)
    
    const [error, setError] = React.useState(null)
    const [status, setStatus] = React.useState("idle")
    const [formData, setFormData] = React.useState(
        {
            email: "",
            password: ""
        }
    )

    function handleChange(event) {
        const {name, value} = event.target
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setStatus("submitting")
        // try {
        //     loginUser(formData)
        //         .then(data => {
        //             console.log(data)
        //             setStatus("idle")    
        //         })
        //     }catch(err) {
        //         setError(err)
        //     }finally {
        // }
        loginUser(formData)
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            setError(err)
        })
        .finally(() => {
            setStatus("idle")
        })
    }
    return (
        <div className='login-container'>
            {location.state?.message && <h3 className="login-first">{location.state.message}</h3>}
            <h1>Sign in to your account</h1>
            {error?.message && <h3 className="login-error">{error.message}</h3>}
            <form className="login-form">
                <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Email address" />
                <input type="password" name="password" onChange={handleChange} value={formData.password} placeholder="Password" />
                <button disabled={status === "submitting"} onClick={handleSubmit}>{status === "submitting" ? "logging in" : "Login"}</button>
            </form>
        </div>
    )
}