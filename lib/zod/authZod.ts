import { coerce, object, string, z } from "zod";


export const registerValidation = object({
    name: string().min(2, "Name must be more than 2 character"),
    email: string().email("Invalid email"),
    password: string()
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password is too long"),
    cpassword: string()
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password is too long"),
}).refine((data) => data.password == data.cpassword, {
    message: 'Password does not match',
    path: ['cpassword']
});


export const signInValidation = object({
    email: string().email("Invalid email"),
    password: string()
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password is too long")
});


export const profileValidation = object({
    name: string().min(2, 'nama minimal 2 huruf'),
    bio: string().min(10, 'bio minimal 10 karakter').max(150, 'maximal 150 karakter'),
})
