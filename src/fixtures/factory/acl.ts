import { faker } from '@faker-js/faker';
import { ACLType } from '../../../types/node-env';

export const createMockACL = (workspaceId: string, roleId: number, groupId: string, overwrites: Partial<ACLType> = {}): ACLType => ({
  id: faker.string.uuid(),
  workspace_id: workspaceId,
  role_id: roleId,
  group_id: groupId,
  ...overwrites,
});

export const createMockACLs = (numberOfACLs: number, workspaceId: string, roleId: number, groupId: string): ACLType[] => {
  return Array.from({ length: numberOfACLs }).map(() => createMockACL(workspaceId, roleId, groupId));
};