"use server"

import { z } from "zod"
import { Resend } from "resend"
import EnquiryEmail from "@/models/email/EnquiryEmail"
import ThankYouEmail from "@/models/email/ThankYouEmail"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY!)

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
    console.log("Form submission received:", validatedData)

    // Send enquiry to admin
    await resend.emails.send({
      from: "Enquiry ThesisLogix <info@thesislogix.in>",
      to: "info@thesislogix.in",
      subject: `New contact form submission${validatedData.subject ? `: ${validatedData.subject}` : ""}`,
      react: EnquiryEmail({ data: validatedData }),
    })

    // Send thank-you to user
    await resend.emails.send({
      from: "Enquiry ThesisLogix <info@thesislogix.in>",
      to: validatedData.email,
      subject: "Thank you for contacting ThesisLogix!",
      react: ThankYouEmail({ data: validatedData }),
    })

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (err: unknown) {
    if (err instanceof z.ZodError) {
      // Return the first validation error message
      return { success: false, message: err.errors[0].message }
    }
    console.error("Error sending email:", err)
    return { success: false, message: "An error occurred while sending your message." }
  }
}
