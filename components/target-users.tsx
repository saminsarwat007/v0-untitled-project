"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Landmark, Building, Factory } from "lucide-react"

export default function TargetUsers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const users = [
    {
      icon: <GraduationCap className="w-12 h-12 text-white" />,
      title: "Educational Institutions",
      description: "Schools, colleges, and universities seeking sustainable cooling for classrooms and common areas.",
      color: "bg-forest-green",
    },
    {
      icon: <Landmark className="w-12 h-12 text-white" />,
      title: "Religious Centers",
      description: "Mosques, temples, and other religious buildings that need comfortable environments for gatherings.",
      color: "bg-terracotta",
    },
    {
      icon: <Building className="w-12 h-12 text-white" />,
      title: "Government Buildings",
      description: "Public halls, administrative offices, and NGO facilities looking to reduce energy costs.",
      color: "bg-forest-green",
    },
    {
      icon: <Factory className="w-12 h-12 text-white" />,
      title: "High-Heat Industries",
      description: "Factories, warehouses, and industrial spaces that generate excess heat during operations.",
      color: "bg-terracotta",
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
    <section id="target-users" ref={ref} className="py-20 bg-light-beige">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cool-gray">Target Users</h2>
          <div className="w-20 h-1 bg-forest-green mx-auto mb-6"></div>
          <p className="text-lg text-cool-gray/80 max-w-2xl mx-auto">
            ChillGrid is designed for institutions and spaces that need efficient, sustainable cooling.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {users.map((user, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
            >
              <div className={`${user.color} p-6 flex items-center justify-center md:w-1/3`}>
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">{user.icon}</div>
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-semibold mb-3 text-cool-gray">{user.title}</h3>
                <p className="text-cool-gray/80">{user.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-cool-gray/80 max-w-2xl mx-auto">
            Our modular design allows ChillGrid to be customized for various building types and cooling needs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
