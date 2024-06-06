"use client";
import DashboardTemplate from "@/components/templates/DashboardTemplate";
import getTokenService from "@/services/authService";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
    const router = useRouter();
    const token = getTokenService();

    useEffect(() => {
        if (!token) {
            router.push('/login');
        }
    }, []);

    return (
        <>
            <DashboardTemplate token={token} />
        </>
    );
}