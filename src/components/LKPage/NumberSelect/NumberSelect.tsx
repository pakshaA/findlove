'use client'

import { InputNumber, ConfigProvider } from "antd";
import { useState } from "react";
import type { InputNumberProps } from 'antd';

interface NumberSelectProps {
    onChange: (value: number | null) => void;
    defaultValue: number | null;
}

export const NumberSelect = ({ onChange, defaultValue }: NumberSelectProps) => {
    const [from, setFrom] = useState<number | null>(defaultValue || null);

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
            />
        </ConfigProvider>
    );
};
