import * as z from "zod";

export const formSchema = z.object({
    propmt: z.string().min(1, {
        message: "Prompt is required",
    }),
});