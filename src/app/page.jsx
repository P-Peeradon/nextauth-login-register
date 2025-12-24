"use client"

import { useSession } from "next-auth/react";
import Navbar from "./components/Navbar";

export default function Home() {
    const { data: session } = useSession()
    
    return (
        <main>
            <Navbar session={session} />
            <div className="container mx-auto">
                <h3>Welcome to home page</h3>
                <hr className="my-3" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta assumenda officiis obcaecati nulla quidem asperiores aut, cum, deserunt sunt distinctio iste corporis corrupti minus ullam dignissimos. Impedit nobis aperiam reiciendis!</p>
            </div>
        </main>
    );
}
