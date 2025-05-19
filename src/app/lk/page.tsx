'use client'

import Image from "next/image"
import { CustomInput } from "@/components/LKPage/input/input"
import { CityPicker } from "@/components/LKPage/CityPicker/CityPicker"
import { NumberSelect } from "@/components/LKPage/NumberSelect/NumberSelect"
import { Header } from "@/components/Header/header"
import { GenderSelect } from "@/components/LKPage/GenderSelect/GenderSelect"
import { useEffect, useRef, useState } from "react"
import { CustomButton } from "@/components/ui/button/button"
import { getUser } from "@/helpers/api/getUser/getUser"

const LKPage = () => {
    const [name, setName] = useState<string | null>(null);
    const [surname, setSurname] = useState<string | null>(null);
    const [gender, setGender] = useState<string | null>(null);
    const [age, setAge] = useState<number | null>(null);
    const [city, setCity] = useState<string | null>(null);
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
            // avatar,
        }
        console.log(changes)
    }
    useEffect(() => {
        getUser().then(data => {
            if (data) {
                setName(data.name);
                setSurname(data.surname);
                setGender(data.gender);
                setAge(data.age);
                setCity(data.city);
                // setAvatar(data.avatar);
            }
        });
    }, []);
    console.log(name, surname, gender, age, city, 'lk')
    return (
        <>
            <Header />
            <div className="pt-[100px]">
                <div className="container ">
                    <div className="flex flex-row gap-[30px] items-center">
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
                    </div>
                    <div className="flex justify-end mt-[20px]">
                        <CustomButton className="w-[200px]" text="Сохранить" style="primary" link="/lk" onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LKPage;
