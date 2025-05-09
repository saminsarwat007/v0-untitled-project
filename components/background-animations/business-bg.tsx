"use client"

import { motion } from "framer-motion"
import { DollarSign } from "lucide-react"

export default function BusinessBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dollar signs */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`dollar-${i}`}
          className="absolute text-amber-600/10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() > 0.5 ? 20 : -20, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          <DollarSign size={10 + Math.floor(Math.random() * 20)} />
        </motion.div>
      ))}

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* Graph lines */}
      {[...Array(5)].map((_, i) => {
        const points = Array.from({ length: 10 }, (_, j) => {
          const x = j * 10
          const y = 50 + (Math.random() - 0.5) * 30
          return `${x},${y}`
        }).join(" ")

        return (
          <svg key={`graph-${i}`} className="absolute bottom-0 left-0 w-full h-1/3 opacity-[0.05]">
            <polyline
              points={points}
              fill="none"
              stroke="#b45309"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      })}
    </div>
  )
}
