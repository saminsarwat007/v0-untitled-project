"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CoolingTheoryPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-slate-600 hover:text-teal-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back to presentation</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-slate-800">Scientific Cooling Mechanisms</h1>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Detailed explanation of the three core cooling principles behind ChillGrid technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg"
        >
          <div className="relative w-full">
            <Image
              src="/images/cooling-mechanisms-sketch.jpeg"
              alt="Scientific Cooling Mechanisms Sketch"
              width={1200}
              height={800}
              className="w-full h-auto rounded-md"
            />
          </div>

          <div className="mt-8 text-slate-700">
            <h2 className="text-2xl font-semibold mb-4">The Science Behind ChillGrid</h2>
            <p className="mb-4">
              Our cooling technology combines three scientifically validated principles that work together to create an
              effective, energy-free cooling solution. Each mechanism has been proven through scientific research and
              real-world applications throughout history.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-semibold text-teal-700 mb-2">Evaporative Cooling</h3>
                <p className="text-sm">
                  The process of water evaporation naturally absorbs heat energy from the surrounding environment,
                  creating a cooling effect without mechanical intervention.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-semibold text-teal-700 mb-2">Passive Airflow</h3>
                <p className="text-sm">
                  Strategic design of air channels creates natural convection currents that move hot air through the
                  cooling system without fans or mechanical assistance.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-md">
                <h3 className="font-semibold text-teal-700 mb-2">Thermal Mass</h3>
                <p className="text-sm">
                  Clay's natural ability to absorb and slowly release heat helps moderate temperature fluctuations
                  throughout the day and night cycle.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
