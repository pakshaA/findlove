'use client'

import { ConfigProvider, Select } from 'antd';
import cities from '@/helpers/mock/filtered_cities.json'

interface SelectProps {
    onChange?: (label: string) => void
    value: string | null
}

export const CityPicker = ({onChange, value}: SelectProps) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#E92063',
                },
            }}
        >
            <Select 
                showSearch
                style={{ minWidth: 200 }}
                placeholder="Выберите город"
                optionFilterProp='label'
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={cities.cities.map(city => ({
                    value: city.name,
                    label: city.name
                }))}
                allowClear
                onChange={onChange}
                defaultValue={value}
            />
        </ConfigProvider>
    )
}