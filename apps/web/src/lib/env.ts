import z from "zod";

const schema = z.object({
  JWT_SECRET: z.coerce.string(),
  SALT_ROUNDS: z.coerce.number(),
});

export const env = schema.parse(process.env);
