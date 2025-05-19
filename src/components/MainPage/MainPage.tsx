'use client'

import { CustomButton } from "../ui/button/button"
import { motion } from "framer-motion"

export const MainPage = () => {
    return (
        <div className="h-[100vh] bg-[#F6E7FA]">
            <div className="container flex flex-col justify-center items-center h-full">
                <div className="">
                    <h1 className="text-4xl font-bold text-black text-center">
                        Найди свою <span className="text-[#E92063]">половинку</span>
                    </h1>
                    <p className="text-center text-[20px] mt-[20px]">
                        Общайтесь с единомышленниками и заводите новые знакомстваю. 
                        <br />
                        Начните искать новые знакомства уже сегодня.
                    </p>
                    <div className="mt-[20px] flex flex-row items-center justify-center">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <CustomButton text="Начать" style="primary" link="/search" className="w-[200px] shadow-[0_0_15px_#E92063]" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}