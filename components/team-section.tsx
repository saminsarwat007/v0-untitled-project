"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Linkedin, Mail, Twitter } from "lucide-react"

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const team = [
    {
      name: "Alex Rivera",
      role: "Founder & Eco Innovator",
      image: "/diverse-founder-headshot.png",
      bio: "Passionate about sustainable solutions with 10+ years in green technology.",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Lead Engineer - Clay & Fluid Dynamics",
      image: "/female-engineer-headshot.png",
      bio: "PhD in Material Science with expertise in thermal properties of natural materials.",
    },
    {
      name: "Marcus Chen",
      role: "Operations - Field Team Lead",
      image: "/operations-manager-headshot.png",
      bio: "Oversees installation and maintenance with a background in construction management.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="team" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cool-gray">Meet the Team</h2>
          <div className="w-20 h-1 bg-forest-green mx-auto mb-6"></div>
          <p className="text-lg text-cool-gray/80 max-w-2xl mx-auto">
            The passionate experts behind ChillGrid's innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-light-beige rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center gap-4">
                  <motion.a whileHover={{ y: -3 }} className="bg-white/20 p-2 rounded-full backdrop-blur-sm" href="#">
                    <Linkedin className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a whileHover={{ y: -3 }} className="bg-white/20 p-2 rounded-full backdrop-blur-sm" href="#">
                    <Twitter className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a whileHover={{ y: -3 }} className="bg-white/20 p-2 rounded-full backdrop-blur-sm" href="#">
                    <Mail className="w-5 h-5 text-white" />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-cool-gray">{member.name}</h3>
                <p className="text-forest-green font-medium mb-3">{member.role}</p>
                <p className="text-cool-gray/80">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
