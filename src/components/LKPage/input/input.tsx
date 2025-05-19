import { Input } from 'antd'

interface CustomInputProps {
    placeholder: string
    defaultValue?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const CustomInput = ({ placeholder, defaultValue, onChange }: CustomInputProps) => {
    return (
        <div>
            <Input
                type="text"
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={onChange}
                variant='outlined'
            />
        </div>
    )
}