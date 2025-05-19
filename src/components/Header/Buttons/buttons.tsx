'use client'

import { CustomButton } from "@/components/ui/button/button"

export const Buttons = () => {
    return (
        <div className="flex flex-row gap-[20px]">
            <CustomButton text="Войти" style="outlined" link="/login" />
            <CustomButton text="Регистрация" style="primary" link="/register" />
        </div>
    )
}