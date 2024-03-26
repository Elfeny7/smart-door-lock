'use client';
import { Button } from 'flowbite-react';
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

interface ButtonProps {
    text: string;
    size?: string;
    color?: string;
}

const customTheme: CustomFlowbiteTheme = {
    button: {
        color: {
            primary: "bg-blue-500 hover:bg-blue-600 text-white font-bold",
            greenFill: "bg-green-500 hover:bg-green-600 text-white font-bold",
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

    let colorButton: any = "primary";

    if (size != "door") {
        colorButton = color;
    }
    return (
        <Flowbite theme={{ theme: customTheme }}>
            <Button onClick={() => console.log('clicked!')} color={colorButton} size={size}>{text}</Button>
        </Flowbite>
    );
}
