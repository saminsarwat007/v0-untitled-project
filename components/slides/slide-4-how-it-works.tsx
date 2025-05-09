"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight } from "lucide-react"
import HowItWorksBackground from "@/components/background-animations/how-it-works-bg"

export default function Slide4HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-screen flex items-center justify-center bg-slate-50 overflow-hidden relative"
      ref={ref}
    >
      <div className="absolute inset-0 z-0">
        <HowItWorksBackground />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-800">How ChillGrid Works</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our innovative cooling system uses natural principles to reduce temperatures without electricity.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Improved Animation Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 md:p-10 relative">
              <div className="grid grid-cols-3 gap-4 md:gap-8 relative">
                {/* Left Section - Hot Air Intake */}
                <div className="col-span-1 bg-slate-50 rounded-lg p-4 text-center flex flex-col items-center justify-center">
                  <h3 className="text-lg md:text-xl font-semibold text-amber-600 mb-2">Hot Air</h3>
                  <div className="text-2xl md:text-4xl font-bold text-amber-600">40°C</div>

                  {/* Hot Air Animation - Moving TOWARD the wall */}
                  <div className="relative h-32 w-full mt-4">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={`hot-${i}`}
                        className="absolute left-0 w-full"
                        style={{ top: `${i * 30 + 10}%` }}
                        animate={{
                          x: ["0%", "100%"],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.3,
                          ease: "linear",
                        }}
                      >
                        <div className="flex items-center">
                          <div className="h-2 bg-gradient-to-r from-transparent to-amber-500 rounded-full flex-grow"></div>
                          <ArrowRight className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Middle Section - Clay Grid */}
                <div className="col-span-1 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="w-full h-full max-w-[180px] max-h-[280px] mx-auto"
                    >
                      {/* Clay Grid Structure */}
                      <div className="relative w-full h-full bg-amber-600/90 rounded-md overflow-hidden">
                        {/* Grid Pattern with Visible Holes */}
                        <div className="absolute inset-0 grid grid-cols-3 grid-rows-4 gap-2 p-2">
                          {[...Array(12)].map((_, i) => (
                            <motion.div
                              key={`hole-${i}`}
                              className="bg-black/30 rounded-full relative overflow-hidden"
                              initial={{ opacity: 0 }}
                              animate={isInView ? { opacity: 1 } : {}}
                              transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                            >
                              {/* Hot air entering through holes */}
                              {i % 2 === 0 && (
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-transparent"
                                  animate={{
                                    x: ["-100%", "100%"],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.1,
                                    ease: "linear",
                                  }}
                                ></motion.div>
                              )}

                              {/* Cold air exiting through holes */}
                              {i % 2 === 1 && (
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500/30"
                                  animate={{
                                    x: ["100%", "-100%"],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.1,
                                    ease: "linear",
                                  }}
                                ></motion.div>
                              )}
                            </motion.div>
                          ))}
                        </div>

                        {/* Temperature Sensor */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.5 }}
                          className="absolute top-2 right-2 flex flex-col items-center"
                        >
                          <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse"></div>
                          </div>
                          <motion.div
                            className="text-[10px] font-mono mt-1 bg-slate-700/70 text-white px-1 rounded"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            40°C
                          </motion.div>
                        </motion.div>

                        {/* Water Droplets - Conditional based on temperature */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          className="absolute top-0 left-0 right-0"
                        >
                          {/* Water Reservoir */}
                          <motion.div
                            className="absolute top-0 left-0 right-0 h-2 bg-teal-400/70"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 1 }}
                          ></motion.div>

                          {/* Water Droplets */}
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={`drop-${i}`}
                              className="absolute w-2 h-3 bg-teal-400 rounded-b-full opacity-70"
                              style={{
                                left: `${15 + i * 18}%`,
                                top: "0px",
                              }}
                              initial={{ y: 0, opacity: 0 }}
                              animate={
                                isInView
                                  ? {
                                      y: [0, 280],
                                      opacity: [1, 0],
                                    }
                                  : {}
                              }
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: 1.5 + i * 0.7, // Delay start until "temperature detected"
                                ease: "easeIn",
                              }}
                            ></motion.div>
                          ))}
                        </motion.div>

                        {/* Evaporation Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-300/10 to-teal-300/20"
                          animate={{
                            opacity: [0.1, 0.3, 0.1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }}
                        ></motion.div>
                      </div>

                      {/* Label */}
                      <div className="text-center mt-2">
                        <span className="text-xs md:text-sm font-medium text-slate-600">ChillGrid Wall</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Right Section - Cool Air Output */}
                <div className="col-span-1 bg-slate-50 rounded-lg p-4 text-center flex flex-col items-center justify-center">
                  <h3 className="text-lg md:text-xl font-semibold text-teal-600 mb-2">Cool Air</h3>
                  <div className="text-2xl md:text-4xl font-bold text-teal-600">35°C</div>

                  {/* Cool Air Animation - Moving AWAY from the wall */}
                  <div className="relative h-32 w-full mt-4">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={`cool-${i}`}
                        className="absolute left-0 w-full"
                        style={{ top: `${i * 30 + 10}%` }}
                        animate={{
                          x: ["0%", "100%"],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.3,
                          ease: "linear",
                        }}
                      >
                        <div className="flex items-center">
                          <div className="h-2 bg-gradient-to-r from-transparent to-teal-500 rounded-full flex-grow"></div>
                          <ArrowRight className="w-4 h-4 text-teal-500 flex-shrink-0" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Process Explanation */}
              <div className="mt-8 grid grid-cols-4 gap-4 text-center text-xs md:text-sm">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-amber-600 font-medium"
                  >
                    1. Temperature sensor detects 40°C
                  </motion.div>
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-amber-600 font-medium"
                  >
                    2. Hot air enters through holes
                  </motion.div>
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="text-teal-600 font-medium"
                  >
                    3. Water releases & evaporates
                  </motion.div>
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="text-teal-600 font-medium"
                  >
                    4. Cool air exits outward
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Tags */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <motion.div
              variants={tagVariants}
              className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              Energy-Free
            </motion.div>
            <motion.div
              variants={tagVariants}
              className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              12.5% Cooling
            </motion.div>
            <motion.div
              variants={tagVariants}
              className="bg-slate-700 text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              Eco Air Conditioning
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
