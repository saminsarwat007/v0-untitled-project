"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Fuel, TrendingDown, Building2, ExternalLink, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import ClimateBackground from "@/components/background-animations/climate-bg"

export default function Slide10Climate() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [showMore, setShowMore] = useState(false)

  const impacts = [
    {
      icon: <Fuel className="w-10 h-10 text-teal-600" />,
      title: "Energy Reduction",
      value: "25-30%",
      description: "Reduction in cooling-related energy use",
    },
    {
      icon: <TrendingDown className="w-10 h-10 text-teal-600" />,
      title: "CO₂ Savings",
      value: "1.5-2 tons",
      description: "CO₂ saved per building annually",
    },
    {
      icon: <Building2 className="w-10 h-10 text-teal-600" />,
      title: "Urban Temperature",
      value: "Up to 12%",
      description: "Urban temperature reduction in mass deployment",
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
      <ClimateBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-800">Climate Impact</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="mx-auto mb-4">{impact.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">{impact.title}</h3>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-3xl font-bold mb-2 text-teal-600"
              >
                {impact.value}
              </motion.div>
              <p className="text-slate-600">{impact.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-800">Environmental Benefits</h3>
              <p className="text-slate-600 mb-4">
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
                className="overflow-hidden text-slate-600 mb-4"
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
                className="text-teal-600 border-teal-600 hover:bg-teal-600/10"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show Less" : "Learn More"}
              </Button>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="mt-6 bg-teal-50 p-4 rounded-lg border border-teal-100 flex items-start gap-3"
              >
                <div className="mt-1 flex-shrink-0">
                  <Info className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-700 mb-2">
                    <span className="font-semibold">Research Validation:</span> According to the International Institute
                    of Refrigeration (IIR), passive cooling can reduce energy demand in the ASEAN residential sector by
                    35% to 70%.
                  </p>
                  <a
                    href="https://iifiir.org/en/news/passive-cooling-can-reduce-energy-demand-in-the-asean-residential-sector-by-35-to-70"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs flex items-center gap-1 text-teal-600 hover:text-teal-800 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>View research source</span>
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-slate-800">Long-term Impact</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={isInView ? { width: "75%" } : { width: "0%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="bg-teal-600 h-4 rounded-full"
                    ></motion.div>
                  </div>
                  <span className="text-slate-700 font-medium whitespace-nowrap">75% Less Energy</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={isInView ? { width: "60%" } : { width: "0%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="bg-teal-600 h-4 rounded-full"
                    ></motion.div>
                  </div>
                  <span className="text-slate-700 font-medium whitespace-nowrap">60% CO₂ Reduction</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={isInView ? { width: "90%" } : { width: "0%" }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="bg-teal-600 h-4 rounded-full"
                    ></motion.div>
                  </div>
                  <span className="text-slate-700 font-medium whitespace-nowrap">90% Sustainable Materials</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-8 pt-6 border-t border-slate-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <h5 className="text-sm font-semibold text-slate-700">ASEAN Energy Reduction Potential</h5>
                  <span className="text-teal-600 font-bold">35-70%</span>
                </div>
                <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: "35%" } : { width: "0%" }}
                    transition={{ duration: 1, delay: 1.1 }}
                    className="absolute left-0 top-0 bottom-0 bg-teal-300 rounded-l-full"
                  ></motion.div>
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: "35%" } : { width: "0%" }}
                    transition={{ duration: 1, delay: 1.3 }}
                    className="absolute left-[35%] top-0 bottom-0 bg-teal-600 rounded-r-full"
                  ></motion.div>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-slate-700">
                    Based on IIR Research
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
