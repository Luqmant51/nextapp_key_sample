import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
// import { useSession } from 'next-auth/react';
import { UserType, WorkspaceType, DocumentType } from '../../../types/node-env';
import { createMockDocuments } from '@/fixtures/factory/document';
import { DevButton } from '../components/button';
import NewTextField from './inputfiled';

const WorkspaceCard = ({
  workspaces,
  user,
}: {
    workspaces: WorkspaceType[];
    user: UserType;
}) => {
  // const { data: session } = useSession();
  // const isAdmin = session ? session?.roles?.includes('admin') : true;

  const [workspaceDocumentsMap, setWorkspaceDocumentsMap] = useState<{
        [key: string]: DocumentType[];
    }>({});

  const [newData, setNewData] = useState<string>('');

  useEffect(() => {
    const map: { [key: string]: DocumentType[] } = {};

    workspaces.forEach((workspace) => {
      const numberOfDocuments = Math.floor(Math.random() * 2) + 1;
      map[workspace.id] = createMockDocuments(
        numberOfDocuments,
        workspace.id,
        user.id,
      );
    });

    setWorkspaceDocumentsMap(map);
  }, [workspaces, user.id]);

  console.log('workspaceDocumentsMap');
  console.log(workspaceDocumentsMap);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewData(event.target.value);
  };

  const handleSave = (workspaceId: string, newData: string) => {
    console.log('workspaceId');
    console.log(workspaceId);

    setWorkspaceDocumentsMap((prevMap) => {
      const updatedMap = { ...prevMap };
      const newDocuments = createMockDocuments(1, workspaceId, user.id, {
        content: newData,
      });

      if (updatedMap[workspaceId]) {
        updatedMap[workspaceId] = [...updatedMap[workspaceId], ...newDocuments];
      } else {
        updatedMap[workspaceId] = newDocuments;
      }

      return updatedMap;
    });
  };

  return (
    <Box sx={{ padding: '20px', minWidth: '1000px' }}>
      {workspaces.map((workspace) => (
        <Box key={workspace.id} sx={{ marginBottom: '30px' }}>
          <Typography
            variant='h6'
            sx={{
              fontWeight: 'bold',
              backgroundColor: 'white',
              color: 'primary.main',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              padding: '10px 20px',
              borderRadius: '8px',
              display: 'inline-block',
              mb: '10px',
            }}
          >
            {workspace.workspace_name}
          </Typography>
          <Card
            sx={{
              height: '35vh',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 3,
              borderRadius: '10px',
              marginBottom: '20px',
            }}
          >
            <CardContent sx={{ overflowY: 'auto' }}>
              <List>
                {workspaceDocumentsMap[workspace.id]?.map((document, index) => (
                  <ListItem key={index} alignItems='flex-start'>
                    <ListItemText
                      sx={{
                        marginBottom: '20px',
                      }}
                    >
                      {document.content.length > 0 && `${document.content}`}
                      <br />
                      {document.content && (
                        <span
                          style={{
                            height: '30px',
                            width: '30px',
                            borderRadius: '50%',
                            backgroundColor: 'gray',
                            position: 'absolute',
                            left: '2px',
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          {user.name![0].toUpperCase()}
                        </span>
                      )}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <div
              style={{
                background: '#f5f5f5',
                display: 'flex',
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardContent>
                <NewTextField
                  sx={{ width: '700px' }}
                  label='Data'
                  variant='standard'
                  onChange={handleChange}
                />
              </CardContent>
              <CardContent>
                <DevButton
                  size='medium'
                  label='Save'
                  variant='contained'
                  color='primary'
                  onClick={() => handleSave(workspace.id, newData)}
                />
              </CardContent>
              {workspace.created_by === user.id && (
                <CardContent>
                  <DevButton
                    size='medium'
                    label='Delete'
                    variant='contained'
                    color='warning'
                  />
                </CardContent>
              )}
            </div>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default WorkspaceCard;
