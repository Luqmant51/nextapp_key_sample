import { faker } from '@faker-js/faker';
import { GroupType } from '../../../types/node-env';

export const createMockGroup = (workspaceId: string, overwrites: Partial<GroupType> = {}): GroupType => ({
  id: faker.string.uuid(),
  group_name: faker.company.name(),
  workspace_id: workspaceId,
  ...overwrites,
});


export const createMockGroups = (numberOfGroups: number, workspaceId: string): GroupType[] => {
  return Array.from({ length: numberOfGroups }).map(() => createMockGroup(workspaceId));
};