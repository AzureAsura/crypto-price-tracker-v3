'use server'

import { auth } from "@/auth"
import { chatValidation } from "../zod/chatZod"
import prisma from "../prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const globalFunction = async (prevState: any, formData: FormData) => {

    const session = await auth()

    if (!session || !session.user) {
        return { message: "Silakan masuk terlebih dahulu untuk mengirim pesan." }
    }


    const validatedData = chatValidation.safeParse(Object.fromEntries(formData.entries()))

    if (!validatedData.success) {
        return { message: "Pesan tidak boleh kosong." }
    }

    try {

        await prisma.chat.create({
            data: {
                userId: session.user.id,
                content: validatedData.data.chat,
            }
        })



    } catch (error) {
        return { message: "Gagal mengirim pesan. Silakan coba lagi." }
    }

    revalidatePath('/')

    return { success: true, message: "Pesan berhasil terkirim!" }
}

export const coinFunction = async (id: string, prevState: any, formData: FormData) => {

    const session = await auth()

    if (!session || !session.user) {
        redirect('/auth')
    }


    const validatedData = chatValidation.safeParse(Object.fromEntries(formData.entries()))

    if (!validatedData.success) {
        return { message: "Pesan tidak boleh kosong." }
    }

    try {

        await prisma.chat.create({
            data: {
                userId: session.user.id,
                coinId: id,
                content: validatedData.data.chat,
            }
        })



    } catch (error) {
        return { message: "Gagal mengirim pesan ke diskusi koin ini." }
    }

    revalidatePath(`/cryptocurrencies/${id}`)

    return { success: true, message: "Komentar berhasil ditambahkan!" }
}

export const getGlobalChat = async () => {



    const coinId = 'global'

    try {

        const session = await auth() 
        if (!session?.user) return null

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


export const getChatByCoinId = async (id: string) => {

    try {

        const data = await prisma.chat.findMany({
            where: {
                coinId: id
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
                createdAt: 'asc'
            }
        })

        return data
    } catch (error) {
        console.log(error)
    }
}

export const get4GlobalChat = async () => {


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
            },
            take: 4
        })

        return data
    } catch (error) {
        console.log(error)
    }
}