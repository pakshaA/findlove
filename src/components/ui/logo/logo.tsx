'use client'

import { Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeartLogo = () => {
    return (
        <Link href='/' className="flex flex-row gap-2 justify-center items-center">
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <Heart className="text-[var(--main-color)]" size={32} />
            </motion.div>
            <p className="text-[25px] hover:text-[#E92063] duration-300">HeartMatch</p>
        </Link>
    );
};
