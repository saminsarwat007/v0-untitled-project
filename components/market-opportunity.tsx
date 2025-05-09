"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, BarChart3, Percent, Building } from "lucide-react"

export default function MarketOpportunity() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-terracotta" />,
      value: "$6.75B",
      label: "Global evaporative cooling market in 2024",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-terracotta" />,
      value: "5.11%",
      label: "CAGR (2024-2033)",
    },
    {
      icon: <Percent className="w-8 h-8 text-terracotta" />,
      value: "84%",
      label: "Potential energy demand reduction with passive cooling",
    },
    {
      icon: <Building className="w-8 h-8 text-terracotta" />,
      value: "4+",
      label: "Target building types (schools, mosques, govt halls, factories)",
    },
  ]

  return (
    <section id="market" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cool-gray">Market Opportunity</h2>
          <div className="w-20 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-lg text-cool-gray/80 max-w-2xl mx-auto">
            The demand for sustainable cooling solutions is growing rapidly worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-light-beige p-6 rounded-lg shadow-md text-center"
            >
              <div className="mx-auto mb-4">{stat.icon}</div>
              <motion.h3
                initial={{ scale: 0.9 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-3xl font-bold mb-2 text-cool-gray"
              >
                {stat.value}
              </motion.h3>
              <p className="text-cool-gray/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-terracotta/10 p-8 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cool-gray">Growing Demand</h3>
              <p className="text-cool-gray/80 mb-4">
                As global temperatures rise and energy costs increase, the demand for passive cooling solutions like
                ChillGrid is expected to grow significantly.
              </p>
              <p className="text-cool-gray/80">
                Our innovative approach addresses both environmental concerns and economic pressures facing institutions
                worldwide.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-cool-gray">Market Growth Drivers</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-terracotta flex items-center justify-center text-white text-xs mt-1">
                    ✓
                  </div>
                  <span className="text-cool-gray/80">Rising global temperatures</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-terracotta flex items-center justify-center text-white text-xs mt-1">
                    ✓
                  </div>
                  <span className="text-cool-gray/80">Increasing energy costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-terracotta flex items-center justify-center text-white text-xs mt-1">
                    ✓
                  </div>
                  <span className="text-cool-gray/80">Focus on sustainable building solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-terracotta flex items-center justify-center text-white text-xs mt-1">
                    ✓
                  </div>
                  <span className="text-cool-gray/80">Government regulations on emissions</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
