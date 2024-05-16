import React from 'react';
import Logout from '@/components/Logout';
import { Container, Paper, Typography } from "@mui/material";
import { createMockDocument } from '@/fixtures/factory/document'; 

const Welcome: React.FC = () => {
    const data1 = createMockDocument
    console.log(data1);

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', textAlign: 'center' }}>
                <Typography variant="h6" component="h1">
                    Welcome to this app
                </Typography>
                <Logout />
            </Paper>
        </Container>
    );
};

export default Welcome;
