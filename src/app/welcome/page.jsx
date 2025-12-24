"use client"

import React from 'react'
import Navbar from '../components/Navbar'

function WelcomePage() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <h3>Welcome User</h3>
                <hr className="my-3" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus cum odio consequatur vero? Excepturi dicta voluptatibus, quia voluptates odit dignissimos.</p>
            </div>
        </div>
    )
}

export default WelcomePage
