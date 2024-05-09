"use client"

import { Button } from '@mui/material';
import { signIn } from 'next-auth/react';

export default function InteractiveLogin() {
    return (
        <Button variant="contained" color="primary" onClick={() => signIn("keycloak")}>
            Log in
        </Button>
    );
}