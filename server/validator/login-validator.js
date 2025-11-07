const {z, email}=require('zod')
const LoginSchema=z.object({
    email: z
        .string({ required_error: "email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "email must be at least 3 character" })
        .max(255, { message: "email must name not be more than 255 character" }),
    password: z
        .string({ required_error: "password is required" })
        .min(10, { message: "password must be at least 3 character" })
        .max(255, { message: "password must name not be more than 255 character" }),
})
module.exports=LoginSchema