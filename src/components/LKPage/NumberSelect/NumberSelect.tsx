'use client';

import { InputNumber, ConfigProvider } from 'antd';
import type { InputNumberProps } from 'antd';

interface NumberSelectProps {
    onChange: (value: number | undefined) => void;
    value: number | undefined;
}

export const NumberSelect = ({ onChange, value }: NumberSelectProps) => {
    const handleChangeFrom: InputNumberProps['onChange'] = (val) => {
        const num = typeof val === 'number' ? val : undefined;
        onChange(num);
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
                value={value}
                placeholder="Возраст"
                onChange={handleChangeFrom}
                changeOnWheel
            />
        </ConfigProvider>
    );
};
