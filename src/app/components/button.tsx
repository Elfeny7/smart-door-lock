'use client';
import { Button } from 'flowbite-react';
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

interface ButtonProps {
    text: string;
    size?: string;
    color?: string;
    link?: string;
}

const customTheme: CustomFlowbiteTheme = {
    button: {
        color: {
            primary: "bg-blue-500 hover:bg-blue-600 text-white font-bold",
            greenFill: "bg-green-500 hover:bg-green-600 text-white font-bold",
            redFill: "bg-red-600 hover:bg-red-800 text-white font-bold",
        },
        size: {
            door: "px-20 py-2 ",
        }
    },
};

export default function ButtonComponent(props: ButtonProps) {
    const { text } = props;
    const { size } = props;
    const { color } = props;
    const { link } = props;

    return (
        <Flowbite theme={{ theme: customTheme }}>
            <Button onClick={() => console.log('clicked!')} color={color} size={size} href={link}>{text}</Button>
        </Flowbite>
    );
}
