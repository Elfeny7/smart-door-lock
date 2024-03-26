'use client';
import { Button } from 'flowbite-react';

interface ButtonProps {
    text: string;
}


export default function ButtonComponent(props: ButtonProps) {
    const { text } = props;
    return <Button onClick={() => console.log('clicked!')} color="blue">{text}</Button>;
}