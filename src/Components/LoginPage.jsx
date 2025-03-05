import React from 'react'
import Blob from '../assests/blob.svg'
import Logo from '../assests/icons8-logo-150.svg'

function LoginPage() {
    return (
        <div className='body grid place-items-center m-0 h-screen bg-[#e4d1f8] text-[#2e2c2f]'>

            <img  src={Blob} alt="Background" className='blob fixed z-10 w-[150vw] max-w-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 before:absolute before:w-6 before:h-6 before:'/>

            <div className='orbit fixed z-10 w-[95vw] max-w-[720px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '></div>

            <div className='login flex flex-col justify-center items-center text-center relative z-20 bg-white width-[340px] pt-16 pr-8 pb-12 rounded-3xl shadow-lg'>
                
                <img src={Logo} alt="" className='w-20 '/>
                <h2 className=''>Welcome to Scoobyy Bank</h2>
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