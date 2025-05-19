'use client'

import { CustomButton } from "@/components/ui/button/button"
import Cookies from "js-cookie"

export const Buttons = () => {
    const cookies = Cookies.get()
    console.log(cookies)
    return (
        <div className="flex flex-row gap-[20px]">
            <CustomButton text="Войти" style="outlined" link="/login" />
            <CustomButton text="Регистрация" style="primary" link="/register" />
        </div>
    )
}