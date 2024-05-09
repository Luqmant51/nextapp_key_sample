import { authOptions } from "../[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getIdToken } from "@/utils/sessionTokenAccessor";

export async function GET() {
    const session = await getServerSession(authOptions);

    if (session) {
        const idToken = await getIdToken();
        // this will log out the user on Keycloak side
        const url = `${process.env.END_SESSION_URL}?id_token_hint=${idToken}&post_logout_redirect_uri=${encodeURIComponent(process.env.NEXTAUTH_URL!)}`;

        try {
            const resp = await fetch(url, { method: "GET" });
            // Assume the logout should handle based on the fetch response, such as redirecting or confirming logout
            // Here, return directly based on Keycloak's response might be more meaningful
            return new Response(null, { status: resp.status }); // pass the status from the logout response
        } catch (err) {
            console.error(err);
            return new Response(null, { status: 500 }); // Properly set the status on error
        }
    }

    return new Response(null, { status: 200 }); // If no session, still return a successful status for the request
}
