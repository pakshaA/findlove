'use client'

import { Select } from 'antd'

interface SelectProps {
    onChange?: (label: string) => void
    value: string | null
}

export const GenderSelect = ({onChange, value}: SelectProps) => {
    return (
        <Select 
            showSearch
            style={{ minWidth: 200 }}
            placeholder="Выберите пол"
            optionFilterProp='name'
            filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={[
                { value: 'Женский', label: 'Женский' },
                { value: 'Мужской', label: 'Мужской' }
            ]}
            allowClear
            onChange={onChange}
            defaultValue={value}
            value={value}
        />
    )
}