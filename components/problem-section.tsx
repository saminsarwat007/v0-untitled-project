"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Thermometer, Building2, Zap, Wind } from "lucide-react"

export default function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const problems = [
    {
      icon: <Building2 className="w-12 h-12 text-terracotta" />,
      title: "Urban Heat Islands",
      description:
        "Cities can be up to 7°C hotter than surrounding areas due to concrete, asphalt, and lack of vegetation.",
    },
    {
      icon: <Zap className="w-12 h-12 text-terracotta" />,
      title: "High AC Energy Use",
      description: "Air conditioning accounts for 20% of global electricity consumption in buildings.",
    },
    {
      icon: <Wind className="w-12 h-12 text-terracotta" />,
      title: "Lack of Ventilation",
      description: "Poor air circulation in public buildings leads to discomfort and health issues.",
    },
    {
      icon: <Thermometer className="w-12 h-12 text-terracotta" />,
      title: "Rising Global Temperatures",
      description: "Global warming is increasing the frequency and intensity of heat waves worldwide.",
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="problem" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cool-gray">The Rising Heat Crisis</h2>
          <div className="w-20 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-lg text-cool-gray/80 max-w-2xl mx-auto">
            As global temperatures rise, the need for sustainable cooling solutions becomes increasingly critical.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-light-beige p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-cool-gray">{problem.title}</h3>
              <p className="text-cool-gray/80">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
