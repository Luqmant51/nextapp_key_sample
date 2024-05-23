import { UserGroupType } from '../../../types/node-env';

export const createMockUserGroup = (userId: string, groupId: string, workspaceId: string, overwrites: Partial<UserGroupType> = {}): UserGroupType => ({
  user_id: userId,
  group_id: groupId,
  workspace_id: workspaceId,
  ...overwrites,
});

export const createMockUserGroups = (numberOfUserGroups: number, userId: string, groupId: string, workspaceId: string): UserGroupType[] => {
  return Array.from({ length: numberOfUserGroups }).map(() => createMockUserGroup(userId, groupId, workspaceId));
};