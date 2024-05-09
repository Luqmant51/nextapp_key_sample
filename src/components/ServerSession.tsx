"use client";

import { Button } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

export default function ServerSession() {

    const handleClick = async () => {
        try {
            const response = await fetch('/api/runCommand', {
                method: 'POST',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data.message); // Logging the server's response
        } catch (error) {
            console.error('Failed to fetch:', error);
        }
    };

    return (
        <Tooltip title="Server Session">
            <Button variant="contained" color="primary" sx={{
                padding: '10px 20px',
                fontSize: '1rem',
                minWidth: '200px',
            }} onClick={handleClick}>Server Session</Button>
        </Tooltip>
    )
}