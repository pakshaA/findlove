'use client'

import { InputNumber, ConfigProvider } from "antd";
import { useState } from "react";
import type { InputNumberProps } from 'antd';

interface NumberSelectProps {
    onChange: (value: number | undefined) => void;
    value: string | number | undefined;
}

export const NumberSelect = ({ onChange, value }: NumberSelectProps) => {
    const [from, setFrom] = useState<number | undefined>(value ? Number(value) : undefined);

    const handleChangeFrom: InputNumberProps['onChange'] = (value) => {
        const num = typeof value === 'number' ? value : undefined;
        if (num === undefined || num <= 18) {
            setFrom(num);
            onChange(num);
        }
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#E92063',
                },
            }}
        >
            <InputNumber
                style={{ width: 300 }}
                min={18}
                max={100}
                value={from}
                placeholder="Возраст"
                onChange={handleChangeFrom}
                changeOnWheel
                defaultValue={value}
            />
        </ConfigProvider>
    );
};
