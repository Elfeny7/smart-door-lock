'use client';
import { Button } from 'flowbite-react';

export default function ButtonComponent() {
    return <Button onClick={() => console.log('clicked!')} color="blue">Button</Button>;
}