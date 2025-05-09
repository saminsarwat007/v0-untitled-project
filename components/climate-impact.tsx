"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Fuel, TrendingDown, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ClimateImpact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [showMore, setShowMore] = useState(false)

  const impacts = [
    {
      icon: <Fuel className="w-10 h-10 text-forest-green" />,
      title: "Energy Reduction",
      value: "25-30%",
      description: "Reduction in cooling-related energy use",
    },
    {
      icon: <TrendingDown className="w-10 h-10 text-forest-green" />,
      title: "CO₂ Savings",
      value: "1.5-2 tons",
      description: "CO₂ saved per building annually",
    },
    {
      icon: <Building2 className="w-10 h-10 text-forest-green" />,
      title: "Urban Temperature",
      value: "Up to 12%",
      description: "Urban temperature reduction in mass deployment",
    },
  ]

  return (
    <section id="impact" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cool-gray">Climate Impact</h2>
          <div className="w-20 h-1 bg-forest-green mx-auto mb-6"></div>
          <p className="text-lg text-cool-gray/80 max-w-2xl mx-auto">
            ChillGrid makes a significant positive impact on the environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-light-beige p-6 rounded-lg shadow-md text-center"
            >
              <div className="mx-auto mb-4">{impact.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-cool-gray">{impact.title}</h3>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-3xl font-bold mb-2 text-forest-green"
              >
                {impact.value}
              </motion.div>
              <p className="text-cool-gray/80">{impact.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-forest-green/10 p-8 rounded-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cool-gray">Environmental Benefits</h3>
              <p className="text-cool-gray/80 mb-4">
                By reducing the need for conventional air conditioning, ChillGrid helps decrease carbon emissions and
                combat climate change.
              </p>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: showMore ? "auto" : 0,
                  opacity: showMore ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden text-cool-gray/80 mb-4"
              >
                <p className="mb-4">
                  Our passive cooling technology also reduces the urban heat island effect, making cities more livable
                  and reducing the strain on power grids during peak summer months.
                </p>
                <p>
                  Additionally, ChillGrid's use of natural materials and processes eliminates the need for harmful
                  refrigerants that contribute to ozone depletion.
                </p>
              </motion.div>
              <Button
                variant="outline"
                className="text-forest-green border-forest-green hover:bg-forest-green/10"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show Less" : "Learn More"}
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-cool-gray">Long-term Impact</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={isInView ? { width: "75%" } : { width: "0%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="bg-forest-green h-4 rounded-full"
                    ></motion.div>
                  </div>
                  <span className="text-cool-gray font-medium whitespace-nowrap">75% Less Energy</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={isInView ? { width: "60%" } : { width: "0%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="bg-forest-green h-4 rounded-full"
                    ></motion.div>
                  </div>
                  <span className="text-cool-gray font-medium whitespace-nowrap">60% CO₂ Reduction</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={isInView ? { width: "90%" } : { width: "0%" }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="bg-forest-green h-4 rounded-full"
                    ></motion.div>
                  </div>
                  <span className="text-cool-gray font-medium whitespace-nowrap">90% Sustainable Materials</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
