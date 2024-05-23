import { faker } from '@faker-js/faker';
import { UserType } from '../../../types/node-env';

export const createMockUser = (overwrites: Partial<UserType> = {}): UserType => ({
  id: faker.string.uuid(),
  first_name: faker.person.firstName(), // Changed from faker.name.firstName()
  last_name: faker.person.lastName(), // Changed from faker.name.lastName()
  email: faker.internet.email(),
  identity_id: faker.string.uuid(),
  ...overwrites,
});

export const createMockUsers = (numberOfUsers: number): UserType[] => {
  return Array.from({ length: numberOfUsers }).map(() => createMockUser());
};