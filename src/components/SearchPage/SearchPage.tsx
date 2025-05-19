'use client'

import { Filters } from "./filters/filters";
import { Cards } from "./Cards/cards";
import { useState } from "react";

export const SearchPage = () => {
    const [city, setCity] = useState('')
    const [ageFrom, setAgeFrom] = useState(18)
    const [ageTo, setAgeTo] = useState(20)
    const [gender, setGender] = useState('')
    
    return (
        <div>
            <Filters
                onChangeCity={setCity}
                onChangeAgeFrom={(age) => {
                    if (age !== null) setAgeFrom(age)
                  }}
                onChangeAgeTo={(age) => {
                    if (age !== null) setAgeTo(age)
                  }}
                onChangeGender={setGender}
                defaultCity={city}
                defaultGender={gender}
            />
            <Cards
                filters={{ city, ageFrom, ageTo, gender }}
            />
        </div>
    )
}
