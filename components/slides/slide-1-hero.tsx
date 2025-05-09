"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import HeroBackground from "@/components/background-animations/hero-bg"

export default function Slide1Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <HeroBackground />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-block bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
            Sustainable Cooling Solution
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent"
        >
          ChillGrid
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-2xl md:text-3xl text-slate-700 max-w-3xl mx-auto mb-10"
        >
          Natural Cooling Reinvented
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10"
        >
          Transforming hot air into cool breezes — energy-free, aesthetic, and sustainable.
        </motion.p>

        <div className="h-16"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <ArrowDown className="text-slate-400" size={30} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
