"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, BarChart3, Percent, Building, ExternalLink } from "lucide-react"
import MarketBackground from "@/components/background-animations/market-bg"
import Image from "next/image"

export default function Slide8Market() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-amber-600" />,
      value: "$6.75B",
      label: "Global evaporative cooling market in 2024",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-amber-600" />,
      value: "5.11%",
      label: "CAGR (2024-2033)",
    },
    {
      icon: <Percent className="w-8 h-8 text-amber-600" />,
      value: "84%",
      label: "Potential energy demand reduction with passive cooling",
    },
    {
      icon: <Building className="w-8 h-8 text-amber-600" />,
      value: "4+",
      label: "Target building types (schools, mosques, govt halls, factories)",
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
      <MarketBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-800">Market Opportunity</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="mx-auto mb-4">{stat.icon}</div>
              <motion.h3
                initial={{ scale: 0.9 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-3xl font-bold mb-2 text-slate-800"
              >
                {stat.value}
              </motion.h3>
              <p className="text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-800">Growing Demand</h3>
              <p className="text-slate-600 mb-4">
                As global temperatures rise and energy costs increase, the demand for passive cooling solutions like
                ChillGrid is expected to grow significantly.
              </p>
              <p className="text-slate-600 mb-6">
                Our innovative approach addresses both environmental concerns and economic pressures facing institutions
                worldwide.
              </p>

              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-slate-800">Market Growth Drivers</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center text-white text-xs mt-1">
                      ✓
                    </div>
                    <span className="text-slate-600">Rising global temperatures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center text-white text-xs mt-1">
                      ✓
                    </div>
                    <span className="text-slate-600">Increasing energy costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center text-white text-xs mt-1">
                      ✓
                    </div>
                    <span className="text-slate-600">Focus on sustainable building solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center text-white text-xs mt-1">
                      ✓
                    </div>
                    <span className="text-slate-600">Government regulations on emissions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col items-center max-w-xs"
              >
                <div className="relative">
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-amber-100">
                    <div className="relative">
                      <Image
                        src="/images/market-validation-qr.png"
                        alt="Market data validation QR code"
                        width={200}
                        height={200}
                        className="mx-auto"
                      />
                      <motion.div
                        animate={{
                          y: [-60, 60],
                          opacity: [0.7, 0.9, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        }}
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-100/30 to-transparent"
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                  </div>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1"
                  >
                    <ExternalLink size={12} />
                    <span>Scan for sources</span>
                  </motion.div>
                </div>
                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="text-center mt-6 font-serif italic text-amber-800"
                >
                  "Verified Market Research"
                </motion.h4>
                <p className="text-center text-xs text-slate-500 mt-2">
                  Scan to access our complete market analysis and data sources
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
