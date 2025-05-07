import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Heading,
    Text,
    Section,
    Hr,
    Link,
    Img,
    Row,
    Column,
    Button,
  } from "@react-email/components"
  import { Tailwind } from "@react-email/tailwind"
  import type { ContactFormData } from "@/actions/contact"
  
  interface ThankYouEmailProps {
    data: ContactFormData
  }
  
  export default function ThankYouEmail({ data }: ThankYouEmailProps) {
    return (
      <Html>
        <Head />
        <Preview>Thank you for contacting us, {data.name}</Preview>
        <Tailwind>
          <Body className="font-sans">
            <Container className="max-w-[600px] mx-auto">
              {/* Header */}
              <Section className="bg-[#0f172a] text-white p-6 rounded-t-lg">
                <Row>
                  <Column>
                    <Heading className="text-xl font-bold m-0">Thank You for Your Enquiry</Heading>
                    <Text className="text-gray-300 text-sm m-0 mt-1">We&apos;ve received your message</Text>
                  </Column>
                  <Column align="right">
                    <Img
                      src="https://via.placeholder.com/100x40?text=Your+Logo"
                      width="100"
                      height="40"
                      alt="Company Logo"
                      className="rounded"
                    />
                  </Column>
                </Row>
              </Section>
  
              {/* Main Content */}
              <Section className="bg-white p-6 border border-gray-200 border-t-0">
                <Text className="text-gray-800 mb-4">Hello {data.name},</Text>
  
                <Text className="text-gray-800 mb-4">
                  Thank you for reaching out to us. We&apos;ve received your enquiry and appreciate your interest.
                </Text>
  
                <Text className="text-gray-800 mb-4">
                  A member of our team will review your message and get back to you as soon as possible, usually within
                  1-2 business days.
                </Text>
  
                {/* Message Summary */}
                <Section className="bg-gray-50 p-4 rounded border border-gray-200 my-6">
                  <Heading className="text-md font-semibold text-gray-800 m-0 mb-3">Your Message Summary:</Heading>
  
                  <Row className="mb-2">
                    <Column className="w-1/3">
                      <Text className="text-gray-500 font-medium m-0">Subject:</Text>
                    </Column>
                    <Column className="w-2/3">
                      <Text className="font-medium m-0">{data.subject || "General Enquiry"}</Text>
                    </Column>
                  </Row>
  
                  <Row>
                    <Column>
                      <Text className="text-gray-700 italic m-0 text-sm">
                      &quot;{data.message.length > 100 ? `${data.message.substring(0, 100)}...` : data.message}&quot;
                      </Text>
                    </Column>
                  </Row>
                </Section>
  
                {/* What's Next */}
                <Heading className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">What&apos;s Next?</Heading>
  
                <Text className="text-gray-800 mb-4">
                  Our team will review your enquiry and respond to the email address or phone number you provided ({data.email}) or ({data.phone}). If you
                  need to add any information to your request, please reply to this email.
                </Text>
  
                {/* Call to Action */}
                <Section className="text-center my-8">
                  <Button
                    href="https://your-website.com/about"
                    className="bg-[#0f172a] text-white font-bold py-3 px-6 rounded no-underline text-center"
                  >
                    About Us
                  </Button>
                </Section>
              </Section>
  
              {/* Footer */}
              <Section className="bg-gray-100 p-6 text-center text-sm text-gray-600 rounded-b-lg border border-gray-200 border-t-0">
                <Text className="m-0">© {new Date().getFullYear()} Your Company Name. All rights reserved.</Text>
  
                <Hr className="border-gray-300 my-4" />
  
                <Row>
                  <Column align="center">
                    <Link href="https://your-website.com" className="text-[#0f172a] no-underline">
                      Website
                    </Link>
                  </Column>
                  <Column align="center">
                    <Link href="https://your-website.com/contact" className="text-[#0f172a] no-underline">
                      Contact
                    </Link>
                  </Column>
                  <Column align="center">
                    <Link href="https://your-website.com/privacy" className="text-[#0f172a] no-underline">
                      Privacy Policy
                    </Link>
                  </Column>
                </Row>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    )
  }
  