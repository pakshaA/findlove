'use client'

import { InputNumber, ConfigProvider } from "antd";
import { useState } from "react";
import type { InputNumberProps } from 'antd';

interface NumberSelectProps {
    onChange: (value: number | null) => void;
    value: string | number | undefined;
}

export const NumberSelect = ({ onChange, value }: NumberSelectProps) => {
    const [from, setFrom] = useState<number | null>(value ? Number(value) : null);

    const handleChangeFrom: InputNumberProps['onChange'] = (value) => {
        const num = typeof value === 'number' ? value : null;
        if (num === null || num <= 18) {
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
