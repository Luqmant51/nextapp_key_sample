"use client"
import React from 'react';
import { Card, CardContent, Typography, Link, Grid, Button } from '@mui/material';
import { useSession } from 'next-auth/react';

const WorkspaceCard = ({ type, data }: { type: string, data?: any }) => {
    const { data: session } = useSession()
    const isAdmin = session?.roles?.includes('admin');
    console.log(session);


    return (
        <Card sx={{ height: '35vh', width: "60%", display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: '20px' }}>
            <CardContent>
                <Typography variant="h6">
                    {`${session?.user?.name}'s ${type}`} WorkSpace
                </Typography>
                {/* Add other content rendering based on data here */}
            </CardContent>
            {isAdmin && type === 'private' && (
                <CardContent>
                    <Button variant="contained" color="secondary">
                        Delete
                    </Button>
                </CardContent>
            )}
        </Card>
    );
};

export default WorkspaceCard;
