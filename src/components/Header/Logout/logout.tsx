import Link from "next/link"
import Image from "next/image"
import { CustomButton } from "@/components/ui/button/button"

const DEFAULT_AVATAR = '/defaultAvatar.webp'

export const Logout = () => {
    
    const handleLogout = () => {
        
    }
    return (
        <div>
            <Link href="/lk">
                <Image src={DEFAULT_AVATAR} alt='Avatar' width={50} height={50} className='rounded-full w-[50px] h-[50px]'/>
                <p>ИМЯ</p>
            </Link>
            <CustomButton text="Выйти" style="outlined" link="/" onClick={handleLogout} />
        </div>
    )
}