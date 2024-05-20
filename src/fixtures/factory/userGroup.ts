import { faker } from '@faker-js/faker';
import { UserGroup } from '../../../types/node-env';

export const createMockUserGroup = (userId: string, groupId: string, workspaceId: string, overwrites: Partial<UserGroup> = {}): UserGroup => ({
    user_id: userId,
    group_id: groupId,
    workspace_id: workspaceId,
    ...overwrites,
});

export const createMockUserGroups = (numberOfUserGroups: number, userId: string, groupId: string, workspaceId: string): UserGroup[] => {
    return Array.from({ length: numberOfUserGroups }).map(() => createMockUserGroup(userId, groupId, workspaceId));
};