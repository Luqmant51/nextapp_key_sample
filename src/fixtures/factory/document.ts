import { faker } from '@faker-js/faker';
import { Document } from '../../../types/node-env';

export const createMockDocument = (workspaceId: string, overwrites: Partial<Document> = {}): Document => ({
    document_id: faker.string.uuid(),
    document_name: faker.lorem.sentence(),
    workspace_id: workspaceId,
    ...overwrites,
});

export const createMockDocuments = (numberOfDocuments: number, workspaceId: string): Document[] => {
    return Array.from({ length: numberOfDocuments }).map(() => createMockDocument(workspaceId));
  };