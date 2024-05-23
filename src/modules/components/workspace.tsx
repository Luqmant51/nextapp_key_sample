'use client';
import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useSession } from 'next-auth/react';
import { UserType, WorkspaceType, DocumentType } from '../../../types/node-env';
import { createMockDocuments } from '@/fixtures/factory/document';
import { DevButton } from '../components/button';

const WorkspaceCard = ({ workspaces, user }: { workspaces: WorkspaceType[], user: UserType }) => {
    const { data: session } = useSession();
    const isAdmin = session ? session?.roles?.includes('admin') : true;

    console.log('isAdmin');
    console.log(isAdmin);


    // Create a map to hold documents for each workspace
    const workspaceDocumentsMap: { [key: string]: DocumentType[] } = {};

    // Populate the map with documents for each workspace
    workspaces.forEach((workspace) => {
        const numberOfDocuments = Math.floor(Math.random() * 10) + 1;
        workspaceDocumentsMap[workspace.id] = createMockDocuments(numberOfDocuments, workspace.id, user.id);
    });

    console.log(workspaceDocumentsMap);

    return (
        <>
            {workspaces.map((workspace) => (
                <>
                    <Typography variant="body2">{`Workspace Name: ${workspace.workspace_name}`}</Typography>
                    <Typography variant="body2">{`Number of Documents: ${workspaceDocumentsMap[workspace.id]?.length || 0}`}</Typography>
                    <Card
                        key={workspace.id}
                        sx={{
                            height: '35vh',
                            width: '60%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            marginBottom: '20px',
                        }}
                    >
                        <CardContent sx={{ overflowY: 'auto' }}>
                            <List>
                                {workspaceDocumentsMap[workspace.id]?.map((document, index) => (
                                    <ListItem key={index} alignItems="flex-start">
                                        <ListItemText
                                            sx={{
                                                marginBottom: '20px',
                                            }}>

                                            {document.content.length > 0 && `${document.content}`}
                                            <br />
                                            {document.content && <span style={{
                                                height: '30px',
                                                width: '30px',
                                                borderRadius: '50%',
                                                backgroundColor: 'gray',
                                                position: 'absolute',
                                                left: '2px',
                                                color: 'white',
                                                textAlign: 'center',
                                                alignContent: 'center',
                                                alignItems: 'center'
                                            }}>{user.name![0].toUpperCase()}</span>}

                                        </ListItemText>

                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                        {isAdmin && !workspace.is_public && (
                            <CardContent>
                                <DevButton size='medium' label='Delete' variant="contained" color="warning" />
                            </CardContent>
                        )}
                    </Card>
                </>
            ))}
        </>
    );
};

export default WorkspaceCard;