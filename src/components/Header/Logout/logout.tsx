import Link from "next/link"
import Image from "next/image"
import { CustomButton } from "@/components/ui/button/button"
import { logoutUser } from "@/helpers/api/logout/logout";
import { useRouter } from "next/navigation";

const DEFAULT_AVATAR = '/defaultAvatar.webp'

export const Logout = () => {
    const router = useRouter()

    const handleLogout = () => {
        try {
            logoutUser()
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className="flex flex-row gap-[20px] items-center">
            <Link href="/lk" className="flex flex-row gap-[10px] items-center">
                <Image src={DEFAULT_AVATAR} alt='Avatar' width={50} height={50} className='rounded-full w-[50px] h-[50px] hover:border-[#E92063] border-[1px] duration-500'/>
                <p className="text-[18px] hover:text-[#E92063] duration-300">ИМЯ</p>
            </Link>
            <CustomButton text="Выйти" style="outlined" link="/" onClick={handleLogout} />
        </div>
    )
}