"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Droplets, Wind, Thermometer } from "lucide-react"
import SolutionBackground from "@/components/background-animations/solution-bg"

export default function Slide3Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const features = [
    {
      icon: <Droplets className="w-10 h-10 text-teal-600" />,
      title: "Evaporative Cooling",
      description: "Natural cooling from clay + water interaction",
    },
    {
      icon: <Wind className="w-10 h-10 text-teal-600" />,
      title: "Dynamic Airflow",
      description: "Engineered modular holes for optimal air circulation",
    },
    {
      icon: <Thermometer className="w-10 h-10 text-teal-600" />,
      title: "Temperature Reduction",
      description: "Reduces ambient air by 12.5% on average",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-screen flex items-center justify-center bg-slate-50 overflow-hidden relative"
      ref={ref}
    >
      <div className="absolute inset-0 z-0">
        <SolutionBackground />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-800">Our Cooling Innovation</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            ChillGrid harnesses the power of natural evaporative cooling through innovative design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="bg-white p-3 rounded-full shadow-md">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6 text-center text-slate-800">Temperature Reduction Example</h3>

            <div className="flex justify-center items-center gap-8">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center"
              >
                <div className="relative w-6 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden mb-2">
                  <motion.div
                    initial={{ height: "0%" }}
                    animate={isInView ? { height: "80%" } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute bottom-0 w-full bg-red-500 rounded-full"
                  ></motion.div>
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    <div className="w-2 h-20 bg-white/30 rounded-full"></div>
                  </div>
                </div>
                <p className="font-bold text-red-500 text-2xl">40°C</p>
                <p className="text-slate-600">Without ChillGrid</p>
              </motion.div>

              <motion.div
                animate={isInView ? { x: [0, 10, -10, 10, 0] } : {}}
                transition={{ duration: 1, delay: 1.2 }}
                className="text-4xl"
              >
                <span className="text-slate-400">→</span>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center"
              >
                <div className="relative w-6 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden mb-2">
                  <motion.div
                    initial={{ height: "0%" }}
                    animate={isInView ? { height: "60%" } : {}}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-0 w-full bg-blue-500 rounded-full"
                  ></motion.div>
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    <div className="w-2 h-20 bg-white/30 rounded-full"></div>
                  </div>
                </div>
                <p className="font-bold text-blue-500 text-2xl">35°C</p>
                <p className="text-slate-600">With ChillGrid</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="mt-8 text-center"
            >
              <p className="text-teal-600 font-semibold">12.5% Temperature Reduction</p>
              <p className="text-slate-500 text-sm mt-1">Results may vary based on climate conditions</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
