'use client';
import { Button } from 'flowbite-react';

export default function ButtonComponent() {
    return (
        <Component />
    );
}

function Component() {
    return <Button onClick={() => console.log('clicked!')} color="blue">Button</Button>;
}