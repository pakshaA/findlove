import { CustomLink } from "@/components/ui/link/link"

export const HeaderNav = () => {
    return (
        <li className="flex flex-row gap-[20px] items-center justife-center">
            <ul>
                <CustomLink link={'/'}>
                    Главная
                </CustomLink>
            </ul>
            <ul>
                <CustomLink link={'/search'}>
                    Поиск
                </CustomLink>
            </ul>
            <ul>
                <CustomLink link={'/messenger'}>
                    Чат
                </CustomLink>
            </ul>
        </li>
    )
}