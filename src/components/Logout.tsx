"use client"
import { signOut } from "next-auth/react";
import { Button } from '@mui/material';
async function keyCloakLogout() {
    try {
        await fetch("/api/auth/logout", { method: "GET" })
    } catch (error) {
        console.log(error)
    }
}
export default function Logout() {
    const handleLogout = async () => {
        keyCloakLogout().then(()=>signOut({ callbackUrl: "/" })) ;
    };

    return <Button variant="contained" color="primary" onClick={handleLogout}>
        Signout of Keycloak
    </Button>
}
