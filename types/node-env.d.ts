import 'next-auth';

declare namespace NodeJS {
    export interface ProcessEnv {
        KEYCLOAK_CLIENT_ID: string
        KEYCLOAK_CLIENT_SECRET: string
        KEYCLOAK_ISSUER: string
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        decoded?: {
            sid?: string
            realm_access?: {
                roles: string[];
            };
        };
        expires_at?: number;
        refresh_token?: string;
        access_token?: string;
        id_token?: string;
    }
}

declare module 'next-auth' {
    interface Session {
        access_token?: string;
        id_token?: string;
        roles?: string[];
        error?: string;
        user: {
            id?: string;
        } & DefaultSession['user'];
    }
}
export interface WorkspaceType {
    id: string;
    workspace_name: string;
    is_public: boolean;
    created_by: string;
    created_on_utc: string;
}

export interface RoleType {
    id: number;
    name: string;
}

export interface GroupType {
    id: string;
    group_name: string;
    workspace_id: string;
}

export interface UserType {
    id: string;
    name: string;
    email?: string;
    identity_id?: string;
}

export interface DocumentType {
    document_id: string;
    document_name: string;
    workspace_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    content: string;
    imageLinks?: string[];
}

export interface UserGroupType {
    user_id: string;
    group_id: string;
    workspace_id: string;
}

export interface ACLType {
    id: string;
    workspace_id: string;
    role_id: number;
    group_id: string;
}

