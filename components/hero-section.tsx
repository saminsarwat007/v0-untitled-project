"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light-beige"
    >
      {/* Animated background with terracotta texture and flowing wind lines */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-terracotta/10"
          style={{
            backgroundImage: "url('/images/terracotta-texture.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Animated wind lines */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-forest-green/20"
              style={{
                top: `${10 + i * 8}%`,
                left: 0,
                right: 0,
                scaleX: 1,
              }}
              animate={{
                x: ["-100%", "100%"],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-terracotta to-forest-green bg-clip-text text-transparent"
        >
          ChillGrid – Natural Cooling Reinvented
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-cool-gray max-w-3xl mx-auto mb-10"
        >
          Transforming hot air into cool breezes — energy-free, aesthetic, and sustainable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="#how-it-works">
            <Button className="bg-forest-green hover:bg-forest-green/90 text-white px-6 py-6 rounded-full flex items-center gap-2 text-lg">
              See How It Works <ArrowDown size={18} />
            </Button>
          </Link>
          <Button className="bg-terracotta hover:bg-terracotta/90 text-white px-6 py-6 rounded-full flex items-center gap-2 text-lg">
            Get a Demo <ArrowRight size={18} />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <ArrowDown className="text-cool-gray" size={30} />
        </motion.div>
      </motion.div>
    </section>
  )
}
