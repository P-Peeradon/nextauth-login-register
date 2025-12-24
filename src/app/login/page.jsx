"use client"

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    return (
        <div>
            <Navbar />
            <div className='container mx-auto py-5'>
                <h3>Login Page</h3>
                <hr className='my-3' />

                {error && (
                    <div className='bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'>
                        {error}
                    </div>
                )}

                <form action="">
                    <input onChange={(e) => setEmail(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="email" placeholder='Enter your email' />
                    <input onChange={(e) => setPassword(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Enter your password' />
                    
                    <button type="submit" className='bg-green-500 p-2 rounded-md'>Sign In</button>
                </form>
                <hr className="my-3" />
                <p>
                    Do not have an account? Go to <Link href="/register" className='text-blue-500 hover:underline'>Register</Link> Page
                </p>
            </div>
        </div>
    )
}

export default LoginPage
