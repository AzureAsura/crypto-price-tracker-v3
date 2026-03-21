import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./lib/prisma"
import Credentials from 'next-auth/providers/credentials'
import { signInValidation } from "./lib/zod/authZod"
import { compareSync } from "bcrypt-ts"
import { Adapter } from 'next-auth/adapters'

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma) as Adapter,
    session: { strategy: 'jwt' },
    pages: {
        signIn: '/sign-in',
    },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                const validatedData = signInValidation.safeParse(credentials)

                if (!validatedData.success) {
                    return null
                }

                const { email, password } = validatedData.data

                const user = await prisma.user.findUnique({
                    where: {
                        email
                    }
                })

                if (!user || !user.password) {
                    throw new Error('No user found')
                }

                const passwordMatch = compareSync(password, user.password)

                if (!passwordMatch) return null


                return user

            }
        })
    ],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {

            const isLoggedIn = !!auth?.user;
            const isOnAuthPage = nextUrl.pathname.startsWith("/auth");

            if (isLoggedIn && isOnAuthPage) {
                return Response.redirect(new URL("/", nextUrl));
            }
            return true
        },


        jwt({ token, user }) {
            if (user) {
                token.id = user.id

            }

            return token
        },

        session({ session, token }) {
            if (session.user) {
                session.user.id = token.id
            }

            return session
        }


    }
})