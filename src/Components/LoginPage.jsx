import React from 'react'
import Blob from '../assests/blob.svg'
import Logo from '../assests/icons8-logo-150.svg'

function LoginPage() {
    return (
        <div className='body grid place-items-center m-0 h-screen bg-[#e4d1f8] text-[#2e2c2f]'>

            <img src={Blob} alt="Background" className='blob fixed z-10 w-[150vw] max-w-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />

            <div className='orbit fixed z-10 w-[95vw] max-w-[720px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>

            <div className='login flex flex-col justify-center items-center text-center relative z-20 bg-white width-[340px] pt-20 pr-6 pb-12 rounded-3xl shadow-lg'>

                <img src={Logo} alt="" className='w-16 mt-0 mr-0 mb-8' />
                <h2 className='font-medium mt-0 mr-0 mb-1 text-lg'>Welcome to Scoobyy Bank</h2>
                <h3 className='font-medium mt-0 mr-0 mb-8 text-sm -text--color-muted'>Keep your money safe</h3>
                <form action="" className='form grid gap-3 w-full mt-0 mr-0 mb-5'>

                    <div className='textbox relative'>
                        <input type="text" className='h-12 font-mono text-[15px] rounded-lg py-0 px-3 border-[0px] duration-300 ease-in-out w-full pt-2 bg-[#f4f1f7] outline-none shadow-[0_0_0_20px_transparent' placeholder='User-Email' required />
                        <label className='transition-all duration-300 ease-in-out absolute top-1/2 left-3 translate-x-0 -translate-y-1/2 origin-[0_50%] pointer-events-none -text--color-muted' htmlFor="Email-Name">Email</label>
                    </div>

                    <div className='textbox relative'>
                        <input type="text" className='h-12 font-mono text-[15px] rounded-lg py-0 px-3 border-[0px] duration-300 ease-in-out w-full pt-2 bg-[#f4f1f7] outline-none shadow-[0_0_0_20px_transparent' placeholder='Password' required />
                        <label className='transition-all duration-300 ease-in-out absolute top-1/2 left-3 translate-x-0 -translate-y-1/2 origin-[0_50%] pointer-events-none -text--color-muted' htmlFor="Password">Password</label>
                    </div>

                    <button type='submit' className='h-12 font-mono text-[15px] rounded-none py-0 px-3 border-[0px] '>Login</button>

                </form>
                <a href="/">Forgot Password?</a>
                <p className='footer'>Don't have an account? <a href='/'>Sign Up</a></p>
            </div>

        </div>
    )
}

export default LoginPage