import Link from "next/link";

export const CustomLink = ({link, children}: {link: string, children: React.ReactNode}) => {
    return (
        <Link href={link} className="hover:text-[#E92063] duration-300 text-[20px]">
            {children}
        </Link>
    )
}