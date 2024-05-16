import { faker } from '@faker-js/faker';
import { Workspace } from '../../../types/node-env';

const generateWorkspaceName = (userName: string, isPublic: boolean): string => {
    return `${userName}'s ${isPublic ? 'Public' : 'Private'} Workspace`;
};

export const createMockWorkspace = (
    userName: string,
    overwrites: Partial<Workspace> = {}
): Workspace => {
    const isPublic = faker.datatype.boolean();
    return {
        id: faker.string.uuid(),
        workspace_name: generateWorkspaceName(userName, isPublic),
        is_public: isPublic,
        created_by: faker.string.uuid(),
        created_on_utc: faker.date.past().toISOString(),
        ...overwrites,
    };
};

export const createMockWorkspaces = (numberOfWorkspaces: number, userName: string): Workspace[] => {
    return Array.from({ length: numberOfWorkspaces }).map(() => createMockWorkspace(userName));
};