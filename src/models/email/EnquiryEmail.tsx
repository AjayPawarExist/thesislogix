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
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"
import type { ContactFormData } from "@/actions/contact"

interface EnquiryProps {
  data: ContactFormData
}

export default function EnquiryEmail({ data }: EnquiryProps) {
  // Format timestamp for better readability
  const timestamp = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <Html>
      <Head />
      <Preview>
        New enquiry from {data.name} - {data.subject || "Contact Request"}
      </Preview>
      <Tailwind>
        <Body className="font-sans">
          <Container className="max-w-[600px] mx-auto">
            {/* Header */}
            <Section className="bg-[#0f172a] text-white p-6 rounded-t-lg">
              <Row>
                <Column>
                  <Heading className="text-xl font-bold m-0">New Enquiry Received</Heading>
                  <Text className="text-gray-300 text-sm m-0 mt-1">Submitted on {timestamp}</Text>
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
              {/* Contact Information */}
              <Heading className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Contact Information</Heading>

              <Row className="mb-4">
                <Column className="w-1/3">
                  <Text className="text-gray-500 font-medium m-0">Name:</Text>
                </Column>
                <Column className="w-2/3">
                  <Text className="font-medium m-0">{data.name}</Text>
                </Column>
              </Row>

              <Row className="mb-4">
                <Column className="w-1/3">
                  <Text className="text-gray-500 font-medium m-0">Email:</Text>
                </Column>
                <Column className="w-2/3">
                  <Link href={`mailto:${data.email}`} className="text-blue-600 no-underline font-medium">
                    {data.email}
                  </Link>
                </Column>
              </Row>

              {data.phone && (
                <Row className="mb-4">
                  <Column className="w-1/3">
                    <Text className="text-gray-500 font-medium m-0">Phone:</Text>
                  </Column>
                  <Column className="w-2/3">
                    <Link href={`tel:${data.phone}`} className="text-blue-600 no-underline font-medium">
                      {data.phone}
                    </Link>
                  </Column>
                </Row>
              )}

              {data.subject && (
                <Row className="mb-4">
                  <Column className="w-1/3">
                    <Text className="text-gray-500 font-medium m-0">Subject:</Text>
                  </Column>
                  <Column className="w-2/3">
                    <Text className="font-medium m-0">{data.subject}</Text>
                  </Column>
                </Row>
              )}

              <Hr className="border-gray-200 my-6" />

              {/* Message Content */}
              <Heading className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Message</Heading>

              <Section className="bg-gray-50 p-4 rounded border border-gray-200 mb-6">
                <Text className="whitespace-pre-wrap text-gray-700">{data.message}</Text>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="bg-gray-100 p-6 text-center text-sm text-gray-600 rounded-b-lg border border-gray-200 border-t-0">
              <Text className="m-0">This is an automated message from your website contact form.</Text>
              <Text className="m-0 mt-2">© {new Date().getFullYear()} Your Company Name. All rights reserved.</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
