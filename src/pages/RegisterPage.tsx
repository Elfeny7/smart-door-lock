"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ValidationErrors {
    name?: string[];
    email?: string[];
    password?: string[];
    [key: string]: string[] | undefined;
}

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [validation, setValidation] = useState<ValidationErrors>({});
    const router = useRouter();

    const registerHandler = async (e: any) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('password_confirmation', passwordConfirmation);

        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/register`, formData)
            .then(() => {
                router.push('/login')
            })
            .catch((error) => {
                setValidation(error.response.data);
            })
    };
    return (
        <>
            {/* <title>Register Account - SantriKoding.com</title>
            <div className="container" style={{ marginTop: '80px' }}>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card border-0 rounded shadow-sm">
                            <div className="card-body">
                                <h4 className="fw-bold">HALAMAN REGISTER</h4>
                                <hr />
                                <form onSubmit={registerHandler}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">NAMA LENGKAP</label>
                                                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama Lengkap" />
                                            </div>
                                            {
                                                validation.name && (
                                                    <div className="alert alert-danger">
                                                        {validation.name[0]}
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">ALAMAT EMAIL</label>
                                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email" />
                                            </div>
                                            {
                                                validation.email && (
                                                    <div className="alert alert-danger">
                                                        {validation.email[0]}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">PASSWORD</label>
                                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password" />
                                            </div>
                                            {
                                                validation.password && (
                                                    <div className="alert alert-danger">
                                                        {validation.password[0]}
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">KONFIRMASI PASSWORD</label>
                                                <input type="password" className="form-control" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Masukkan Konfirmasi Password" />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">REGISTER</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="min-h-screen flex items-center justify-center">
                <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="w-full md:w-1/2 p-8">
                        <div className="mb-8 text-center">
                            <h1 className="text-2xl font-bold">Register</h1>
                        </div>
                        {
                            validation.message && (
                                <div className="alert alert-danger">
                                    {validation.message}
                                </div>
                            )
                        }
                        <form onSubmit={registerHandler}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700">Full Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Input Name"
                                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            {
                                validation.name && (
                                    <div className="alert alert-danger">
                                        {validation.name[0]}
                                    </div>
                                )
                            }
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
                            <div className="mb-6">
                                <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                                <input
                                    type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Input Confirmed Password"
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
                                    <a href="../login">Login</a>
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Register</button>
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