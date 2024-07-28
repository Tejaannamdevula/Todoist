"use client"

import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Login() {
    return (
        <div> 
            <h1>Login</h1>
            <div>
                <button onClick={async () => {
                    await signIn("google");
                }}>
                    Login with Google
                </button>

                <br/>

                <button onClick={async () => {
                    await signIn("github");
                }}>
                    Login with GitHub
                </button>
            </div>

            <div>
                <input type="email" placeholder="Enter your email.." />
                <br/>
                <input type="password" placeholder="Enter your password.." />
                <br/>
                <Button>Login</Button>
            </div>
        </div>
    )
}
