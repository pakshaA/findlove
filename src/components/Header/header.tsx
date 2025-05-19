'use client'

import { HeartLogo } from "../ui/logo/logo"
import { HeaderNav } from "./HeaderNav/HeaderNav"
import { Buttons } from "./Buttons/buttons"
import { Logout } from "./Logout/logout"
import { useEffect, useState } from "react";
import { getUser } from "@/helpers/api/getUser/getUser";

export const Header = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser().then(data => {
            if (data) setUser(data);
        });
    }, []);
    console.log('user', user)
    return (
        <div>
            <div className="container flex flex-row justify-between items-center py-[10px]">
                <HeartLogo />
                <HeaderNav />
                {user ? <Logout user={user}/> : <Buttons />}
            </div>
        </div>
    )
}