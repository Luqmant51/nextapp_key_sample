'use client';
import { useAuthUserKeyCloak } from '@devdocs/hooks/AuthHooks';
import { Container, Typography, Paper, Button } from '@mui/material';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const InteractiveLogin = dynamic(() => import('../components/Login'), {
  ssr: false
});

const LandingPage: React.FC = () => {
  const { isAuthenticated } = useAuthUserKeyCloak();
  const router = useRouter();
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', textAlign: 'center' }}>
        {isAuthenticated ? (
          <>
            <Typography variant="h5" component="h1">
              Welcome
            </Typography>
            <Button onClick={() => router.push('/welcome')} variant="contained">
              Go to Dashboard
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5" component="h1">
              Hello World
            </Typography>
            <InteractiveLogin />
          </>
        )}
      </Paper>
    </Container>
  );
};

export default LandingPage;
