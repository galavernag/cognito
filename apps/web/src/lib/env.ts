import z from "zod";

const schema = z.object({
  JWT_SECRET: z.preprocess((val) => {
    const secret = new TextEncoder().encode(String(val));

    return secret;
  }, z.instanceof(Uint8Array)),
  SALT_ROUNDS: z.coerce.number(),
});

export const env = schema.parse(process.env);
Uint8Array;
