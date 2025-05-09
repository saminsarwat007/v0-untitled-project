"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function WhyUseClay() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const benefits = [
    {
      title: "Thermal Mass",
      description: "Absorbs and releases heat slowly for consistent cooling",
    },
    {
      title: "Porous Structure",
      description: "Ideal material for evaporative cooling processes",
    },
    {
      title: "Sustainable Material",
      description: "Abundant, biodegradable, and environmentally friendly",
    },
    {
      title: "Moldable Design",
      description: "Can be shaped into various architectural designs",
    },
    {
      title: "Durability",
      description: "Lasts decades with minimal maintenance required",
    },
  ]

  return (
    <section id="why-clay" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cool-gray">Why We Use Clay</h2>
          <div className="w-20 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-lg text-cool-gray/80 max-w-2xl mx-auto">
            Terracotta is the perfect material for our sustainable cooling solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="bg-terracotta/10 p-2 rounded-full">
                  <div className="w-6 h-6 bg-terracotta rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-cool-gray">{benefit.title}</h3>
                  <p className="text-cool-gray/80">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/terracotta-cooling-wall.png"
              alt="Terracotta Clay Structure"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-terracotta/90 to-transparent p-6"
            >
              <h3 className="text-white text-xl font-semibold mb-2">Natural Cooling Technology</h3>
              <p className="text-white/90 text-sm">
                Terracotta has been used for cooling for thousands of years across different cultures
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
