import { Input } from 'antd'

interface CustomInputProps {
    placeholder: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const CustomInput = ({ placeholder, value, onChange }: CustomInputProps) => {
    return (
        <div>
            <Input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                variant='outlined'
            />
        </div>
    )
}