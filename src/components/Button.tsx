import { CSSProperties } from "react";
import { useState } from "react";

type Color = '#006EFD' | 'white';

type ButtonProps = {
    size: string;
    children: string;
    style: CSSProperties
}

type User = {
    username: string;
    age: number
}

export default function Button({
    style,
    size,
    children,
}: ButtonProps) {
    const [user, setUser] = useState<User | null>(null);

    const onClick = () => {
        setUser({
            username: 'Pesho',
            age: 20,
        })
    }

    return (
        <button style={style} onClick={onClick}>{children}</button>
    )
}