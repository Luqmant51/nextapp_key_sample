import { faker } from '@faker-js/faker';
import { User } from '../../../types/node-env';

export const createMockUser = (overwrites: Partial<User> = {}): User => ({
    id: faker.string.uuid(),
    first_name: faker.person.firstName(), // Changed from faker.name.firstName()
    last_name: faker.person.lastName(), // Changed from faker.name.lastName()
    email: faker.internet.email(),
    identity_id: faker.string.uuid(),
    ...overwrites,
});

export const createMockUsers = (numberOfUsers: number): User[] => {
    return Array.from({ length: numberOfUsers }).map(() => createMockUser());
};