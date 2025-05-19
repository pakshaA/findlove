'use client'

import { InputNumber, ConfigProvider } from "antd";
import { useState } from "react";
import type { InputNumberProps } from 'antd';

interface NumberSelectProps {
    onChangeFrom?: (value: number | null) => void;
    onChangeTo?: (value: number | null) => void;
}

export const NumberSelect = ({ onChangeFrom, onChangeTo }: NumberSelectProps) => {
    const [from, setFrom] = useState<number | null>(null);
    const [to, setTo] = useState<number | null>(null);

    const handleChangeFrom: InputNumberProps['onChange'] = (value) => {
        const num = typeof value === 'number' ? value : null;
        if (num === null || to === null || num <= to) {
            setFrom(num);
            onChangeFrom?.(num);
        }
    };

    const handleChangeTo: InputNumberProps['onChange'] = (value) => {
        const num = typeof value === 'number' ? value : null;
        if (num === null || from === null || num >= from) {
            setTo(num);
            onChangeTo?.(num);
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
                min={18}
                max={to ?? 100}
                value={from}
                placeholder="От"
                onChange={handleChangeFrom}
                changeOnWheel
            />
            <InputNumber
                min={from ?? 18}
                max={100}
                value={to}
                placeholder="До"
                onChange={handleChangeTo}
                changeOnWheel
            />
        </ConfigProvider>
    );
};
