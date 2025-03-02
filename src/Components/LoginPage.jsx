import React from 'react'
import Blob from '../assests/blob.svg'
import Logo from '../assests/icons8-logo-150.svg'

function LoginPage() {
    return (
        <div className='bg-blue-500'>
            <img  src={Blob} alt="Background" className='blob'/>
            <div className='orbit'></div>
            <div className='login'>
                <img src={Logo} alt="" className=''/>
                <h2 className='text-2xl'>Welcome to Scoobyy Bank</h2>
                <h3 >Keep your money safe with us</h3>
                <form action="" className='form'>
                    <div className='textbox'>
                        <input type="text" placeholder='User-Email' required/>
                        <label htmlFor="Email-Name">Email</label>
                    </div>
                    <div>
                        <input type="textbox" placeholder='Password' required/>
                        <label htmlFor="Password">Password</label>
                    </div>
                    <button type='submit'>Login</button>
                </form>
                    <a href="/">Forgot Password?</a>
                    <p className='footer'>Don't have an account? <a href='/'>Sign Up</a></p>
            </div>

        </div>
    )
}

export default LoginPage