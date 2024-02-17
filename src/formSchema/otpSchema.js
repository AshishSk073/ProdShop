import * as z from 'zod';

let loginSchema;

export default loginSchema = z.object({
    otp: z.array()
});
