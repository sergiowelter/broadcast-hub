import { z } from "zod";

export const updateUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
});

export type UpdateUserDTO = z.infer<typeof updateUserSchema>;