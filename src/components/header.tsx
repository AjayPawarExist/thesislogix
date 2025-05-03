"use client"

import Link from "next/link"
import { FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"
import { IoMail } from "react-icons/io5"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { siteConfig } from "@/config/site"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const researchServices = [
    { name: "Topic Making Service", href: "/topicmakings" },
    { name: "Thesis Writing", href: "/thesiswriting" },
    { name: "Thesis Analysis", href: "/thesisanalysis" },
    { name: "Synopsis/Research Outline", href: "/synopsis" },
    { name: "Questionnaire", href: "/question" },
    { name: "Paper Publication", href: "/publication" },
  ]

  const additionalServices = [
    { name: "Pattern Service", href: "/pattern" },
    { name: "Implementation Service", href: "/implementation" },
    { name: "Book Publishing", href: "/book" },
    { name: "AI Content Rewriting", href: "/rewriting" },
    { name: "Plagiarism Service", href: "/plagiarism" },
  ]

  return (
    <header className="w-full">
      {/* Top contact bar */}
      <div className="hidden md:flex justify-between items-center text-white h-10 bg-gradient-to-r from-blue-950 to-blue-800 w-full px-4 md:px-8">
        <div className="flex gap-6">
          <Link
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-2 text-sm hover:text-blue-200 transition-colors"
          >
            <FaPhoneAlt size={12} />
            <span>{siteConfig.contact.phone}</span>
          </Link>
          <Link
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-2 text-sm hover:text-blue-200 transition-colors"
          >
            <IoMail size={14} />
            <span>{siteConfig.contact.email}</span>
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <Link
            href={siteConfig.links.facebook}
            className="hover:text-blue-200 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook size={14} />
          </Link>
          <Link href={siteConfig.links.twitter} className="hover:text-blue-200 transition-colors" aria-label="Twitter">
            <FaTwitter size={14} />
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            className="hover:text-blue-200 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={14} />
          </Link>
          <Link
            href={siteConfig.links.instagram}
            className="hover:text-blue-200 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={14} />
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-10">
              <Image
                src="/placeholder.svg?key=thesislogix-logo"
                width={160}
                height={40}
                alt="ThesisLogix Logo"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation with shadcn NavigationMenu */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href="/">Home</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href="/about">About Us</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Sheet>
                      <SheetTrigger asChild>
                        <button className={navigationMenuTriggerStyle()}>Services</button>
                      </SheetTrigger>
                      <SheetContent className="w-[350px] sm:w-[450px] overflow-y-auto">
                        <SheetHeader className="mb-6">
                          <SheetTitle className="text-blue-700">Our Services</SheetTitle>
                          <SheetDescription>Explore our comprehensive range of academic services</SheetDescription>
                        </SheetHeader>

                        <div className="space-y-4">
                          <div>
                            <h3 className="mb-3 text-sm font-medium text-blue-600 border-b pb-2">RESEARCH SERVICES</h3>
                            <ul className="space-y-3 mt-4">
                              {researchServices.map((service, index) => (
                                <li key={index}>
                                  <SheetClose asChild>
                                    <Link
                                      href={service.href}
                                      className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors p-2 rounded-md hover:bg-blue-50"
                                    >
                                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                      <span>{service.name}</span>
                                    </Link>
                                  </SheetClose>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="mb-3 text-sm font-medium text-blue-600 border-b pb-2">
                              ADDITIONAL SERVICES
                            </h3>
                            <ul className="space-y-3 mt-4">
                              {additionalServices.map((service, index) => (
                                <li key={index}>
                                  <SheetClose asChild>
                                    <Link
                                      href={service.href}
                                      className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors p-2 rounded-md hover:bg-blue-50"
                                    >
                                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                      <span>{service.name}</span>
                                    </Link>
                                  </SheetClose>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="hidden md:block">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full px-6">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden z-10"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-white z-40 pt-20 pb-6 px-4 overflow-y-auto"
            >
              <nav className="flex flex-col space-y-6">
                <Link
                  href="/"
                  className="text-xl font-medium text-slate-900 border-b border-slate-100 pb-2"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-xl font-medium text-slate-900 border-b border-slate-100 pb-2"
                  onClick={closeMenu}
                >
                  About Us
                </Link>

                <div className="border-b border-slate-100 pb-2">
                  <Sheet>
                    <SheetTrigger asChild>
                      <button className="w-full text-left text-xl font-medium text-slate-900 py-2 flex justify-between items-center">
                        Services
                        <span className="text-slate-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-right"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </span>
                      </button>
                    </SheetTrigger>
                    <SheetContent className="w-[85vw] sm:w-[450px] overflow-y-auto">
                      <SheetHeader className="mb-6">
                        <SheetTitle className="text-blue-700">Our Services</SheetTitle>
                        <SheetDescription>Explore our comprehensive range of academic services</SheetDescription>
                      </SheetHeader>

                      <div className="space-y-8">
                        <div>
                          <h3 className="mb-3 text-sm font-medium text-blue-600 border-b pb-2">RESEARCH SERVICES</h3>
                          <ul className="space-y-3 mt-4">
                            {researchServices.map((service, index) => (
                              <li key={index}>
                                <SheetClose asChild>
                                  <Link
                                    href={service.href}
                                    className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors p-2 rounded-md hover:bg-blue-50"
                                    onClick={closeMenu}
                                  >
                                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                    <span>{service.name}</span>
                                  </Link>
                                </SheetClose>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="mb-3 text-sm font-medium text-blue-600 border-b pb-2">ADDITIONAL SERVICES</h3>
                          <ul className="space-y-3 mt-4">
                            {additionalServices.map((service, index) => (
                              <li key={index}>
                                <SheetClose asChild>
                                  <Link
                                    href={service.href}
                                    className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors p-2 rounded-md hover:bg-blue-50"
                                    onClick={closeMenu}
                                  >
                                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                    <span>{service.name}</span>
                                  </Link>
                                </SheetClose>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>

                <div className="pt-4">
                  <Link href="/contact" onClick={closeMenu}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full py-6">
                      Contact Us
                    </Button>
                  </Link>
                </div>

                <div className="pt-6 flex flex-col space-y-4">
                  <Link
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-2 text-slate-700"
                    onClick={closeMenu}
                  >
                    <FaPhoneAlt size={16} className="text-blue-600" />
                    <span>{siteConfig.contact.phone}</span>
                  </Link>
                  <Link
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-2 text-slate-700"
                    onClick={closeMenu}
                  >
                    <IoMail size={18} className="text-blue-600" />
                    <span>{siteConfig.contact.email}</span>
                  </Link>
                </div>

                <div className="pt-4 flex justify-center gap-8">
                  <Link
                    href={siteConfig.links.facebook}
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={20} />
                  </Link>
                  <Link
                    href={siteConfig.links.twitter}
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={20} />
                  </Link>
                  <Link
                    href={siteConfig.links.linkedin}
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </Link>
                  <Link
                    href={siteConfig.links.instagram}
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} />
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
