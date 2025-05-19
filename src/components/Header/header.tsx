import { HeartLogo } from "../ui/logo/logo"
import { HeaderNav } from "./HeaderNav/HeaderNav"
import { Buttons } from "./Buttons/buttons"

export const Header = () => {
    return (
        <div>
            <div className="container flex flex-row justify-between items-center py-[10px]">
                <HeartLogo />
                <HeaderNav />
                <Buttons />
            </div>
        </div>
    )
}