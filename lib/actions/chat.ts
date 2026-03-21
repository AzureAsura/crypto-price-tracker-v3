'use server'

import { auth } from "@/auth"
import { chatValidation } from "../zod/chatZod"
import prisma from "../prisma"
import { revalidatePath } from "next/cache"


export const globalFunction = async (prevState: any, formData: FormData) => {

    const session = await auth()

    if (!session || !session.user) {
        return null
    }


    const validatedData = chatValidation.safeParse(Object.fromEntries(formData.entries()))

    if (!validatedData.success) {
        return { error: validatedData.error.flatten().fieldErrors }
    }

    try {

        await prisma.chat.create({
            data: {
                userId: session.user.id,
                content: validatedData.data.chat,
            }
        })



    } catch (error) {
        return { error: "Something went wrong" }
    }

    revalidatePath('/')
}

export const getGlobalChat = async () => {

    const session = await auth()

    if (!session || !session.user) {
        return null
    }

    const coinId = 'global'

    try {
        const data = await prisma.chat.findMany({
            where: {
                coinId
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        image: true
                    }
                }
            },
            orderBy: {
                createdAt: "asc"
            }
        })

        return data
    } catch (error) {
        console.log(error)
    }
}

export const getChatByUserId = async (id: string) => {


    const session = await auth()

    if (!session || !session.user) {
        return null
    }

    try {
        const data = await prisma.chat.findMany({
            where: {
                userId: id
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        return data
    } catch (error) {
        console.log(error)
    }
} 