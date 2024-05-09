"use client";

import { Button, Tooltip } from "@mui/material";

export default function ClientSession() {

    async function sessionhandel() {
        try {
            const response = await fetch('/api/session');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Session data:', data);
            alert('Session fetched successfully! Check console for details.');
        } catch (error) {
            console.error('Failed to fetch session:', error);
            alert('Failed to fetch session. See console for details.');
        }
    }

    return (
        <Tooltip title="Client Session">
            <Button variant="contained" sx={{
                padding: '10px 20px',
                fontSize: '1rem',
                minWidth: '200px',
            }} color="primary" onClick={sessionhandel}>
                Client Session
            </Button>
        </Tooltip>
    )
}