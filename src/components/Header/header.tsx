import { HeartLogo } from "../ui/logo/logo"
import { HeaderNav } from "./HeaderNav/HeaderNav"
import { Buttons } from "./Buttons/buttons"
import { Logout } from "./Logout/logout"
import Cookies from "js-cookie"

export const Header = () => {
    const token = Cookies.get('token')
    console.log(token)
    return (
        <div>
            <div className="container flex flex-row justify-between items-center py-[10px]">
                <HeartLogo />
                <HeaderNav />
                {token ? <Logout /> : <Buttons />}
            </div>
        </div>
    )
}