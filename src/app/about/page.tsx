"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FaHandshake,
  FaClock,
  FaGlobe,
  FaUsers,
  FaLightbulb,
  FaAward,
  FaRocket,
  FaClipboardList,
  FaLaptopCode,
  FaChartLine,
  FaUniversity,
} from "react-icons/fa"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const reasonsData = [
    {
      icon: <FaHandshake className="text-blue-600 text-3xl" />,
      title: "Client-Centric Approach",
      description:
        "Dedicated to understanding and meeting our clients' requirements, while maintaining strong ethical values.",
      color: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      icon: <FaClock className="text-indigo-600 text-3xl" />,
      title: "On-Time Delivery",
      description: "Committed to providing timely delivery by adhering to industry guidelines and best practices.",
      color: "from-indigo-50 to-indigo-100",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-200",
    },
    {
      icon: <FaLightbulb className="text-amber-600 text-3xl" />,
      title: "Passionate Researchers",
      description: "Our team is driven by passion for research and an attitude to achieve maximum positive results.",
      color: "from-amber-50 to-amber-100",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200",
    },
    {
      icon: <FaGlobe className="text-emerald-600 text-3xl" />,
      title: "Global Presence",
      description: "Serving clients across the globe with a strong market presence for over 18 years.",
      color: "from-emerald-50 to-emerald-100",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200",
    },
    {
      icon: <FaUsers className="text-violet-600 text-3xl" />,
      title: "Experienced Team",
      description:
        "Our dynamic team of professionals collaborates closely with clients to ensure outstanding research outcomes.",
      color: "from-violet-50 to-violet-100",
      iconColor: "text-violet-600",
      borderColor: "border-violet-200",
    },
    {
      icon: <FaAward className="text-rose-600 text-3xl" />,
      title: "Sustained Success",
      description:
        "Over the years, we've built a reputation for reliability, quality, and dedication to academic excellence.",
      color: "from-rose-50 to-rose-100",
      iconColor: "text-rose-600",
      borderColor: "border-rose-200",
    },
    {
      icon: <FaRocket className="text-cyan-600 text-3xl" />,
      title: "Innovative Solutions",
      description:
        "We provide creative and innovative research solutions, making your thesis stand out in the academic world.",
      color: "from-cyan-50 to-cyan-100",
      iconColor: "text-cyan-600",
      borderColor: "border-cyan-200",
    },
    {
      icon: <FaClipboardList className="text-teal-600 text-3xl" />,
      title: "Detailed Process",
      description:
        "We focus on a structured and detailed process to guide you through every step of your research journey.",
      color: "from-teal-50 to-teal-100",
      iconColor: "text-teal-600",
      borderColor: "border-teal-200",
    },
    {
      icon: <FaLaptopCode className="text-slate-600 text-3xl" />,
      title: "Tech-Driven Approach",
      description: "Our team utilizes cutting-edge technology to optimize your research and thesis presentation.",
      color: "from-slate-50 to-slate-100",
      iconColor: "text-slate-600",
      borderColor: "border-slate-200",
    },
  ]

  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Research Director",
      image: "/placeholder.svg?key=team-member-1&width=300&height=300",
      bio: "Ph.D. in Data Science with 15+ years of experience guiding research scholars.",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Senior Research Consultant",
      image: "/placeholder.svg?key=team-member-2&width=300&height=300",
      bio: "Specialist in qualitative research methodologies with expertise in social sciences.",
    },
    {
      name: "Dr. Anand Patel",
      role: "Statistical Analysis Expert",
      image: "/placeholder.svg?key=team-member-3&width=300&height=300",
      bio: "Expert in advanced statistical methods and research design with 12+ years of experience.",
    },
    {
      name: "Dr. Meera Iyer",
      role: "Academic Writing Specialist",
      image: "/placeholder.svg?key=team-member-4&width=300&height=300",
      bio: "Specialized in thesis structuring and academic writing across multiple disciplines.",
    },
  ]

  const milestones = [
    {
      year: "2005",
      title: "Foundation",
      description: "ThesisLogix was established with a vision to support research scholars.",
    },
    {
      year: "2010",
      title: "Expansion",
      description: "Expanded services to international clients and added specialized research domains.",
    },
    {
      year: "2015",
      title: "Digital Transformation",
      description: "Integrated advanced digital tools and platforms for enhanced research support.",
    },
    {
      year: "2020",
      title: "Research Excellence Center",
      description: "Established a dedicated center for research excellence and innovation.",
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Recognized as a leading research consultancy with clients across 50+ countries.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-slate-50 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="small-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
              </pattern>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#small-grid)" />
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-2 md:px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Empowering Research <span className="text-blue-700">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600">
              Guiding scholars on their academic journey since 2005 with expertise, innovation, and dedication.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 blur-xl opacity-70"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?key=about-hero-image&width=1200&height=600"
                alt="ThesisLogix Team"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className=" container mx-auto px-2 md:px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 blur-xl opacity-70"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?key=about-story-image&width=600&height=600"
                    alt="Our Story"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg"
                  >
                    <div className="text-4xl font-bold text-blue-700">500+</div>
                    <p className="text-slate-700 mt-2">Scholars Assisted</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 shadow-lg"
                  >
                    <div className="text-4xl font-bold text-indigo-700">18+</div>
                    <p className="text-slate-700 mt-2">Years Experience</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-slate-600">
                <p className="text-lg">
                  At <span className="font-semibold text-blue-700">ThesisLogix</span>, we don&apos;t just offer research
                  assistance—we empower research scholars to turn their academic dreams into reality. Our mission is to
                  simplify the complex process of PG and PhD research by providing expert consultation at every stage,
                  ensuring that your work meets the highest standards of quality and innovation.
                </p>

                <p className="text-lg">
                  Since 2005, our professional research consultants and writers have partnered with thousands of
                  research candidates worldwide, helping them navigate the challenges of thesis writing with confidence.
                  Whether it&apos;s selecting the right research topic, drafting a flawless thesis, or perfecting your work
                  through meticulous proofreading and editing, ThesisLogix ensures that every detail is handled with
                  precision.
                </p>

                <p className="text-lg">
                  Our services go beyond just delivering a document—we work to enhance your research skills and
                  understanding, ensuring that you stand out among your peers. We believe that every scholar&apos;s research
                  journey is unique, and that&apos;s why we offer personalized solutions tailored to your specific academic
                  needs.
                </p>

                <div className="pt-4 flex flex-wrap gap-4">
                  {["Personalized Approach", "Academic Excellence", "Ethical Standards", "Continuous Support"].map(
                    (value, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-700"
                      >
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">{value}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-2 md:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Reasons to Work With Us</h2>
            <p className="text-lg text-slate-600">
              Discover why hundreds of scholars trust ThesisLogix for their research needs.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {reasonsData.map((reason, index) => (
              <motion.div key={index} variants={fadeIn} whileHover={{ y: -5 }} className="group">
                <Card className="h-full border border-transparent hover:border-blue-200 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div
                      className={`bg-gradient-to-br ${reason.color} p-8 h-full flex flex-col transition-all duration-300`}
                    >
                      <div
                        className={`rounded-full bg-white/80 p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${reason.iconColor}`}
                      >
                        {reason.icon}
                      </div>
                      <h3 className={`text-xl font-bold mb-4 ${reason.iconColor}`}>{reason.title}</h3>
                      <p className="text-slate-700 flex-grow">{reason.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-2 md:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Areas of Specialization</h2>
            <p className="text-lg text-slate-600">
              We provide comprehensive research assistance across various academic disciplines.
            </p>
          </motion.div>

          <Tabs defaultValue="sciences" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="sciences">Sciences</TabsTrigger>
              <TabsTrigger value="humanities">Humanities</TabsTrigger>
              <TabsTrigger value="business">Business & Management</TabsTrigger>
            </TabsList>
            <TabsContent value="sciences" className="border rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-100 p-3 text-blue-700">
                    <FaUniversity className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Engineering & Technology</h3>
                    <p className="text-slate-600">
                      Expert guidance in mechanical, electrical, computer science, and civil engineering research.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-3 text-green-700">
                    <FaLaptopCode className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Data Science & Analytics</h3>
                    <p className="text-slate-600">
                      Specialized support in statistical analysis, machine learning, and data visualization.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-100 p-3 text-purple-700">
                    <FaUsers className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Medical & Health Sciences</h3>
                    <p className="text-slate-600">
                      Research assistance in clinical studies, public health, and healthcare management.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-amber-100 p-3 text-amber-700">
                    <FaLightbulb className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Environmental Sciences</h3>
                    <p className="text-slate-600">
                      Support in sustainability research, climate studies, and ecological investigations.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="humanities" className="border rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-indigo-100 p-3 text-indigo-700">
                    <FaUniversity className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Literature & Languages</h3>
                    <p className="text-slate-600">
                      Expert assistance in literary analysis, linguistics, and comparative literature studies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-rose-100 p-3 text-rose-700">
                    <FaUsers className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Psychology & Sociology</h3>
                    <p className="text-slate-600">
                      Specialized support in behavioral studies, social research, and psychological analysis.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-cyan-100 p-3 text-cyan-700">
                    <FaGlobe className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">History & Cultural Studies</h3>
                    <p className="text-slate-600">
                      Research assistance in historical analysis, cultural investigations, and anthropological studies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-emerald-100 p-3 text-emerald-700">
                    <FaLightbulb className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Education & Pedagogy</h3>
                    <p className="text-slate-600">
                      Support in educational research, teaching methodologies, and curriculum development.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="business" className="border rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-100 p-3 text-blue-700">
                    <FaChartLine className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Finance & Economics</h3>
                    <p className="text-slate-600">
                      Expert guidance in financial analysis, economic modeling, and market research.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-amber-100 p-3 text-amber-700">
                    <FaUsers className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Marketing & Consumer Behavior</h3>
                    <p className="text-slate-600">
                      Specialized support in marketing strategies, consumer research, and brand analysis.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-violet-100 p-3 text-violet-700">
                    <FaHandshake className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Organizational Management</h3>
                    <p className="text-slate-600">
                      Research assistance in leadership studies, organizational behavior, and human resources.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-emerald-100 p-3 text-emerald-700">
                    <FaGlobe className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">International Business</h3>
                    <p className="text-slate-600">
                      Support in global market analysis, cross-cultural business studies, and international trade.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-2 md:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-800/50 text-blue-200 rounded-full text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Milestones That Define Us</h2>
            <p className="text-lg text-blue-100">A look at our journey of excellence and growth over the years.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-600/50 transform md:-translate-x-1/2"></div>

              {/* Timeline Items */}
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Year Marker */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-blue-900 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 p-6 bg-blue-800/30 backdrop-blur-sm rounded-lg border border-blue-700/50">
                    <div className="text-2xl font-bold text-blue-300 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-blue-100">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-2 md:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Meet Our Experts</h2>
            <p className="text-lg text-slate-600">
              Our team of experienced professionals is dedicated to your academic success.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeIn} className="group">
                <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6">
                          <p className="text-white text-sm">{member.bio}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-white">
                      <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-2 md:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Start Your Research Journey?</h2>
            <p className="text-xl text-slate-600 mb-10">
              Join hundreds of successful scholars who have transformed their research with ThesisLogix.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-700 hover:bg-blue-800 text-white rounded-full px-8 py-6 text-base shadow-lg hover:shadow-blue-200/50 hover:shadow-xl transition-all"
              >
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-700 hover:bg-blue-50 rounded-full px-8 py-6 text-base"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
