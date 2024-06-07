"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

interface ValidationErrors {
    name?: string[];
    email?: string[];
    password?: string[];
    [key: string]: string[] | undefined;
}

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validation, setValidation] = useState<ValidationErrors>({});
    const router = useRouter();

    const loginHandler = async (e: any) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('email', email);
        formData.append('password', password);

        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/login`, formData)
            .then((response) => {
                Cookies.set('token', response.data.token);
                router.push('/dashboard');
            })
            .catch((error) => {
                setValidation(error.response.data);
            })
    };

    useEffect(() => {
        if (Cookies.get('token')) {
            router.push('/dashboard');
        }
    }, [router]);

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="w-full md:w-1/2 p-8">
                        <div className="mb-8 text-center">
                            <h1 className="text-2xl font-bold">Welcome back!</h1>
                            <p className="text-gray-600">Enter to get this Smart Door Lock information system</p>
                        </div>
                        {
                            validation.message && (
                                <div className="alert alert-danger">
                                    {validation.message}
                                </div>
                            )
                        }
                        <form onSubmit={loginHandler}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700">Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Input Email"
                                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            {
                                validation.email && (
                                    <div className="alert alert-danger">
                                        {validation.email[0]}
                                    </div>
                                )
                            }
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-700">Password</label>
                                <input
                                    type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Input Password"
                                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            {
                                validation.password && (
                                    <div className="alert alert-danger">
                                        {validation.password[0]}
                                    </div>
                                )
                            }
                            <div className="mb-4 flex items-center justify-between">
                                <div className="flex items-center">
                                    <a href="../register">Register</a>
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Log in</button>
                        </form>
                    </div>
                    <div className="hidden md:block md:w-1/2 bg-blue-600">
                        <img src="/abs.jpg" alt="Decorative" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </>
    );
}