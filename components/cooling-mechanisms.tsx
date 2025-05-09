"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Droplets, Wind, Thermometer, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function CoolingMechanisms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const mechanisms = [
    {
      icon: <Droplets className="w-10 h-10 text-white" />,
      title: "Evaporative Cooling via Wet Clay Surfaces",
      description:
        "Water released onto porous terracotta surfaces evaporates, drawing heat from surrounding air and lowering temperature.",
      validation:
        "Each kilogram of water vaporized absorbs 2260 kJ of heat, making water an excellent medium for heat absorption.",
      example:
        "Studies show ceramic evaporative cooling can reduce ambient temperatures by 4.5°C–7.5°C in arid environments.",
      color: "bg-terracotta",
    },
    {
      icon: <Wind className="w-10 h-10 text-white" />,
      title: "Passive Airflow via Convergence and Divergence",
      description:
        "Hot air enters through narrow vents, slows down for enhanced cooling, then rises and spreads through upper openings.",
      validation:
        "Bernoulli's Principle and the Coanda Effect guide airflow, enhancing temperature regulation and circulation.",
      example:
        "Ancient Persian Windcatchers used similar principles, proven to improve efficiency of passive cooling systems.",
      color: "bg-forest-green",
    },
    {
      icon: <Thermometer className="w-10 h-10 text-white" />,
      title: "High Thermal Mass of Clay for Heat Absorption",
      description:
        "Clay absorbs and stores heat during the day, slowly releasing it at night to prevent temperature fluctuations.",
      validation:
        "Clay's high specific heat capacity (0.84 J/g°C) moderates temperature changes and reduces active cooling needs.",
      example: "Research shows terracotta walls reduce heat gain by 15%–20% compared to concrete or glass walls.",
      color: "bg-cool-gray",
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
    <section id="cooling-mechanisms" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cool-gray">Scientific Cooling Mechanisms</h2>
          <div className="w-20 h-1 bg-forest-green mx-auto mb-6"></div>
          <p className="text-lg text-cool-gray/80 max-w-3xl mx-auto">
            ChillGrid combines three scientifically validated cooling methods to create an effective, energy-free
            cooling solution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {mechanisms.map((mechanism, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-light-beige rounded-lg shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className={`${mechanism.color} p-6 flex items-center justify-center lg:col-span-1`}>
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                    {mechanism.icon}
                  </div>
                </div>
                <div className="p-6 lg:col-span-3">
                  <div className="flex items-center mb-3">
                    <CheckCircle2 className="w-5 h-5 text-forest-green mr-2" />
                    <h3 className="text-xl font-semibold text-cool-gray">{mechanism.title}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-cool-gray mb-2">How It Works</h4>
                      <p className="text-cool-gray/80 text-sm">{mechanism.description}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-cool-gray mb-2">Scientific Validation</h4>
                      <p className="text-cool-gray/80 text-sm">{mechanism.validation}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-cool-gray mb-2">Real-World Example</h4>
                      <p className="text-cool-gray/80 text-sm">{mechanism.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-forest-green/10 p-8 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cool-gray">Enhanced Air Circulation</h3>
              <p className="text-cool-gray/80 mb-4">
                The combination of convergence and divergence principles creates an optimal flow pattern:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-forest-green flex items-center justify-center text-white text-xs mt-1">
                    1
                  </div>
                  <span className="text-cool-gray/80">
                    <strong>Convergence:</strong> Hot air funnels into narrow openings, slowing down as it contacts wet
                    clay
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-forest-green flex items-center justify-center text-white text-xs mt-1">
                    2
                  </div>
                  <span className="text-cool-gray/80">
                    <strong>Cooling:</strong> Evaporation absorbs heat energy from the air
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-forest-green flex items-center justify-center text-white text-xs mt-1">
                    3
                  </div>
                  <span className="text-cool-gray/80">
                    <strong>Divergence:</strong> Cooled air rises and spreads out, creating continuous circulation
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="relative h-64 overflow-hidden rounded-md">
                <Image
                  src="/airflow-diagram.png"
                  alt="Airflow Diagram showing convergence and divergence"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-cool-gray/70 text-sm mt-2">
                Visualization of airflow patterns in the ChillGrid system
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
