import { faker } from '@faker-js/faker';
import { DocumentType } from '../../../types/node-env';

export const createMockDocument = (
  workspaceId: string,
  userId: string,
  overwrites: Partial<DocumentType> = {}
): DocumentType => {
  const typesOfContent = ['message', 'link', 'code', 'text', 'imageLinks'];
  let content: string;

  // Function to generate content
  const generateContent = () => {
    const randomContentType = typesOfContent[faker.number.int({ min: 0, max: typesOfContent.length - 1 })];
    switch (randomContentType) {
    case 'message':
      return faker.lorem.sentence();
    case 'link':
      return faker.internet.url();
    case 'code':
      return faker.commerce.price();
    case 'text':
      return faker.lorem.paragraph();
    case 'imageLinks':
      return Math.random() > 0.5 ? faker.image.url() : '';
    default:
      return faker.lorem.paragraph();
    }
  };

  // Generate content and ensure it is not empty
  do {
    content = generateContent();
  } while (!content);

  return {
    document_id: faker.string.uuid(),
    document_name: faker.lorem.sentence(),
    workspace_id: workspaceId,
    user_id: userId,
    created_at: faker.date.recent(),
    updated_at: faker.date.recent(),
    content,
    ...overwrites,
  };
};

export const createMockDocuments = (
  numberOfDocuments: number,
  workspaceId: string,
  userId: string
): DocumentType[] => {
  return Array.from({ length: numberOfDocuments }, () => createMockDocument(workspaceId, userId));
};
