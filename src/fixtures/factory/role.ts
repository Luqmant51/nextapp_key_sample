import { faker } from '@faker-js/faker';
import { RoleType } from '../../../types/node-env';

export const createMockRole = (overwrites: Partial<RoleType> = {}): RoleType => ({
  id: faker.number.int({ min: 1, max: 1000 }),
  name: faker.person.jobTitle(), // Changed from faker.name.jobTitle()
  ...overwrites,
});

export const createMockRoles = (numberOfRoles: number): RoleType[] => {
  return Array.from({ length: numberOfRoles }).map(() => createMockRole());
};