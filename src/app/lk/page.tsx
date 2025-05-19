'use client'

import Image from "next/image"
import { CustomInput } from "@/components/LKPage/input/input"
import { CityPicker } from "@/components/LKPage/CityPicker/CityPicker"
import { NumberSelect } from "@/components/LKPage/NumberSelect/NumberSelect"
import { Header } from "@/components/Header/header"
import { GenderSelect } from "@/components/LKPage/GenderSelect/GenderSelect"
import { useRef, useState } from "react"
import { CustomButton } from "@/components/ui/button/button"

const LKPage = () => {
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [age, setAge] = useState<number | null>(null);
    const [city, setCity] = useState<string>('');
    const [avatar, setAvatar] = useState<string>('/defaultAvatar.webp');

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    setAvatar(event.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        const changes = {
            name,
            surname,
            gender,
            age,
            city,
            avatar,
        }
        console.log(changes)
    }

    return (
        <>
            <Header />
            <div className="pt-[100px]">
                <div className="container flex flex-row gap-[30px] items-center">
                    <div>
                        <Image
                            src={avatar}
                            alt="Avatar"
                            width={300}
                            height={300}
                            className="cursor-pointer rounded-full object-cover"
                            onClick={handleAvatarClick}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            ref={fileInputRef}
                            className="hidden"
                        />
                    </div>
                    <div className="flex flex-col gap-[30px]">
                        <CustomInput placeholder="Введите имя" defaultValue={name} onChange={(e) => setName(e.target.value)} />
                        <CustomInput placeholder="Введите фамилию" defaultValue={surname} onChange={(e) => setSurname(e.target.value)} />
                        <GenderSelect defaultValue={gender} onChange={setGender} />
                        <NumberSelect defaultValue={age} onChange={setAge} />
                        <CityPicker defaultValue={city} onChange={setCity} />
                    </div>
                    <CustomButton text="Сохранить" style="primary" link="/lk" onClick={handleSubmit} />
                </div>
            </div>
        </>
    )
}

export default LKPage;
