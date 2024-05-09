import Logout from "@/components/Logout";
import { Container, Paper, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../app/api/auth/[...nextauth]/route";
import { useEffect, useState } from "react";

// const Wellcome = async () => {
//     const session = await getServerSession(authOptions);

//     const [userName, setUserName] = useState<any>('');

//     useEffect(() => {
//         if (session) {
//             setUserName(session.user?.name);
//         }
//     }, [session]);

//     return (
//         <Container component="main" maxWidth="xs">
//             <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', textAlign: 'center' }}>
//                 <Typography variant="h6" component="h1">
//                     Welcome, {userName}!
//                 </Typography>
//                 <Logout />
//             </Paper>
//         </Container>
//     );
// }
// export default Wellcome;


import { getSession } from "next-auth/react";

export async function getServerSideProps(authOptions: any) {
    const session = await getSession(authOptions);
    // Redirect based on the presence of a session
    if (!session) {
        return {
            redirect: {
                destination: '/login', // Modify as needed
                permanent: false,
            },
        };
    }

    return {
        props: {
            user: session.user, // Only pass the user part if that's all you need
        },
    };
}

const WellcomePage = ({ user }: any) => {
    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', textAlign: 'center' }}>
                <Typography variant="h6" component="h1">
                    Welcome, {user.name}!
                </Typography>
                <Logout />
            </Paper>
        </Container>
    );
}

export default WellcomePage;
