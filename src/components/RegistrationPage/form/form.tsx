'use client'

import { Form } from "@heroui/react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { registerUser } from "@/helpers/api/register/register"
import { useRouter } from 'next/navigation'
import { message } from "antd"

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)   
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [error, setError] = useState({
        email: '',
        name: '',
        password: '',
        passwordConfirm: ''
    })
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const isValid = validateForm()
        if (!isValid) {
            messageApi.error('Пожалуйста, заполните все поля')
            return
        }
    
        try {
            setLoading(true)
            await registerUser(name, email, password)
            router.push('/login')
        } catch (error: any) {
            setError({
                email: 'Ошибка сервера, повторите позже',
                name: 'Ошибка сервера, повторите позже',
                password: 'Ошибка сервера, повторите позже',
                passwordConfirm: 'Ошибка сервера, повторите позже'
            })
        } finally {
            setLoading(false)
        }
    }

    const validateForm = () => {
        const newErrors = {
            email: '',
            name: '',
            password: '',
            passwordConfirm: ''
        }
    
        let isValid = true
    
        if (!email.trim()) {
            newErrors.email = 'Поле обязательно'
            isValid = false
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            newErrors.email = 'Некорректный email'
            isValid = false
        }
    
        if (!name.trim()) {
            newErrors.name = 'Поле обязательно'
            isValid = false
        }
    
        if (!password) {
            newErrors.password = 'Поле обязательно'
            isValid = false
        } else if (password.length < 6) {
            newErrors.password = 'Пароль должен быть не менее 6 символов'
            isValid = false
        }
    
        if (!passwordConfirm) {
            newErrors.passwordConfirm = 'Поле обязательно'
            isValid = false
        } else if (password !== passwordConfirm) {
            newErrors.passwordConfirm = 'Пароли не совпадают'
            isValid = false
        }
    
        setError(newErrors)
        return isValid
    }

    return (
        <>
            {contextHolder}
            <Form onSubmit={onSubmit} className="w-[300px] bg-white rounded-[20px] border border-[#E92063] shadow-[0_0_15px_#E92063] p-[20px] flex flex-col items-center">

                <h1 className="text-[25px] font-bold">Регистрация</h1>
                <div className="flex flex-col mt-[20px]">
                    <p>Введите вашу почту</p>
                    <input type="email" placeholder="Email*" className="px-2 py-1 border border-[#E92063] rounded-[20px] w-[200px] mt-[5px] focus:shadow-[0_0_15px_#E92063] focus:ring-1 focus:ring-[#E92063] focus:outline-none focus:border-[#E92063]" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {error.email && <p className="text-red-500">{error.email}</p>}
                </div>
                <div className="flex flex-col mt-[10px]">
                    <p>Введите ваше имя</p>
                    <input type="text" placeholder="Имя*" className="px-2 py-1 border border-[#E92063] rounded-[20px] w-[200px] mt-[5px] focus:shadow-[0_0_15px_#E92063] focus:ring-1 focus:ring-[#E92063] focus:outline-none focus:border-[#E92063]" value={name} onChange={(e) => setName(e.target.value)} />
                    {error.name && <p className="text-red-500">{error.name}</p>}
                </div>
                <div className="flex flex-col mt-[10px] relative">
                    <p>Введите ваш пароль</p>
                    <input type={showPassword ? "text" : "password"} placeholder="Пароль*" className="px-2 py-1 border border-[#E92063] rounded-[20px] w-[200px] mt-[5px] relative focus:shadow-[0_0_15px_#E92063] focus:ring-1 focus:ring-[#E92063] focus:outline-none focus:border-[#E92063]" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-[10px] top-[53%] cursor-pointer">
                        {showPassword ? <Eye size={25} /> : <EyeOff size={25} />}
                    </button>
                    {error.password && <p className="text-red-500">{error.password}</p>}
                </div>
                <div className="flex flex-col mt-[10px] relative">
                    <p>Повторите ваш пароль</p>
                    <input type={showPasswordConfirm ? "text" : "password"} placeholder="Пароль*" className="px-2 py-1 border border-[#E92063] rounded-[20px] w-[200px] mt-[5px] relative focus:shadow-[0_0_15px_#E92063] focus:ring-1 focus:ring-[#E92063] focus:outline-none focus:border-[#E92063]" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                    <button type="button" onClick={() => setShowPasswordConfirm(!showPasswordConfirm)} className="absolute right-[10px] top-[53%] cursor-pointer">
                        {showPasswordConfirm ? <Eye size={25} /> : <EyeOff size={25} />}
                    </button>
                    {error.passwordConfirm && <p className="text-red-500">{error.passwordConfirm}</p>}
                </div>
                <button
                    type="submit"
                    className="w-[200px] mt-[15px] bg-[#E92063] text-white py-2 px-4 rounded-full hover:opacity-90 transition cursor-pointer hover:bg-white hover:text-[#E92063] hover:border-[#E92063] border"
                >
                    Зарегистрироваться
                </button>

                <p className="mt-[10px] text-[15px] text-center">Уже есть аккаунта? <Link href="/login" className="text-[#E92063] hover:underline duration-300">Войти</Link></p>
            </Form>
        </>
    )
}