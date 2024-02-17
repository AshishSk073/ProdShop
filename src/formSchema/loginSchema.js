import * as z from 'zod';

let loginSchema;

const phoneRegex = new RegExp(
    /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g
);

export default loginSchema = z.object({
    mobileNo: z.string().max(10, 'Phone number cannot exceed 10 digits').regex(phoneRegex, 'Must contain atleast 10 digits'),
})
