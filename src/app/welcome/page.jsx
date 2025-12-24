"use client"

import React from 'react'
import Navbar from '../components/Navbar'
import { useSession } from 'next-auth/react'

function WelcomePage() {

    const { data: session } = useSession();
    console.log(session);

    return (
        <div>
            <Navbar session={session} />
            <div className="container mx-auto">
                <h3>Welcome {session?.user?.name}</h3>
                <p>Email: {session?.user?.email}</p>
                <hr className="my-3" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus cum odio consequatur vero? Excepturi dicta voluptatibus, quia voluptates odit dignissimos.</p>
            </div>
        </div>
    )
}

export default WelcomePage
