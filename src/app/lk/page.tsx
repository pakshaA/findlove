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
}

const LKPage = () => {
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [age, setAge] = useState<number | undefined>(undefined);
    const [city, setCity] = useState<string>("");
    const [avatar, setAvatar] = useState<string>("/defaultAvatar.webp");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User | null>(null);
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
            // avatar (если нужно отправить)
        };
        console.log("Данные для сохранения:", changes);
    };

    useEffect(() => {
        const fetchUser = async () => {
            getUser().then(data => {
                setUser(data);
            });

            setIsLoading(false);
        };

        fetchUser();
    }, []);

    useEffect(() => {
        if (user) {
            setName(user.name);
            setSurname(user.surname);
            setGender(user.gender);
            setAge(user.age);
            setCity(user.city);
        }
    }, [user]);
    console.log(user, 'user')
    console.log(name, 'name')
    console.log(surname, 'surname')
    console.log(gender, 'gender')
    console.log(age, 'age')
    console.log(city, 'city')
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
                        <CustomInput
                            placeholder="Введите имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />

                            <CustomInput
                            placeholder="Введите фамилию"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            />

                            <GenderSelect value={gender} onChange={setGender} />
                            <NumberSelect value={age} onChange={setAge} />
                            <CityPicker value={city} onChange={setCity} />
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
