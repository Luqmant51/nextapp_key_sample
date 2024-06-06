'use client';
import { useState } from 'react';
import { Box, CssBaseline, Typography, Container } from '@mui/material';
import WorkspaceCard from '../components/workspace';
import { DevButton } from '../components/button';
import { WorkspaceType } from '../../../types/node-env';
import { createMockWorkspace } from '@/fixtures/factory/workspace';
import { useSession } from 'next-auth/react';
import { createMockUser } from '@/fixtures/factory/user';
import { faker } from '@faker-js/faker';

const Workspace = () => {
  const user = createMockUser({
    id: '12345',
    name: 'Muhammad Luqman',
    email: 'luqmant51@gmail.com',
    identity_id: faker.string.uuid(),
  });
  const { data: session } = useSession();
  const userName = session ? session?.user?.name : user.name;
  const userId = session ? session?.user?.id : user.id;

  const initialPrivateWorkspace: WorkspaceType = createMockWorkspace(userName!, false, userId);
  const initialPublicWorkspace: WorkspaceType = createMockWorkspace(userName!, true, userId);

  const [workspaces, setWorkspaces] = useState<WorkspaceType[]>([initialPrivateWorkspace, initialPublicWorkspace]);

  const addPublicWorkspace = () => {
    const newPublicWorkspace = createMockWorkspace(user.name, true, userId);
    setWorkspaces([...workspaces, newPublicWorkspace]);
  };

  return (
    <Container>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
          width: '100%',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            backgroundColor: 'white',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '10px 20px',
            borderRadius: '8px',
            display: 'inline-block',
            mt: '10px'
          }}
        >
          Welcome to the Dev Docs
        </Typography>
        <WorkspaceCard workspaces={workspaces} user={user} />
        <Box
          sx={{
            fontWeight: 'bold',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.9)',
            borderRadius: '8px',
            display: 'inline-block',
            mb: '4px'
          }}
        >
          <DevButton
            variant='contained'
            color='primary'
            label='Add Public Workspace'
            size='medium'
            onClick={addPublicWorkspace}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Workspace;
