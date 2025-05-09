"use client"

import { motion } from "framer-motion"

export default function FeaturesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      {[...Array(15)].map((_, i) => {
        const size = 10 + Math.random() * 30
        const isSquare = Math.random() > 0.5

        return (
          <motion.div
            key={`shape-${i}`}
            className={`absolute ${isSquare ? "rounded-md" : "rounded-full"} border-2 border-amber-600/30`}
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() > 0.5 ? 20 : -20, 0],
              rotate: [0, Math.random() * 180, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        )
      })}

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e0e0e0_1.5px,transparent_1.5px),linear-gradient(to_bottom,#e0e0e0_1.5px,transparent_1.5px)] [background-size:40px_40px]" />
      </div>
    </div>
  )
}
