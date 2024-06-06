export type User = {
    id: number;
    name: string;
    role: string;
    pin: number;
    email: string;
    phone: string;
}

export type Door = {
    id: number;
    name: string;
    location: string;
    class_name: string;
    description: string;
};

export type Log = {
    id: number;
    name: string;
    role: string;
    date_time: string;
    class_name: string;
    image: string;
};