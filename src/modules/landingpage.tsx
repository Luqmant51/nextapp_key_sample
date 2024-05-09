'use client';
import { useAuthUserKeyCloack } from '@devdocs/hooks/AuthHooks';
import { Container, Typography, Paper, Button } from '@mui/material';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const InteractiveLogin = dynamic(() => import('../components/Login'), {
    ssr: false
});
const LandingPage = () => {
    const { isAuthenticated } = useAuthUserKeyCloack();
    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', textAlign: 'center' }}>
                {isAuthenticated ? <>
                    <Typography variant="h5" component="h1">
                        Well come
                    </Typography>
                    <Link href="/sample/index" passHref>
                        <Button variant="contained">
                            Go to Dashboard
                        </Button>
                    </Link>
                </> :
                    <>
                        <Typography variant="h5" component="h1">
                            Hello World
                        </Typography>
                        <InteractiveLogin />
                    </>
                }
            </Paper>
        </Container>
    );
}

export default LandingPage;