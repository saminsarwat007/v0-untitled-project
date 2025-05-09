"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Landmark, Building, Factory } from "lucide-react"
import TargetUsersBackground from "@/components/background-animations/target-users-bg"

export default function Slide9TargetUsers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const users = [
    {
      icon: <GraduationCap className="w-12 h-12 text-white" />,
      title: "Educational Institutions",
      description: "Schools, colleges, and universities seeking sustainable cooling for classrooms and common areas.",
      color: "bg-teal-600",
    },
    {
      icon: <Landmark className="w-12 h-12 text-white" />,
      title: "Religious Centers",
      description: "Mosques, temples, and other religious buildings that need comfortable environments for gatherings.",
      color: "bg-amber-600",
    },
    {
      icon: <Building className="w-12 h-12 text-white" />,
      title: "Government Buildings",
      description: "Public halls, administrative offices, and NGO facilities looking to reduce energy costs.",
      color: "bg-teal-600",
    },
    {
      icon: <Factory className="w-12 h-12 text-white" />,
      title: "High-Heat Industries",
      description: "Factories, warehouses, and industrial spaces that generate excess heat during operations.",
      color: "bg-amber-600",
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-screen flex items-center justify-center bg-slate-50 overflow-hidden relative"
      ref={ref}
    >
      <TargetUsersBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-800">Target Users</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
                <h3 className="text-xl font-semibold mb-3 text-slate-800">{user.title}</h3>
                <p className="text-slate-600">{user.description}</p>
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
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our modular design allows ChillGrid to be customized for various building types and cooling needs.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
