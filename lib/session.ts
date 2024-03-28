//session.ts file is used to store all the data about the current logged in user
import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import jsonwebtoken from 'jsonwebtoken'
import { JWT } from "next-auth/jwt";

//auth options to be used by the next-auth authentication
export const authOptions: NextAuthOptions = {
    providers: [//list of providers for authentication
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
          }),
    ],
    jwt: {//jwt encoding and decoding properties of auth options
        encode: ({ secret, token }) => {

        },
        decode: async ({ secret, token }) => {

        }
    },
    theme: {
        colorScheme: "light",
    logo: "/logo.svg",
    },
    callbacks: {
        async session({ session }) {//callback function called everytime the user visits the web page

        },
        async signIn({ user } : { user : AdapterUser | User}) {//callback function called wen user signs in google user or user in database

        }
    }
}

export async function getCurrentUser() {
    const session = await getServerSession(authOptions)

    return session;
}