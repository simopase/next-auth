

import { signIn, signOut, auth } from "@/auth"

export default async function Login() {
    const session = await auth()
    if (session) {
        return <>
            <p>Signed in as {session?.user?.name ?? "Unknown User"}.</p>
            <form
                action={async () => {
                    "use server"
                    await signOut()
                }}
            >
                <button type="submit">Sign Out</button>
            </form>
        </>



    }
    return (

        <form
            action={async () => {
                "use server"
                await signIn("github")
            }}
        >
            <button type="submit">Signin with GitHub</button>
        </form>
    )
} 