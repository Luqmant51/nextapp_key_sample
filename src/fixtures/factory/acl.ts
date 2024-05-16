import { faker } from '@faker-js/faker';
import { ACL } from '../../../types/node-env';

export const createMockACL = (workspaceId: string, roleId: number, groupId: string, overwrites: Partial<ACL> = {}): ACL => ({
    id: faker.string.uuid(),
    workspace_id: workspaceId,
    role_id: roleId,
    group_id: groupId,
    ...overwrites,
});

export const createMockACLs = (numberOfACLs: number, workspaceId: string, roleId: number, groupId: string): ACL[] => {
    return Array.from({ length: numberOfACLs }).map(() => createMockACL(workspaceId, roleId, groupId));
};