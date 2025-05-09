"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart } from "lucide-react"
import ThankYouBackground from "@/components/background-animations/thank-you-bg"

export default function Slide13ThankYou() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden relative"
      ref={ref}
    >
      <ThankYouBackground />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-800"
          >
            Thank You for Your Time!
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10"
          >
            <div className="text-xl md:text-2xl font-medium text-amber-600 italic mb-8">
              "Let's Create an Impact – Going Back to Basics to Build the Future."
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative overflow-hidden"
        >
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-slate-700 mb-6 leading-relaxed"
            >
              Our ancestors used sustainable, time-tested techniques to harness the natural environment for cooling and
              comfort. With ChillGrid, we are reviving these principles in a modern way – integrating eco-friendly
              designs and natural processes to create lasting change.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-slate-700 mb-6 leading-relaxed"
            >
              No need for complicated, expensive technology. We're embracing what worked in the past and reimagining it
              for the future. It's about harnessing the power of nature with the ingenuity of human creativity.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-slate-700 font-medium text-center my-8"
            >
              Let's take a step back to move forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center"
            >
              <p className="text-xl text-teal-600 font-semibold flex items-center justify-center gap-2">
                Together, we can cool the future, naturally.
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                  <Heart className="w-5 h-5 text-amber-600" fill="#d97706" />
                </motion.span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
