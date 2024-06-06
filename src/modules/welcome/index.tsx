import React from 'react';
import Logout from '@/components/Logout';
import { Container, Paper, Typography } from '@mui/material';

const Welcome: React.FC = () => {
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
