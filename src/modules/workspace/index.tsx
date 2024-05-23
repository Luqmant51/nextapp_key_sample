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

  const initialPrivateWorkspace: WorkspaceType = createMockWorkspace(userName!, false);
  const initialPublicWorkspace: WorkspaceType = createMockWorkspace(userName!, true);

  const [workspaces, setWorkspaces] = useState<WorkspaceType[]>([initialPrivateWorkspace, initialPublicWorkspace]);

  const addPublicWorkspace = () => {
    const newPublicWorkspace = createMockWorkspace(user.name, true);
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
          minHeight: '100vh',
          textAlign: 'center',
          backgroundColor: '#f5f5f5',
          padding: 4,
          borderRadius: 2,
          width: '100%', // Ensuring full width
        }}
      >
        <Typography variant="h2">
          Welcome to the Dev Docs
        </Typography>
        <WorkspaceCard workspaces={workspaces} user={user} />
        <Box mt={2}>
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
