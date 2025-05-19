'use client'

import cn from "clsx"
import { Form } from "@heroui/react"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { useRouter } from 'next/navigation'
import { loginUser } from "@/helpers/api/login/login"

export const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const isValid = validateForm()
        if (isValid) {
            try {
                setLoading(true)
                await loginUser(email, password)
                router.push('/')
            } catch (error) {
                setError({
                    email: 'Неверный логин или пароль',
                    password: 'Неверный логин или пароль'
                })
            } finally {
                setLoading(false)
            }
        }
    }

    const validateForm = () => {
        let isValid = true
        let error = {
            email: '',
            password: ''
        }

        if (!email) {
            error.email = 'Поле обязательно'
            isValid = false
        }

        if (!password) {
            error.password = 'Поле обязательно'
            isValid = false
        }

        setError(error)
        return isValid
    }

    return (
        <Form onSubmit={onSubmit} className="w-[300px] bg-white rounded-[20px] border border-[#E92063] shadow-[0_0_15px_#E92063] p-[20px] flex flex-col items-center">
            <h1 className="text-[25px] font-bold">Вход</h1>
            <div className="flex flex-col mt-[20px]">
                <p>Введите вашу почту</p>
                <input type="email" placeholder="Email*" className="px-2 py-1 border border-[#E92063] rounded-[20px] w-[200px] mt-[5px] focus:shadow-[0_0_15px_#E92063] focus:ring-1 focus:ring-[#E92063] focus:outline-none focus:border-[#E92063]" value={email} onChange={(e) => setEmail(e.target.value)} />
                {error.email && <p className="text-red-500">{error.email}</p>}
            </div>
            <div className="flex flex-col mt-[10px] relative">
                <p>Введите ваш пароль</p>
                <input type={showPassword ? "text" : "password"} placeholder="Пароль*" className="px-2 py-1 border border-[#E92063] rounded-[20px] w-[200px] mt-[5px] relative focus:shadow-[0_0_15px_#E92063] focus:ring-1 focus:ring-[#E92063] focus:outline-none focus:border-[#E92063]" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={() => setShowPassword(!showPassword)} className={cn("absolute right-[10px] cursor-pointer", error.password ? "top-[40%]" : "top-[53%]")}>
                    {showPassword ? <Eye size={25} /> : <EyeOff size={25} />}
                </button>
                {error.password && <p className="text-red-500">{error.password}</p>}
            </div>
            <button
                type="submit"
                onClick={() => validateForm()}
                className="w-[200px] mt-[20px] bg-[#E92063] text-white py-2 px-4 rounded-full hover:opacity-90 transition cursor-pointer hover:bg-white hover:text-[#E92063] hover:border-[#E92063] border"
            >
                Войти
            </button>

            <p className="mt-[10px] text-[15px] text-center">Еще нет аккаунта? <Link href="/register" className="text-[#E92063] hover:underline duration-300">Зарегистрироваться</Link></p>
        </Form>
    )
}