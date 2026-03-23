import { object, string } from "zod";

export const chatValidation = object({
    chat: string()
        .min(1, "Pesan tidak boleh kosong")
        .max(300, "Pesan maksimal 300 karakter"),
});