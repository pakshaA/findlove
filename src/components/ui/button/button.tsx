import Link from "next/link";
import cn from 'clsx';

interface ICustomButtonProps {
    text: string;
    className?: string;
    style: 'primary' | 'outlined';
    link: string;
    onClick?: () => void;
}

export const CustomButton: React.FC<ICustomButtonProps> = ({ text, className, style, link, onClick }) => {
    const STYLES = {
        primary: 'bg-[#E92063] text-white hover:bg-white hover:text-[#E92063]',
        outlined: 'bg-white border border-[#E92063] text-black hover:bg-[#E92063] hover:text-white',
    };

    return (
        <div className={cn(
            STYLES[style],
            className,
            'px-5 py-2 flex items-center justify-center rounded-md duration-300 cursor-pointer border border-[#E92063] text-[15px]'
        )}
        onClick={onClick}
        >
            <Link href={link}>
                {text}
            </Link>
        </div>
    );
};
