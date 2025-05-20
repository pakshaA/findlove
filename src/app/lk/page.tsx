'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CustomInput } from "@/components/LKPage/input/input";
import { CityPicker } from "@/components/LKPage/CityPicker/CityPicker";
import { NumberSelect } from "@/components/LKPage/NumberSelect/NumberSelect";
import { Header } from "@/components/Header/header";
import { GenderSelect } from "@/components/LKPage/GenderSelect/GenderSelect";
import { CustomButton } from "@/components/ui/button/button";
import { getUser } from "@/helpers/api/getUser/getUser";

interface User {
    name: string;
    surname: string;
    gender: string;
    age: number;
    city: string;
    avatar: string;
}

const LKPage = () => {
    const [userData, setUserData] = useState<User>({
        name: '',
        surname: '',
        gender: '',
        age: 0,
        city: '',
        avatar: '/defaultAvatar.webp'
    });
    const [isLoading, setIsLoading] = useState(true);
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
                    setUserData((prev) => ({ ...prev, avatar: event.target?.result as string }));
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        const changes = {
            name: userData.name,
            surname: userData.surname,
            gender: userData.gender,
            age: userData.age,
            city: userData.city,
            avatar: userData.avatar,
        };
        console.log("Данные для сохранения:", changes);
    };

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const data = await getUser();
                setUserData({
                    name: data.name,
                    surname: data.surname,
                    gender: data.gender,
                    age: data.age,
                    city: data.city,
                    avatar: data.avatar || '/defaultAvatar.webp'
                });
            } catch (error) {
                console.error('Ошибка загрузки:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadUserData();
    }, []);

    if (isLoading) {
        return (
            <>
                <Header />
                <div className="pt-[100px] text-center text-xl">Загрузка...</div>
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="pt-[100px]">
                <div className="container">
                    <div className="flex flex-row gap-[30px] items-center">
                        <div>
                            <Image
                                src={userData.avatar}
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
                        <CustomInput
                            placeholder="Введите имя"
                            value={userData.name}
                            onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
                            />

                            <CustomInput
                            placeholder="Введите фамилию"
                            value={userData.surname}
                            onChange={(e) => setUserData((prev) => ({ ...prev, surname: e.target.value }))}
                            />

                            <GenderSelect value={userData.gender} onChange={(gender) => setUserData((prev) => ({ ...prev, gender }))} />
                            <NumberSelect value={userData.age} onChange={(value) => {
                                const numericValue = Number(value) || 0;
                                setUserData(prev => ({...prev, age: numericValue}));
                            }} />
                            <CityPicker value={userData.city} onChange={(city) => setUserData((prev) => ({ ...prev, city }))} />
                        </div>
                    </div>
                    <div className="flex justify-end mt-[20px]">
                        <CustomButton
                            className="w-[200px]"
                            text="Сохранить"
                            style="primary"
                            link="/lk"
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LKPage;
