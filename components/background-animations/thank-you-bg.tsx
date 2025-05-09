"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function ThankYouBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-amber-600/10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() > 0.5 ? 30 : -30, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          <Heart size={10 + Math.floor(Math.random() * 15)} fill="#d97706" />
        </motion.div>
      ))}

      {/* Clay texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 right-0 h-full bg-[url('/images/terracotta-texture.png')] bg-repeat opacity-30" />
      </div>

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-amber-500/5" />

      {/* Flowing lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`flow-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-teal-500/10 to-transparent"
          style={{
            width: "100%",
            top: `${10 + i * 10}%`,
          }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}
