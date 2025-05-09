"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { DollarSign, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BusinessModel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section id="business-model" ref={ref} className="py-20 bg-light-beige">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cool-gray">Business Model</h2>
          <div className="w-20 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-lg text-cool-gray/80 max-w-2xl mx-auto">
            A simple, transparent pricing model for sustainable cooling.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-terracotta/10 p-3 rounded-full text-terracotta">
                  <DollarSign className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-cool-gray">One-Time Installation</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-cool-gray">Standard Panel (5x5 ft)</span>
                  <span className="font-semibold text-terracotta">$250-$300</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-cool-gray">Installation (per panel)</span>
                  <span className="font-semibold text-terracotta">$50-$75</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cool-gray">Design Consultation</span>
                  <span className="font-semibold text-terracotta">Free</span>
                </div>
              </div>

              <p className="text-cool-gray/80 text-sm">
                Includes professional installation and setup of your ChillGrid system.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-forest-green/10 p-3 rounded-full text-forest-green">
                  <Wrench className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-cool-gray">Bi-Annual Maintenance</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-cool-gray">Service Visit (every 6 months)</span>
                  <span className="font-semibold text-forest-green">$100-$150</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-cool-gray">Replacement Unit (if needed)</span>
                  <span className="font-semibold text-forest-green">$75-$100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cool-gray">System Inspection</span>
                  <span className="font-semibold text-forest-green">Included</span>
                </div>
              </div>

              <p className="text-cool-gray/80 text-sm">
                Regular maintenance ensures optimal performance and extends the lifespan of your ChillGrid system.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-semibold mb-4 text-cool-gray">Get Your Custom Design</h3>
            <p className="text-cool-gray/80 max-w-2xl mx-auto mb-6">
              Our team will work with you to design a ChillGrid solution tailored to your specific needs and space
              requirements.
            </p>
            <Button className="bg-terracotta hover:bg-terracotta/90 text-white px-6 py-6 text-lg">
              Request Your Design
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
