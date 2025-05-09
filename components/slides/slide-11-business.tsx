"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { DollarSign, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import BusinessBackground from "@/components/background-animations/business-bg"
import Link from "next/link"

export default function Slide12Business() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-screen flex items-center justify-center bg-slate-50 overflow-hidden relative"
      ref={ref}
    >
      <BusinessBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-800">Business Model</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A simple, transparent pricing model for sustainable cooling.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center mb-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Two Simple Ways to Earn</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <div className="bg-amber-600/10 p-4 rounded-full text-amber-600 mb-4">
                  <DollarSign className="w-12 h-12" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">One-Time Installation</h4>
                <div className="text-3xl font-bold text-amber-600 my-4">Starting from 499 RM</div>
                <p className="text-slate-600 text-center">
                  Custom design and professional installation of your ChillGrid system.
                </p>
                <div className="mt-4 text-sm text-slate-500">*Final price depends on design complexity and size</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="bg-teal-600/10 p-4 rounded-full text-teal-600 mb-4">
                  <Wrench className="w-12 h-12" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Annual Maintenance</h4>
                <div className="text-3xl font-bold text-teal-600 my-4">250 RM / Year</div>
                <p className="text-slate-600 text-center">
                  Regular maintenance to ensure optimal performance and longevity.
                </p>
                <div className="mt-4 text-sm text-slate-500">
                  *Includes bi-annual service visits and system inspection
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link href="/sample-designs">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-6 text-lg">
                Request Your Design
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
