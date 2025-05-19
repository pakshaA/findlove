import { Header } from "@/components/Header/header";
import { SearchPage } from "@/components/SearchPage/SearchPage";

export default function Search() {
    return (
        <>
            <Header />
            <div className="h-[100vh] bg-[#F6E7FA]">
                <div className="container h-full pt-[20px]">
                    <SearchPage/>
                </div>
            </div>
        </>
    )
}