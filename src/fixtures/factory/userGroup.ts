import { faker } from '@faker-js/faker';
import { UserGroup } from '../../../types/node-env';

export const createMockUserGroup = (userId: string, groupId: string, overwrites: Partial<UserGroup> = {}): UserGroup => ({
    user_id: userId,
    group_id: groupId,
    ...overwrites,
});

export const createMockUserGroups = (numberOfUserGroups: number, userId: string, groupId: string): UserGroup[] => {
    return Array.from({ length: numberOfUserGroups }).map(() => createMockUserGroup(userId, groupId));
  };