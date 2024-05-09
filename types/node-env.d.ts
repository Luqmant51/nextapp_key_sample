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