"use client"

import { motion } from "framer-motion"
import { Globe, TrendingUp, Users } from "lucide-react"

export default function GoToMarketBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* World map dots pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* Floating icons */}
      {[...Array(12)].map((_, i) => {
        const icons = [Globe, TrendingUp, Users]
        const IconComponent = icons[i % icons.length]
        return (
          <motion.div
            key={`icon-${i}`}
            className="absolute text-slate-200/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() > 0.5 ? 20 : -20, 0],
              rotate: [0, Math.random() > 0.5 ? 10 : -10, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            <IconComponent size={20 + Math.floor(Math.random() * 30)} />
          </motion.div>
        )
      })}

      {/* Connection lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent"
          style={{
            width: "100%",
            top: `${10 + i * 15}%`,
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
