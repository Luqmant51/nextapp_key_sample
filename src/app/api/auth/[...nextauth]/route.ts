// src/app/api/auth/[...nextauth]/route.ts
import { encrypt } from '../../../../utils/encryption';
import NextAuth, { AuthOptions } from 'next-auth';
import jwt_decode from 'jwt-decode';
import KeycloakProvider from 'next-auth/providers/keycloak';

async function refreshAccessToken(token: any) {
  const resp = await fetch(`${process.env.REFRESH_TOKEN_URL}`, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.DEMO_FRONTEND_CLIENT_ID!,
      client_secret: process.env.NEXTAUTH_SECRET!,
      grant_type: 'refresh_token',
      refresh_token: token.refresh_token,
    }),
    method: 'POST',
  });
  const refreshToken = await resp.json();
  if (!resp.ok) throw refreshToken;

  return {
    ...token,
    access_token: refreshToken.access_token,
    decoded: jwt_decode(refreshToken.access_token),
    id_token: refreshToken.id_token,
    expires_at: Math.floor(Date.now() / 1000) + refreshToken.expires_in,
    refresh_token: refreshToken.refresh_token,
  };
}

export const authOptions: AuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID!,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET!,
      issuer: process.env.KEYCLOAK_ISSUER
    })],

  callbacks: {
    async jwt({ token, account }) {
      const nowTimeStamp = Math.floor(Date.now() / 1000);
      if (account) {
        token.decoded = jwt_decode(account.access_token!);
        token.access_token = account.access_token;
        token.id_token = account.id_token;
        token.expires_at = account.expires_at;
        token.refresh_token = account.refresh_token;
        return token;
      } else if (nowTimeStamp < token.expires_at!) {
        return token;
      } else {
        console.log('Token has expired. Will refresh...');
        try {
          const refreshedToken = await refreshAccessToken(token);
          console.log('Token is refreshed.');
          return refreshedToken;
        } catch (error) {
          console.error('Error refreshing access token', error);
          return { ...token, error: 'RefreshAccessTokenError' };
        }
      }
    },
    async session({ session, token }) {
      session.access_token = encrypt(token.access_token);
      session.id_token = encrypt(token.id_token);
      session.roles = token.decoded?.realm_access?.roles;
      if (!session.user) {
        session.user = {};
      }
      session.user.id = token.decoded?.sub;
      if (typeof token.error === 'string') {
        session.error = token.error;
      }
      return session;
    }
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
