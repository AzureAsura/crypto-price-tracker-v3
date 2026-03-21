'use server'

import { redirect } from "next/navigation"
import prisma from "../prisma"
import { profileValidation } from "../zod/authZod"
import { revalidatePath } from "next/cache"
import { auth } from "@/auth"


export const editProfile = async (id: string, image: string, prevState: any, formData: FormData) => {

    const session = await auth()

    if (!session || !session.user) {
        return null
    }


    if (!image) {
        return { message: 'image is required' }
    }

    const validatedData = profileValidation.safeParse(Object.fromEntries(formData.entries()))

    if (!validatedData.success) {
        return { error: validatedData.error.flatten().fieldErrors }
    }

    const { name, bio } = validatedData.data

    try {

        await prisma.user.update({
            data: {
                name,
                bio,
                image,
            },
            where: {
                id
            }
        })

        revalidatePath('/')

        return { success: true }

    } catch (error) {
        console.log(error)

    }


}

export const getProfile = async (id: string) => {


    try {

        const data = await prisma.user.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                email: true,
                image: true,
                bio: true,
                createdAt: true,
            }
        })

        return data


    } catch (error) {
        console.log(error)
    }


}