import { createMockWorkspace, createMockWorkspaces } from './factory/workspace';
import { createMockRole, createMockRoles } from './factory/role';
import { createMockGroup, createMockGroups } from './factory/group';
import { createMockUser, createMockUsers } from './factory/user';
import { createMockDocument, createMockDocuments } from './factory/document';
import { createMockUserGroup, createMockUserGroups } from './factory/userGroup';
import { createMockACL, createMockACLs } from './factory/acl';
import { faker } from '@faker-js/faker';


// Give single MockData
const userName = `${faker.person.firstName()} ${faker.person.lastName()}`;
const mockWorkspace = createMockWorkspace(userName, true);
const mockRole = createMockRole();
const mockGroup = createMockGroup(mockWorkspace.id);
const mockUser = createMockUser();
const mockDocument = createMockDocument(mockWorkspace.id, '123');
const mockUserGroup = createMockUserGroup(mockUser!.id, mockGroup.id, mockWorkspace.id);
const mockACL = createMockACL(mockWorkspace.id, mockRole.id, mockGroup.id);


// Give Number of Mockdata
const mockWorkspaces = createMockWorkspaces(5, userName, true);
const mockRoles = createMockRoles(5);
const mockGroups = createMockGroups(5, mockWorkspaces[0].id);
const mockUsers = createMockUsers(5);
const mockDocuments = createMockDocuments(5, mockWorkspaces[0].id, '123');
const mockUserGroups = createMockUserGroups(5, mockUsers[0].id, mockGroups[0].id, mockWorkspace.id);
const mockACLs = createMockACLs(5, mockWorkspaces[0].id, mockRoles[0].id, mockGroups[0].id);


// console.log single MockData
console.log(mockWorkspace);
console.log(mockRole);
console.log(mockGroup);
console.log(mockUser);
console.log(mockDocument);
console.log(mockUserGroup);
console.log(mockACL);


// console.log multiple MockData

console.log(mockWorkspaces);
console.log(mockRoles);
console.log(mockGroups);
console.log(mockUsers);
console.log(mockDocuments);
console.log(mockUserGroups);
console.log(mockACLs);