"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Wind, Zap, Blocks, Puzzle, Droplets, Wrench } from "lucide-react"

export default function ProductFeatures() {
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
      title: "Energy-Free Operation",
      description: "Zero energy consumption for cooling",
    },
    {
      icon: <Blocks className="w-10 h-10" />,
      title: "Terracotta-Based Design",
      description: "Sustainable and aesthetically pleasing",
    },
    {
      icon: <Puzzle className="w-10 h-10" />,
      title: "Modular & Plug-and-Play",
      description: "Easy installation and expansion",
    },
    {
      icon: <Droplets className="w-10 h-10" />,
      title: "Built-in Water Flow",
      description: "Optimized water distribution system",
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Bi-Annual Maintenance",
      description: "Simple upkeep for long-term performance",
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
    <section id="features" ref={ref} className="py-20 bg-light-beige">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cool-gray">Product Features</h2>
          <div className="w-20 h-1 bg-forest-green mx-auto mb-6"></div>
          <p className="text-lg text-cool-gray/80 max-w-2xl mx-auto">
            ChillGrid combines innovative design with natural cooling principles.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-terracotta/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-terracotta">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cool-gray">{feature.title}</h3>
              <p className="text-cool-gray/80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
