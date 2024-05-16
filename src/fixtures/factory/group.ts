import { faker } from '@faker-js/faker';
import { Group } from '../../../types/node-env';

export const createMockGroup = (workspaceId: string, overwrites: Partial<Group> = {}): Group => ({
    id: faker.string.uuid(),
    group_name: faker.company.name(),
    workspace_id: workspaceId,
    ...overwrites,
});


export const createMockGroups = (numberOfGroups: number, workspaceId: string): Group[] => {
    return Array.from({ length: numberOfGroups }).map(() => createMockGroup(workspaceId));
};