import { faker } from '@faker-js/faker';
import { WorkspaceType } from '../../../types/node-env';


const generateWorkspaceName = (userName: string, isPublic: boolean): string => {
  return `${userName}'s ${isPublic ? 'Public' : 'Private'} Workspace`;
};
export const createMockWorkspace = (
  userName: string,
  isPublic: boolean,
  userId: string,
  overwrites: Partial<WorkspaceType> = {}
): WorkspaceType => {
  return {
    id: faker.string.uuid(),
    workspace_name: generateWorkspaceName(userName, isPublic),
    is_public: isPublic,
    created_by: userId,
    created_on_utc: faker.date.past().toISOString(),
    ...overwrites,
  };
};

export const createMockWorkspaces = (numberOfWorkspaces: number, userName: string, userId: string, isPublic: boolean): WorkspaceType[] => {
  return Array.from({ length: numberOfWorkspaces }).map(() => createMockWorkspace(userName, isPublic, userId));
};