'use server'

import { registerValidation, signInValidation } from "../zod/authZod"
import { hashSync } from 'bcrypt-ts'
import prisma from "../prisma"
import { redirect } from "next/navigation"
import { signIn } from "@/auth"
import { AuthError } from "next-auth"


export const registerFunction = async (prevState: any, formData: FormData) => {

    let isSuccess = false;

    const validatedData = registerValidation.safeParse(Object.fromEntries(formData.entries()))

    if (!validatedData.success) {
        return {
            error: validatedData.error.flatten().fieldErrors
        }
    }

    const { name, email, password } = validatedData.data
    const hashedPassword = hashSync(password, 10)

    try {
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            }
        })

        return {
            success: true,
            message: "Pendaftaran berhasil! Silakan masuk.",
        }


    } catch (error: any) {
        if (error.code === 'P2002') {
            return { message: "Email sudah terdaftar. Gunakan email lain." }
        }
        return { message: "Gagal mendaftarkan pengguna. Silakan coba lagi nanti." }
    }


}


export const signInFunction = async (prevState: unknown, formData: FormData) => {

    const validatedData = signInValidation.safeParse(Object.fromEntries(formData.entries()))

    if (!validatedData.success) {
        return {
            error: validatedData.error.flatten().fieldErrors
        }
    }

    const { email, password } = validatedData.data

    try {
        await signIn("credentials", { email, password, redirectTo: '/' })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return {
                        success: false,
                        message: 'Invalid credentials'
                    }
                default:
                    return {
                        success: false,
                        message: 'Something went wrong'
                    }
            }
        }
        throw error
    }

}

