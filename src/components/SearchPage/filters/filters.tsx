'use client'

import { CityPicker } from "./CityPicker/CityPicker";
import { GenderSelect } from "./GenderSelect/GenderSelect";
import { NumberSelect } from "./NumberSelect/NumberSelect";

type FiltersProps = {
    onChangeCity: (city: string) => void
    onChangeAgeFrom: (age: number | null) => void
    onChangeAgeTo: (age: number | null) => void
    onChangeGender: (gender: string) => void
    defaultCity?: string
    defaultGender?: string
}

export const Filters = ({
    onChangeCity,
    onChangeAgeFrom,
    onChangeAgeTo,
    onChangeGender,
}: FiltersProps) => {
    return (
        <div className="w-full border-[#E92063] border rounded-[20px] p-[20px]">
            <div className="flex flex-row gap-[20px]">
                <CityPicker onChange={onChangeCity} />
                <NumberSelect onChangeFrom={onChangeAgeFrom} onChangeTo={onChangeAgeTo} />
                <GenderSelect onChange={onChangeGender} />
            </div>
        </div>
    )
}
