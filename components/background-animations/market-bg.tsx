"use client"

import { motion } from "framer-motion"

export default function MarketBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Market graph lines */}
      {[...Array(8)].map((_, i) => {
        const height = 20 + Math.random() * 60
        return (
          <motion.div
            key={`graph-${i}`}
            className="absolute bottom-0 w-1 bg-gradient-to-t from-amber-500/20 to-amber-500/5"
            style={{
              height: `${height}%`,
              left: `${10 + i * 10}%`,
            }}
            animate={{
              height: [`${height}%`, `${height + 10 + Math.random() * 10}%`, `${height}%`],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        )
      })}

      {/* Floating percentage symbols */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`percent-${i}`}
          className="absolute text-amber-600/10 text-xl font-bold"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            delay: Math.random() * 5,
          }}
        >
          %
        </motion.div>
      ))}

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
    </div>
  )
}
