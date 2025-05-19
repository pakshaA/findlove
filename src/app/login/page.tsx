'use client'

import { LoginForm } from "@/components/LoginPage/form/form"

export default function Login() {
    return (
        <div className="h-[100vh] bg-[#F6E7FA]">
            <div className="container flex flex-col justify-center items-center h-full">
                <LoginForm />
            </div>
        </div>
    )
}