import { object, string } from "zod";

export const registerValidation = object({
    name: string()
        .min(2, "Nama minimal harus 2 karakter")
        .max(70, "Nama maksimal 70 karakter"),
    email: string()
        .email("Format email tidak valid"),
    password: string()
        .min(8, "Kata sandi minimal 8 karakter")
        .max(32, "Kata sandi maksimal 32 karakter"),
    cpassword: string()
        .min(8, "Kata sandi minimal 8 karakter")
        .max(32, "Kata sandi maksimal 32 karakter"),
}).refine((data) => data.password === data.cpassword, {
    message: "Konfirmasi kata sandi tidak cocok",
    path: ["cpassword"]
});

export const signInValidation = object({
    email: string()
        .email("Format email tidak valid"),
    password: string()
        .min(8, "Kata sandi minimal 8 karakter")
        .max(32, "Kata sandi maksimal 32 karakter")
});

export const profileValidation = object({
    name: string()
        .min(2, "Nama minimal harus 2 karakter")
        .max(70, "Nama maksimal 70 karakter"),
    bio: string()
        .min(10, "Bio minimal harus 10 karakter")
        .max(150, "Bio maksimal 150 karakter"),
});