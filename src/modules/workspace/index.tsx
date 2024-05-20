"use client"
import { useState } from 'react';
import WorkspaceCard from "../components/workspace";
import { DevButton } from '../components/button';


type Workspace = {
  type: 'public' | 'private';
};

const Workspace = () => {
  const [publicWorkspaces, setPublicWorkspaces] = useState<Workspace[]>([{ type: 'public' }]);

  const addPublicWorkspace = () => {
    setPublicWorkspaces([...publicWorkspaces, { type: 'public' }]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center", }}>
      <h1>Welcome to the Workspace</h1>
      <h2>Private Workspace</h2>
      <WorkspaceCard type="private" />

      <h2>Public Workspaces</h2>
      {publicWorkspaces.map((workspace, index) => (
        <WorkspaceCard key={index} type={workspace.type} />
      ))}

      <DevButton variant='contained' color='primary' label='Add Public Workspace' size='medium' onClick={addPublicWorkspace} />
    </div>
  );
};

export default Workspace;
