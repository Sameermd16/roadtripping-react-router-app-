import React from 'react'
import { useLocation } from 'react-router-dom'

export default function LoginForm() {

    const location = useLocation()
    console.log(location)

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
    }
    return (
        <div className='login-container'>
            {location.state?.message && <h3 className="login-first">{location.state.message}</h3>}
            <h1>Sign in to your account</h1>
            <form className="login-form">
                <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Email address" />
                <input type="password" name="password" onChange={handleChange} value={formData.password} placeholder="Password" />
                <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}