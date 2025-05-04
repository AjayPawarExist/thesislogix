"use server"

import { z } from "zod"

// Define the schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }).optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  terms: z.boolean().refine((val) => val === true, { message: "You must accept the terms." }),
})

export type ContactFormData = z.infer<typeof formSchema>

export async function sendEmail(data: ContactFormData) {
  try {
    // Validate the form data
    const validatedData = formSchema.parse(data)

    // Log the form data to console as requested
    console.log("Form submission received:", validatedData)

    // Here you would typically send an email
    // For example, using a service like Nodemailer, SendGrid, etc.

    // Simulate a delay to mimic sending an email
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Error processing contact form:", error)
    if (error instanceof z.ZodError) {
      return { success: false, message: "Validation failed", errors: error.errors }
    }
    return { success: false, message: "Failed to send your message. Please try again later." }
  }
}
