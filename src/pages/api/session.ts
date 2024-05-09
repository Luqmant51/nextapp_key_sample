import { getServerSession } from "next-auth/next";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";   // Adjust the import path based on where your NextAuth options are defined

export default async function session(req: any, res: any) {
    const session = await getServerSession(req, res, authOptions);

    if (session) {
        // Return the session if it exists
        res.status(200).json(session);
    } else {
        // Handle cases where there is no session
        res.status(401).json({ error: "No active session found" });
    }
}
