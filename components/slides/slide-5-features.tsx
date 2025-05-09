"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Wind, Zap, Blocks, Droplets } from "lucide-react"
import FeaturesBackground from "@/components/background-animations/features-bg"

export default function Slide5Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const features = [
    {
      icon: <Wind className="w-10 h-10" />,
      title: "Natural Air Conditioning",
      description: "Cools without electricity or refrigerants",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Close to 0 Energy Consumption",
      description: "Minimal energy requirements for cooling",
    },
    {
      icon: <Blocks className="w-10 h-10" />,
      title: "Terracotta-Based Design",
      description: "Sustainable and aesthetically pleasing",
    },
    {
      icon: <Droplets className="w-10 h-10" />,
      title: "Built-in Water Flow",
      description: "Optimized water distribution system",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      <FeaturesBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-800">Product Features</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            ChillGrid combines innovative design with natural cooling principles.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-amber-600/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-amber-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
