import { type DefaultSession } from "next-auth";
import { JWT } from 'next-auth/jwt'

declare module "next-auth" {
    interface Session {
        user: User 
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        sub: string
    }
}

// import { DefaultSession } from "next-auth"

// declare module "next-auth" {
//     interface Session {
//         user: {
//             id: string
//             bio?: string
//         } & DefaultSession["user"] // image sudah ada di DefaultSession
//     }

//     interface User {
//         bio?: string
//     }
// }

// declare module "next-auth/jwt" {
//     interface JWT {
//         id: string
//         bio?: string
//     }
// }