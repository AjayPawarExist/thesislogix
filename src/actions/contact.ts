"use server"

import { Resend } from "resend"
import { z } from "zod"

// Zod Schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(1, { message: "Message cannot be empty." }),
})

export type FormData = z.infer<typeof formSchema>

// Type for return value
type SendEmailResult = {
  success: boolean
  message: string
}

// Server Action
export async function sendEmail(formData: FormData): Promise<SendEmailResult> {
  // Ensure API key exists
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set in environment variables.")
    return {
      success: false,
      message: "Server configuration error. Please contact support.",
    }
  }

  // Initialize Resend
  const resend = new Resend(apiKey)

  try {
    // Validate data
    const validatedData = formSchema.parse(formData)
    const { name, email, message } = validatedData

    // Compose enquiry email HTML for admin
    const enquiryHtml = `
      <!DOCTYPE html>
      <html>
      <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .container { border: 1px solid #e0e0e0; border-radius: 5px; overflow: hidden; }
        .header { background-color: #2c3e50; padding: 20px; text-align: center; color: white; }
        .content { padding: 20px; background-color: #ffffff; }
        .section { margin-bottom: 20px; }
        h1 { margin: 0; font-size: 24px; }
        h2 { color: #2c3e50; font-size: 18px; border-bottom: 1px solid #e0e0e0; padding-bottom: 8px; margin-top: 25px; }
        .info-row { margin-bottom: 10px; }
        .info-label { font-weight: bold; }
        .message-box { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #2c3e50; border-radius: 3px; }
        .footer { background-color: #f8f8f8; padding: 15px; text-align: center; font-size: 12px; }
      </style>
      </head>
      <body>
      <div class="container">
        <div class="header">
        <h1>New ThesisLogix Enquiry</h1>
        </div>
        <div class="content">
        <div class="section">
          <h2>Contact Information</h2>
          <div class="info-row">
          <span class="info-label">Name:</span> ${name}
          </div>
          <div class="info-row">
          <span class="info-label">Email:</span> <a href="mailto:${email}">${email}</a>
          </div>
        </div>
        
        <div class="section">
          <h2>Message</h2>
          <div class="message-box">
          ${message.replace(/\n/g, "<br />")}
          </div>
        </div>
        </div>
        <div class="footer">
        &copy; ${new Date().getFullYear()} ThesisLogix | This is an automated message from your website contact form
        </div>
      </div>
      </body>
      </html>
    `

    // Send enquiry email to admin
    const { error: adminError } = await resend.emails.send({
      from: "Enquiry Form <info@thesislogix.com>", // Must be a verified sender in Resend
      to: ["info@thesislogix.com"],
      subject: `New enquiry from ${name}`,
      html: enquiryHtml,
      replyTo: email,
    })

    if (adminError) {
      console.error("Resend admin email error:", adminError)
      return {
        success: false,
        message: "Failed to send your enquiry. Please try again later.",
      }
    }

    // Compose acknowledgement email HTML for user
    const ackHtml = `
      <!DOCTYPE html>
      <html>
      <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background-color: #f8f8f8; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .logo { width: 200px; height: auto; }
        h1 { color: #2c3e50; margin-top: 20px; }
        .footer { background-color: #f8f8f8; padding: 15px; text-align: center; font-size: 12px; margin-top: 20px; }
      </style>
      </head>
      <body>
      <div class="header">
        <img src="https://thesislogix.com/logo.png" alt="Thesis Logix Logo" class="logo" />
      </div>
      <div class="content">
        <h1>Thank You for Contacting Us</h1>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to ThesisLogix. We have received your inquiry and one of our team members will get back to you as soon as possible.</p>
        <p>We appreciate your interest in our services and look forward to assisting you.</p>
        <p>
        Best regards,<br/>
        <strong>The ThesisLogix Team</strong>
        </p>
      </div>
      <div class="footer">
        &copy; ${new Date().getFullYear()} ThesisLogix | <a href="https://thesislogix.com">thesislogix.com</a>
      </div>
      </body>
      </html>
    `

    // Send acknowledgement email to user
    const { error: ackError } = await resend.emails.send({
      from: "Thesis Logix <info@thesislogix.com>", // Verified sender address
      to: [email],
      subject: "Thank you for your enquiry",
      html: ackHtml,
    })

    if (ackError) {
      console.error("Resend acknowledgement email error:", ackError)
      return {
        success: true,
        message:
          "Your enquiry has been sent successfully, but we were unable to send you an acknowledgement email.",
      }
    }

    return {
      success: true,
      message: "Your enquiry has been sent successfully. We'll get back to you shortly.",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.errors)
      return {
        success: false,
        message: "Invalid form data. Please correct the errors and try again.",
      }
    }

    console.error("Unexpected error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
