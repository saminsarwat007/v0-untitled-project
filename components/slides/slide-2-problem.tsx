"use client"

import { motion } from "framer-motion"
import { Thermometer, Building2, Zap, Wind } from "lucide-react"
import ProblemBackground from "@/components/background-animations/problem-bg"

export default function Slide2Problem() {
  const problems = [
    {
      icon: <Building2 className="w-12 h-12 text-amber-600" />,
      title: "Urban Heat Islands",
      description:
        "Cities can be up to 7°C hotter than surrounding areas due to concrete, asphalt, and lack of vegetation.",
    },
    {
      icon: <Zap className="w-12 h-12 text-amber-600" />,
      title: "High AC Energy Use",
      description: "Air conditioning accounts for 20% of global electricity consumption in buildings.",
    },
    {
      icon: <Wind className="w-12 h-12 text-amber-600" />,
      title: "Lack of Ventilation",
      description: "Poor air circulation in public buildings leads to discomfort and health issues.",
    },
    {
      icon: <Thermometer className="w-12 h-12 text-amber-600" />,
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-screen flex items-center justify-center bg-slate-50 overflow-hidden relative"
    >
      <div className="absolute inset-0 z-0">
        <ProblemBackground />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-800">The Rising Heat Crisis</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            As global temperatures rise, the need for sustainable cooling solutions becomes increasingly critical.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">{problem.title}</h3>
              <p className="text-slate-600">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
