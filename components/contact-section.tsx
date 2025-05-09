"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)
    alert("Thanks for your message! We'll be in touch soon.")
    setFormState({
      name: "",
      email: "",
      organization: "",
      message: "",
    })
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-light-beige">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cool-gray">Get in Touch</h2>
          <div className="w-20 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-lg text-cool-gray/80 max-w-2xl mx-auto">
            Interested in ChillGrid for your building? Contact us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-cool-gray">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-terracotta/10 p-3 rounded-full text-terracotta">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-cool-gray">Our Location</h4>
                  <p className="text-cool-gray/80">
                    123 Eco Innovation Park
                    <br />
                    Sustainable City, SC 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-terracotta/10 p-3 rounded-full text-terracotta">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-cool-gray">Email Us</h4>
                  <p className="text-cool-gray/80">
                    info@chillgrid.com
                    <br />
                    support@chillgrid.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-terracotta/10 p-3 rounded-full text-terracotta">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-cool-gray">Call Us</h4>
                  <p className="text-cool-gray/80">
                    +1 (555) 123-4567
                    <br />
                    Mon-Fri, 9am-5pm
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <motion.a whileHover={{ y: -3 }} className="bg-terracotta text-white p-3 rounded-full" href="#">
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} className="bg-terracotta text-white p-3 rounded-full" href="#">
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} className="bg-terracotta text-white p-3 rounded-full" href="#">
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-cool-gray">Send a Message</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cool-gray mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cool-gray mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-cool-gray mb-1">
                    Organization
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formState.organization}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cool-gray mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px]"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="bg-terracotta hover:bg-terracotta/90 text-white">
                    Request Quote
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-terracotta text-terracotta hover:bg-terracotta/10"
                  >
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
