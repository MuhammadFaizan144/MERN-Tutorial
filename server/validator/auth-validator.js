const { z } = require("zod")
//creating an object schema
const sigupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 character" })
        .max(255, { message: "Name must name not be more than 255 character" }),
    email: z
        .string({ required_error: "email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "email must be at least 3 character" })
        .max(255, { message: "email must name not be more than 255 character" }),

    phone: z
        .string({ required_error: "phone is required" })
        .trim()
        .min(10, { message: "phone must be at least 10 character" })
        .max(20, { message: "phone must name not be more than 20 character" }),
    password: z.
        string({ required_error: "password is required" })
        .min(3, { message: "password must be at least 3 character" })
        .max(255, { message: "password must name not be more than 255 character" }),
})
module.exports = sigupSchema