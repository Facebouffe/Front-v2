import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import axios from 'axios'

export default NextAuth({
    providers: [
        CredentialProvider({
            name: 'Credentials',
            async authorize(credentials) {
                try {
                    const user = await axios.post('http://34.140.197.216:80/auth/login',credentials, {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })

                    if (!user) {
                        new Error('Utilisateur non reconu')
                    }

                    return user
                } catch (e) {
                    const errorMessage = e.response.data.message
                    // Redirecting to the login page with error messsage in the URL
                    throw new Error(errorMessage)
                }
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user);
            return token;
        },
        session: async ({ session, token }) => {
            session.user = token.user;
            return session;
        },
    },
    pages: {
        signIn: "/connexion",
    },
    session: {
        jwt: true,
        maxAge: 30 * 60
    }
});