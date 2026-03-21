import { coerce, object, string, z } from "zod";


export const chatValidation = object({
    chat: string().min(1, 'Cannot send an empty chat').max(300, 'message is too long'),
});


