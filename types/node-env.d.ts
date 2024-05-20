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
    }
}


export interface Workspace {
    id: string;
    workspace_name: string;
    is_public: boolean;
    created_by: string;
    created_on_utc: string;
}

export interface Role {
    id: number;
    name: string;
}

export interface Group {
    id: string;
    group_name: string;
    workspace_id: string;
}

export interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    identity_id: string;
}

export interface Document {
    document_id: string;
    document_name: string;
    workspace_id: string;
}

export interface UserGroup {
    user_id: string;
    group_id: string;
    workspace_id: string;
}

export interface ACL {
    id: string;
    workspace_id: string;
    role_id: number;
    group_id: string;
}

