// pages/api/runCommand.js

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function handler(req: any, res: any) {
    const session = await getServerSession(req, res, authOptions);
    if (req.method === 'POST') {
        // Place your server-side logic here
        console.log("Session on server");
        console.log(session);
        console.log("Button clicked! Running server-side code...");

        // Perform your actions, e.g., run a command or script
        const result = "Command executed successfully";

        // Send a response back to the client
        res.status(200).json({ message: result });
    } else {
        // Handle any other HTTP methods if necessary
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
